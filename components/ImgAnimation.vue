<template>
    <div class="image-animation-container" :class="className" :style="containerStyle">
        <img v-if="images.length > 0" :src="images[activeIndex]" :alt="`Animation frame ${activeIndex}`"
            :style="imageStyle" class="animation-frame" />
        <div v-else class="empty-state">Không có ảnh</div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'

const props = defineProps({
    images: {
        type: Array,
        required: true,
        default: () => []
    },
    interval: {
        type: Number,
        default: 100
    },
    // Thêm prop chỉnh chiều rộng
    width: {
        type: [String, Number],
        default: '300px' // Bạn có thể truyền: 300, "300px", "100%"...
    },
    // Thêm prop chỉnh cách hiển thị ảnh (cover, contain, fill...)
    objectFit: {
        type: String,
        default: 'cover'
    },
    // Thêm prop delay khi quay lại index 0
    delay: {
        type: Number,
        default: 0
    }
})

const activeIndex = ref(0)
let timer = null

// Tính toán Style cho Container
const containerStyle = computed(() => {
    const w = typeof props.width === 'number' ? `${props.width}px` : props.width
    return {
        width: w,
        height: 'auto'
    }
})

// Tính toán Style cho Image
const imageStyle = computed(() => {
    return {
        objectFit: props.objectFit,
        width: '100%',
        height: '100%'
    }
})

const startAnimation = () => {
    stopAnimation()
    if (props.images.length <= 1) return

    const run = () => {
        const nextIndex = (activeIndex.value + 1) % props.images.length
        let wait = props.interval

        // Nếu quay lại index 0 và có delay thì cộng thêm vào wait
        if (nextIndex === 0 && props.delay > 0) {
            wait += props.delay
        }

        activeIndex.value = nextIndex
        timer = setTimeout(run, wait)
    }

    timer = setTimeout(run, props.interval)
}

const stopAnimation = () => {
    if (timer) {
        clearTimeout(timer)
        timer = null
    }
}

onMounted(() => startAnimation())
onUnmounted(() => stopAnimation())

watch(() => props.images, () => {
    activeIndex.value = 0
    startAnimation()
}, { deep: true })
</script>

<style scoped>
.image-animation-container {
    display: inline-block;
    overflow: hidden;
}

.animation-frame {
    display: block;
}

.empty-state {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #999;
    font-size: 14px;
}
</style>