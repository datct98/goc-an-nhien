<template>
  <ContainerWithBackground customClass="huyenHoc" src="/home/bg3.png" aria-label="Quần đảo Góc An Nhiên" background-size="cover"  >
    <div class="xemTuVi">
      <Image src="/huyenHoc/batQuai.png" width="300" />
    </div>
    <div class="xemChiTay">
      <Image src="/huyenHoc/xemChiTay.png" width="300" />
    </div>
    <div class="xemTarot">
      <Image src="/huyenHoc/tarot.png" width="300" />
    </div>
  </ContainerWithBackground>
</template>

<script setup>
import ContainerWithBackground from '~/components/layout/ContainerWithBackground.vue'
</script>

<style scoped src="./index.css"></style>