<template>
  <div
    class="sprite-animation"
    :style="spriteStyle"
  />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  frameWidth: {
    type: Number,
    required: true
  },
  frameHeight: {
    type: Number,
    required: true
  },
  frames: {
    type: Number,
    required: true
  },
  fps: {
    type: Number,
    default: 12
  },
  loop: {
    type: Boolean,
    default: true
  },
  scale: {
    type: Number,
    default: 1
  }
})

const duration = computed(() => props.frames / props.fps)
const scaledWidth = computed(() => props.frameWidth * props.scale)
const totalScaledWidth = computed(() => scaledWidth.value * props.frames)

const spriteStyle = computed(() => ({
  width: `${scaledWidth.value}px`,
  height: `${props.frameHeight * props.scale}px`,
  backgroundImage: `url("${props.src}")`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: `${totalScaledWidth.value}px ${props.frameHeight * props.scale}px`,

  // Pass the target offset to the CSS keyframe
  '--sprite-end-position': `-${totalScaledWidth.value}px 0`,

  animationDuration: `${duration.value}s`,
  animationTimingFunction: `steps(${props.frames})`,
  animationIterationCount: props.loop ? 'infinite' : '1',
  animationFillMode: 'forwards'
}))
</script>

<style scoped>
.sprite-animation {
  display: inline-block;
  image-rendering: pixelated; /* Crisp rendering for pixel art (optional) */
  animation-name: sprite-animation;
}

@keyframes sprite-animation {
  from {
    background-position: 0 0;
  }
  to {
    background-position: var(--sprite-end-position);
  }
}
</style>