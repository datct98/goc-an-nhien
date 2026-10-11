<template>
  <div class="bounce-component">
    <button class="image-button" type="button" :aria-label="props.subText || 'Bounce image'" @click="handleClick">
      <img
        :key="animationKey"
        :src="props.imageSrc"
        :alt="props.subText || ''"
        :width="props.width"
        :class="{ bouncing: animationKey > 0 }"
        draggable="false"
      />
    </button>
    <p v-if="props.subText" class="sub-text">{{ props.subText }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  subText: {
    type: String,
    default: ''
  },
  width: {
    type: Number,
    default: 150
  }
})

const emit = defineEmits(['click'])
const animationKey = ref(0)

const handleClick = (event) => {
  animationKey.value += 1
  emit('click', event)
}
</script>

<style scoped>
.bounce-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.image-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.image-button img {
  display: block;
  max-width: 100%;
  height: auto;
  transform-origin: center bottom;
}

.image-button img.bouncing {
  animation: bounce 560ms cubic-bezier(0.28, 0.84, 0.42, 1) both;
}

.image-button:focus-visible {
  outline: 2px solid #f0d58a;
  outline-offset: 6px;
  border-radius: 8px;
}

.sub-text {
  margin: 8px 0 0;
  color: #fff8e8;
  font-size: 14px;
  line-height: 1.4;
  text-align: center;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
}

@keyframes bounce {
  0%, 100% { transform: translateY(0) scale(1); }
  25% { transform: translateY(-24px) scale(0.96, 1.04); }
  50% { transform: translateY(0) scale(1.05, 0.94); }
  70% { transform: translateY(-9px) scale(0.98, 1.02); }
  85% { transform: translateY(0) scale(1.01, 0.99); }
}

@media (prefers-reduced-motion: reduce) {
  .image-button img.bouncing {
    animation-duration: 1ms;
  }
}
</style>
