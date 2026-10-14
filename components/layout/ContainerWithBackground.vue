<template>
  <main :class="['container-with-background', props.customClass]" :style="backgroundStyle">
    <slot />
  </main>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  backgroundSize: {
    type: String,
    default: 'cover'
  },
  offsetTop: {
    type: Number,
    default: 0
  },
  customClass: {
    type: [String, Array, Object],
    default: ''
  }
});

console.log('ContainerWithBackground props:', props);

const backgroundStyle = computed(() => ({
  backgroundImage: `url("${props.src}")`,
  backgroundSize: props.backgroundSize,
  backgroundPosition: `center calc(50% + ${props.offsetTop}px)`
}))
</script>

<style scoped>
.container-with-background {
  position: relative;
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #391B13;
}
</style>
