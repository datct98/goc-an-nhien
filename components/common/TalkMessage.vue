<template>
    <div v-if="isVisible" class="talk-message" :style="positionStyle" role="status">
        {{ message }}
    </div>
</template>

<script setup>
import { computed, onUnmounted, ref, watch } from 'vue'

const props = defineProps({
    y: {
        type: [Number, String],
        default: 0
    },
    message: {
        type: String,
        required: true
    },
    timeDisappear: {
        type: Number,
        default: 3000
    },
    visible: {
        type: Boolean,
        default: false
    }
})

const isVisible = ref(props.visible)
const positionStyle = computed(() => ({
    top: `-${Math.abs(Number(props.y) || 0)}px`
}))

let timeoutId

function startDisappearTimer() {
    clearTimeout(timeoutId)
    isVisible.value = true
    timeoutId = setTimeout(() => {
        isVisible.value = false
        timeoutId = undefined
    }, Math.max(0, props.timeDisappear))
}

watch(() => props.visible, (visible) => {
    if (visible) {
        startDisappearTimer()
    } else {
        clearTimeout(timeoutId)
        timeoutId = undefined
        isVisible.value = false
    }
}, { immediate: true })

watch(() => [props.message, props.timeDisappear], () => {
    if (props.visible) startDisappearTimer()
})

onUnmounted(() => clearTimeout(timeoutId))
</script>

<style scoped>
.talk-message {
    position: absolute;
    left: 50%;
    z-index: 10;
    width: max-content;
    max-width: min(260px, 80vw);
    padding: 10px 14px;
    border: 1px solid rgba(73, 54, 37, 0.15);
    border-radius: 16px;
    background: #fffdf8;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.16);
    color: #33271f;
    font-size: 14px;
    line-height: 1.4;
    overflow-wrap: anywhere;
    transform: translate(-50%, -100%);
}

.talk-message::after {
    position: absolute;
    bottom: -7px;
    left: 50%;
    width: 12px;
    height: 12px;
    border-right: 1px solid rgba(73, 54, 37, 0.15);
    border-bottom: 1px solid rgba(73, 54, 37, 0.15);
    background: #fffdf8;
    content: '';
    transform: translateX(-50%) rotate(45deg);
}
</style>
