<template>
  <div v-if="isShow" class="config-go-mo" :class="{ 'is-open': isOpen }">
    <div class="config-go-mo__panel" role="region" aria-label="Cài đặt" :aria-hidden="!isOpen">
      <slot />
    </div>

    <button v-if="showButton" class="config-go-mo__toggle" type="button" :aria-expanded="isOpen"
      aria-label="Mở hoặc đóng cài đặt" @click="toggle">
      <img src="/gomo/config.png" alt="" draggable="false">
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  isShow: {
    type: Boolean,
    default: true
  },
  showButton: {
    type: Boolean,
    default: true
  }
})

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}

watch(() => props.showButton, (showButton) => {
  if (!showButton) isOpen.value = false
})
</script>

<style scoped>
.config-go-mo {
  --panel-width: min(380px, 78vw, 58vh);

  position: fixed;
  z-index: 1000;
  inset: 0;
  pointer-events: none;
}

.config-go-mo__panel {
  position: absolute;
  top: 38%;
  left: 0;
  display: flex;
  width: var(--panel-width);
  max-height: 82vh;
  aspect-ratio: 1077 / 1450;
  flex-direction: column;
  background: url('/gomo/blankListGreen.png') center / 100% 100% no-repeat;
  transform: translate(-100%, -50%);
  transition: transform 1s cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;
}

.is-open .config-go-mo__panel {
  transform: translate(0, -50%);
  pointer-events: auto;
}

.config-go-mo__toggle {
  position: absolute;
  top: 38%;
  left: 0;
  display: block;
  width: 50px;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  pointer-events: auto;
  transform: translateY(-50%);
  transition: left 1s cubic-bezier(0.22, 1, 0.36, 1), transform 1s cubic-bezier(0.22, 1, 0.36, 1);
}

.config-go-mo__toggle img {
  display: block;
  width: 100%;
  height: auto;
  user-select: none;
}

.is-open .config-go-mo__toggle {
  left: calc(var(--panel-width) - 22px);
  transform: translateY(-50%) scaleX(-1);
}
</style>
