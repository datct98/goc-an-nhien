<template>
  <ContainerWithBackground customClass="huyenHoc" :src="ASSETS.background.spiritualLearning" aria-label="Xem tử vi" background-size="cover">
    <BatQuai :status="status" :width="200" />
  </ContainerWithBackground>
</template>

<script setup>
import ContainerWithBackground from '~/components/layout/ContainerWithBackground.vue';
import { ASSETS } from '~/config/assets';
import BatQuai from '~/components/huyen-hoc/BatQuai.vue';

const status = ref('idle');

</script>

<style scoped>
.huyenHoc {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 20px;
  padding-top: 15vh;
}
</style>
