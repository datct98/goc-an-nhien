<template>
    <div ref="containerRef" class="parallax-scrolling">
        <div class="object">
            <slot></slot>
        </div>
        <div ref="trackRef" class="parallax-track" :style="trackStyle">
            <img v-for="(image, index) in renderedImages" :key="`${index}-${image}`" :src="image" class="parallax-image"
                draggable="false" alt="" />
        </div>
    </div>
</template>

<script setup>
import {
    computed,
    nextTick,
    onBeforeUnmount,
    onMounted,
    ref,
    watch
} from 'vue'

const props = defineProps({
    /**
     * Danh sách ảnh
     *
     * Tối thiểu 3 ảnh.
     */
    imageSrc: {
        type: Array,
        required: true,

        validator: (value) => {
            return (
                Array.isArray(value) &&
                value.length >= 3 &&
                value.every(
                    (item) => typeof item === 'string'
                )
            )
        }
    },

    /**
     * Tốc độ px / giây
     */
    speed: {
        type: Number,
        default: 50,

        validator: (value) => value > 0
    },

    /**
     * 0 = phải -> trái
     * 1 = trái -> phải
     */
    horizon: {
        type: Number,
        default: 0,

        validator: (value) => {
            return value === 0 || value === 1
        }
    }
})

const containerRef = ref(null)
const trackRef = ref(null)

const translateX = ref(0)

let animationFrame = null
let lastTimestamp = null

/**
 * Overlap giữa các ảnh.
 *
 * Giúp loại bỏ seam trắng do GPU
 * sub-pixel rendering.
 */
const IMAGE_OVERLAP = 2

/**
 * =========================================================
 * BASE IMAGES
 * =========================================================
 *
 * horizon = 0:
 *
 * 1 2 3
 *
 * horizon = 1:
 *
 * 3 2 1
 */
const orderedImages = computed(() => {
    if (props.horizon === 1) {
        return [...props.imageSrc].reverse()
    }

    return [...props.imageSrc]
})

/**
 * =========================================================
 * RENDERED IMAGES
 * =========================================================
 *
 * Tạo 3 cycle:
 *
 * horizon = 0:
 *
 * 1 2 3 | 1 2 3 | 1 2 3
 *
 *
 * horizon = 1:
 *
 * 3 2 1 | 3 2 1 | 3 2 1
 */
const renderedImages = computed(() => {
    return [
        ...orderedImages.value,
        ...orderedImages.value,
        ...orderedImages.value
    ]
})

/**
 * Transform của track.
 */
const trackStyle = computed(() => {
    return {
        transform: `translate3d(${translateX.value}px, 0, 0)`
    }
})

/**
 * =========================================================
 * GET CYCLE WIDTH
 * =========================================================
 *
 * Lấy khoảng cách thực tế giữa:
 *
 * cycle 1 - image đầu
 *
 * và
 *
 * cycle 2 - image đầu
 *
 * Không giả định tất cả ảnh có cùng width.
 */
const getCycleWidth = () => {
    if (!trackRef.value) {
        return 0
    }

    const images =
        trackRef.value.querySelectorAll(
            '.parallax-image'
        )

    const count = orderedImages.value.length

    if (images.length < count * 2) {
        return 0
    }

    const firstImage = images[0]

    const secondCycleFirstImage =
        images[count]

    return (
        secondCycleFirstImage.offsetLeft -
        firstImage.offsetLeft
    )
}

/**
 * =========================================================
 * ANIMATION
 * =========================================================
 */
const animate = (timestamp) => {
    if (lastTimestamp === null) {
        lastTimestamp = timestamp
    }

    const deltaTime =
        (timestamp - lastTimestamp) / 1000

    lastTimestamp = timestamp

    const cycleWidth = getCycleWidth()

    if (cycleWidth <= 0) {
        animationFrame =
            requestAnimationFrame(animate)

        return
    }

    const distance =
        props.speed * deltaTime

    /**
     * ==========================================
     * HORIZON = 0
     * RIGHT -> LEFT
     * ==========================================
     *
     * 1 -> 2 -> 3 -> 1 -> 2 -> 3
     *
     * Track:
     *
     * [1][2][3][1][2][3]
     *  <----------------
     */
    if (props.horizon === 0) {
        translateX.value -= distance

        if (
            translateX.value <= -cycleWidth
        ) {
            translateX.value += cycleWidth
        }
    }

    /**
     * ==========================================
     * HORIZON = 1
     * LEFT -> RIGHT
     * ==========================================
     *
     * 3 -> 2 -> 1 -> 3 -> 2 -> 1
     *
     * Track:
     *
     * [3][2][1][3][2][1]
     * ---------------->
     */
    else {
        translateX.value += distance

        if (translateX.value >= 0) {
            translateX.value -= cycleWidth
        }
    }

    animationFrame =
        requestAnimationFrame(animate)
}

/**
 * Start animation.
 */
const startAnimation = () => {
    stopAnimation()

    lastTimestamp = null

    animationFrame =
        requestAnimationFrame(animate)
}

/**
 * Stop animation.
 */
const stopAnimation = () => {
    if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame)

        animationFrame = null
    }

    lastTimestamp = null
}

/**
 * =========================================================
 * WAIT FOR IMAGES
 * =========================================================
 */
const waitForImages = async () => {
    if (!trackRef.value) {
        return
    }

    const images =
        trackRef.value.querySelectorAll(
            '.parallax-image'
        )

    await Promise.all(
        Array.from(images).map((image) => {
            if (image.complete) {
                return Promise.resolve()
            }

            return new Promise((resolve) => {
                image.addEventListener(
                    'load',
                    resolve,
                    { once: true }
                )

                image.addEventListener(
                    'error',
                    resolve,
                    { once: true }
                )
            })
        })
    )
}

/**
 * =========================================================
 * RESIZE
 * =========================================================
 */
const handleResize = async () => {
    await nextTick()

    const cycleWidth = getCycleWidth()

    if (cycleWidth <= 0) {
        return
    }

    /**
     * horizon 0:
     *
     * bắt đầu cycle 1
     */
    if (props.horizon === 0) {
        translateX.value = 0
    }

    /**
     * horizon 1:
     *
     * bắt đầu cycle 2
     *
     * [3][2][1][3][2][1]
     *             ↑
     */
    else {
        translateX.value = -cycleWidth
    }

    lastTimestamp = null
}

/**
 * =========================================================
 * WATCH IMAGE
 * =========================================================
 */
watch(
    () => props.imageSrc,
    async () => {
        await nextTick()

        await waitForImages()

        await handleResize()
    },
    {
        deep: true
    }
)

/**
 * Khi đổi horizon:
 *
 * 0 -> 1
 * hoặc
 * 1 -> 0
 *
 * phải render lại thứ tự ảnh.
 */
watch(
    () => props.horizon,
    async () => {
        stopAnimation()

        await nextTick()

        await waitForImages()

        await handleResize()

        startAnimation()
    }
)

/**
 * =========================================================
 * MOUNT
 * =========================================================
 */
onMounted(async () => {
    await nextTick()

    await waitForImages()

    await nextTick()

    const cycleWidth = getCycleWidth()

    /**
     * ==========================================
     * HORIZON 0
     *
     * 1 2 3 | 1 2 3 | 1 2 3
     * ^
     *
     * Bắt đầu image 1
     * ==========================================
     */
    if (props.horizon === 0) {
        translateX.value = 0
    }

    /**
     * ==========================================
     * HORIZON 1
     *
     * 3 2 1 | 3 2 1 | 3 2 1
     *         ^
     *
     * Bắt đầu image 3
     * ==========================================
     */
    else {
        translateX.value = -cycleWidth
    }

    window.addEventListener(
        'resize',
        handleResize
    )

    startAnimation()
})

onBeforeUnmount(() => {
    stopAnimation()

    window.removeEventListener(
        'resize',
        handleResize
    )
})
</script>

<style scoped>
.object {
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
}

.parallax-scrolling {
    position: relative;

    width: 100vw;
    height: 100dvh;

    overflow: hidden;

    margin: 0;
    padding: 0;

    white-space: nowrap;

    user-select: none;

    touch-action: none;

    background: transparent;
}

.parallax-track {
    display: flex;

    flex-wrap: nowrap;

    width: max-content;
    height: 100%;

    margin: 0;
    padding: 0;

    line-height: 0;

    flex-shrink: 0;

    will-change: transform;

    backface-visibility: hidden;

    transform-style: flat;
}

.parallax-image {
    /**
   * FIT HEIGHT
   */
    height: 100dvh;

    /**
   * Width tự tính theo aspect ratio.
   */
    width: auto;

    /**
   * Không crop.
   */
    object-fit: contain;

    /**
   * Không cho flex resize.
   */
    flex: 0 0 auto;

    display: block;

    margin: 0;

    padding: 0;

    /**
   * Overlap 2px để loại bỏ seam trắng.
   */
    margin-right: -2px;

    vertical-align: top;

    max-height: none;

    pointer-events: none;

    backface-visibility: hidden;
}
</style>