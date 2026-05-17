<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    modelValue: { type: Number, default: 0 }
})

const emit = defineEmits(['update:modelValue'])

const isDragging = ref(false)
let startY = 0
let lastScrollY = 0

// Góc xoay giữa các số (30 độ là lý tưởng cho giao diện 3 số)
const ROTATE_DEGREE = 30

// CHỈ LỌC RA 5 SỐ: 2 số trước, số hiện tại, và 2 số sau
const visibleNumbers = computed(() => {
    const current = props.modelValue
    const nums = []

    if (current - 2 >= props.min) nums.push(current - 2)
    if (current - 1 >= props.min) nums.push(current - 1)
    
    // Luôn luôn có số hiện tại
    nums.push(current)

    if (current + 1 <= props.max) nums.push(current + 1)
    if (current + 2 <= props.max) nums.push(current + 2)

    return nums
})

// Tính toán góc xoay tổng thể của ổ quay dựa trên giá trị hiện tại
const rotationAngle = computed(() => {
    return props.modelValue * -ROTATE_DEGREE
})

// Khởi tạo AudioContext cho âm thanh vòng quay
let audioCtx = null

const initAudio = () => {
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)()
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume().catch(() => {})
        }
    } catch (e) {}
}

const playTickSound = () => {
    try {
        if (!audioCtx || audioCtx.state === 'suspended') {
            return
        }
        const oscillator = audioCtx.createOscillator()
        const gainNode = audioCtx.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(audioCtx.destination)

        // Âm thanh "tick" nhẹ
        oscillator.type = 'sine'
        oscillator.frequency.setValueAtTime(800, audioCtx.currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.05)

        gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05)

        oscillator.start(audioCtx.currentTime)
        oscillator.stop(audioCtx.currentTime + 0.05)
    } catch (error) {
        // Bỏ qua lỗi
    }
}

const updateValue = (val) => {
    const clamped = Math.max(props.min, Math.min(props.max, val))
    if (clamped !== props.modelValue) {
        playTickSound()
        emit('update:modelValue', clamped)
    }
}

// Xử lý vuốt và kéo chuột
const onStart = (e) => {
    initAudio()
    isDragging.value = true
    startY = e.touches ? e.touches[0].clientY : e.clientY
    lastScrollY = props.modelValue

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onEnd)
    window.addEventListener('touchmove', onMove, { passive: false })
    window.addEventListener('touchend', onEnd)
}

const onMove = (e) => {
    if (!isDragging.value) return
    if (e.cancelable) e.preventDefault()

    const currentY = e.touches ? e.touches[0].clientY : e.clientY
    const diffY = startY - currentY

    // Độ nhạy: di chuyển 25px sẽ đổi 1 số (vuốt mượt và đầm tay hơn)
    const sensitivity = 25
    const newVal = Math.round(lastScrollY + (diffY / sensitivity))

    if (newVal !== props.modelValue) {
        updateValue(newVal)
    }
}

const onEnd = () => {
    isDragging.value = false
    window.removeEventListener('mousemove', onMove)
    window.removeEventListener('mouseup', onEnd)
    window.removeEventListener('touchmove', onMove)
    window.removeEventListener('touchend', onEnd)
}

const onWheel = (e) => {
    initAudio()
    e.preventDefault()
    updateValue(e.deltaY > 0 ? props.modelValue + 1 : props.modelValue - 1)
}
</script>

<template>
    <div class="picker-viewport" @mousedown="onStart" @touchstart="onStart" @wheel="onWheel">
        <!-- Khung căn chỉnh highlight ở chính giữa -->
        <div class="picker-highlight-box"></div>

        <!-- Ổ quay 3D -->
        <div class="picker-wheel" :style="{
            transform: `rotateX(${rotationAngle}deg)`,
            transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }">
            <div v-for="num in visibleNumbers" :key="num" class="picker-item"
                :class="{ 'is-active': num === modelValue }" :style="{
                    transform: `rotateX(${num * ROTATE_DEGREE}deg) translateZ(70px)`,
                }">
                {{ num }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.picker-viewport {
    position: relative;
    width: 70px;
    height: 200px;
    /* Tăng chiều cao để hiển thị 5 số */
    background: transparent;
    perspective: 1200px;
    /* Tăng perspective để hiệu ứng 3D sâu và rõ nét hơn */
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: ns-resize;
    user-select: none;
}

/* Đường gạch ngang hoặc khung mờ nhẹ định vị số đang chọn */
.picker-highlight-box {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 42px;
    transform: translateY(-50%);
    border-top: 1px solid rgba(255, 255, 255, 0.25);
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    pointer-events: none;
    background: rgba(255, 255, 255, 0.03);
}

.picker-wheel {
    position: relative;
    width: 100%;
    height: 40px;
    transform-style: preserve-3d;
    will-change: transform;
}

.picker-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 1.4rem;
    font-weight: 400;
    font-variant-numeric: tabular-nums;
    backface-visibility: hidden;

    /* Hiệu ứng chuyển đổi mượt mà giữa số ẩn và hiện */
    opacity: 0.35;
    scale: 0.85;
    transition: opacity 0.3s ease, scale 0.3s ease, color 0.3s ease;
}

/* Style đặc biệt cho số đang nằm ở chính giữa */
.picker-item.is-active {
    opacity: 1;
    scale: 1.15;
    /* Phóng to nhẹ tạo điểm nhấn */
    font-weight: 700;
}
</style>