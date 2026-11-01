<template>
    <button
        type="button"
        class="toggle-image"
        :style="containerStyle"
        :aria-label="alt || 'Đổi hình ảnh'"
        @click="toggleImage"
    >
        <Image
            :src="currentSrc"
            :alt="alt"
            :width="width"
            class="toggle-image__image"
        />
    </button>
</template>

<script setup>
import { computed, onUnmounted, ref, watch } from 'vue'

const props = defineProps({
    src: {
        type: Array,
        required: true,
        validator: (value) => value.length === 2 && value.every((item) => typeof item === 'string')
    },
    width: {
        type: [Number, String],
        default: undefined
    },
    time: {
        type: Number,
        default: 1000
    },
    alt: {
        type: String,
        default: ''
    }
})

const isToggled = ref(false)
const currentSrc = computed(() => props.src[isToggled.value ? 1 : 0])
const containerStyle = computed(() => ({
    width: typeof props.width === 'number' ? `${props.width}px` : props.width
}))

let timeoutId

function toggleImage() {
    clearTimeout(timeoutId)
    isToggled.value = true
    timeoutId = setTimeout(() => {
        isToggled.value = false
        timeoutId = undefined
    }, Math.max(0, props.time))
}

watch(() => props.src, () => {
    clearTimeout(timeoutId)
    timeoutId = undefined
    isToggled.value = false
})

onUnmounted(() => clearTimeout(timeoutId))
</script>

<style scoped>
.toggle-image {
    display: inline-block;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
}

.toggle-image__image {
    display: block;
    width: 100%;
    height: auto;
}
</style>
