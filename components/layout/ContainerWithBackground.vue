<template>
  <main v-if="isMobileView" :class="['container-with-background', props.customClass]" :style="backgroundStyle">
    <slot />
  </main>
  <main v-else class="desktop-notice" role="status">
    <section class="desktop-notice__card">
      <span class="desktop-notice__icon" aria-hidden="true">📱</span>
      <h1>Giao diện desktop đang được phát triển</h1>
      <p>Hệ thống hiện chưa hỗ trợ giao diện desktop.</p>
      <p>Vui lòng chuyển sang sử dụng giao diện mobile để tiếp tục.</p>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue';
const { isMobileView } = useDevice();

console.log('isMobileView:', isMobileView.value);

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

.desktop-notice {
  display: grid;
  min-height: 100vh;
  place-items: center;
  padding: 24px;
  color: #391b13;
  background: linear-gradient(145deg, #fff8e9, #f3dfbd);
  text-align: center;
}

.desktop-notice__card {
  width: min(100%, 520px);
  padding: 40px 32px;
  border: 1px solid rgba(118, 79, 39, 0.18);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 18px 55px rgba(57, 27, 19, 0.12);
}

.desktop-notice__icon {
  display: block;
  margin-bottom: 18px;
  font-size: 48px;
}

.desktop-notice h1 {
  margin: 0 0 16px;
  font-size: clamp(24px, 4vw, 32px);
  line-height: 1.25;
}

.desktop-notice p {
  margin: 8px 0 0;
  color: #674d3c;
  font-size: 16px;
  line-height: 1.6;
}
</style>
