<template>
    <div class="image-animation-container" :class="className" :style="containerStyle">
        <!-- 
            Sử dụng v-for và v-show để render tất cả các frame ảnh cùng một lúc.
            Điều này giúp trình duyệt load và cache toàn bộ ảnh ngay lần đầu, 
            tránh việc bắn request network liên tục mỗi khi đổi activeIndex.
        -->
        <template v-if="images.length > 0">
            <Image v-for="(img, index) in images" :key="index" v-show="index === activeIndex" :src="img"
                :alt="`Animation frame ${index}`" :style="imageStyle" class="animation-frame" />
        </template>
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
    width: {
        type: [String, Number],
        default: 5
    },
    objectFit: {
        type: String,
        default: 'cover'
    },
    delay: {
        type: Number,
        default: 0
    },
    className: {
        type: String,
        default: ''
    }
})

const activeIndex = ref(0)
const isReady = ref(false)
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

// Hàm load trước toàn bộ ảnh
const preloadImages = async () => {
    if (props.images.length === 0) return;

    isReady.value = false;
    const promises = props.images.map(src => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve; // Tiếp tục kể cả khi lỗi
        });
    });

    await Promise.all(promises);
    isReady.value = true;
};

const startAnimation = async () => {
    stopAnimation();
    if (props.images.length <= 1) return;

    // Chờ cho đến khi tất cả ảnh đã được load (cache)
    if (!isReady.value) {
        await preloadImages();
    }

    let lastTimestamp = performance.now();

    const run = (timestamp) => {
        const elapsed = timestamp - lastTimestamp;

        // Xác định thời gian chờ mong muốn
        const isLooping = (activeIndex.value + 1) % props.images.length === 0;
        const currentWait = isLooping ? (props.interval + props.delay) : props.interval;

        if (elapsed >= currentWait) {
            activeIndex.value = (activeIndex.value + 1) % props.images.length;
            lastTimestamp = timestamp;
        }

        timer = requestAnimationFrame(run);
    };

    timer = requestAnimationFrame(run);
};

const stopAnimation = () => {
    if (timer) {
        cancelAnimationFrame(timer);
        timer = null;
    }
};

onMounted(() => {
    startAnimation()
})

onUnmounted(() => {
    stopAnimation()
})

watch(() => props.images, async () => {
    activeIndex.value = 0
    isReady.value = false
    await startAnimation()
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