<template>
  <main class="container-with-background" :style="backgroundStyle">
    <slot />
  </main>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  }
})

const backgroundStyle = computed(() => ({
  backgroundImage: `url("${props.src}")`
}))
</script>

<style scoped>
.container-with-background {
  position: relative;
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
