<template>
  <div class="floating" :style="floatingStyle">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  duration: {
    type: Number,
    default: 6
  },
  delay: {
    type: Number,
    default: 0
  },
  distance: {
    type: Number,
    default: 12
  }
})

const floatingStyle = computed(() => ({
  '--floating-duration': `${props.duration}s`,
  '--floating-delay': `${props.delay}s`,
  '--floating-distance': `${props.distance}px`
}))
</script>

<style scoped>
.floating {
  animation: floating var(--floating-duration) ease-in-out var(--floating-delay) infinite alternate;
  will-change: transform;
}

@keyframes floating {
  from { transform: translateY(0); }
  to { transform: translateY(calc(var(--floating-distance) * -1)); }
}

@media (prefers-reduced-motion: reduce) {
  .floating {
    animation: none;
    will-change: auto;
  }
}
</style>
