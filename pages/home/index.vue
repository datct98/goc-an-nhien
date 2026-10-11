<template>
  <main class="home-page" aria-label="Quần đảo Góc An Nhiên">
    <Floating class="island island--one" :duration="6.5" :distance="12">
      <Image src="/home/landLayer/island1.png" alt="Đảo chùa và chú tiểu" draggable="false" width="200" />
    </Floating>

    <Floating class="island island--two" :duration="7.5" :delay="0.7" :distance="10">
      <Image src="/home/landLayer/island2.png" alt="Đảo nơi thiền sư đọc sách" draggable="false" width="200" />
    </Floating>

    <Floating class="island island--three" :duration="8" :delay="1.2" :distance="14">
      <Image src="/home/landLayer/island3.png" alt="Đảo ngôi nhà bên thác nước" draggable="false" width="200" />
    </Floating>
  </main>
</template>

<script setup>
import Floating from '~/components/effects/Floating.vue'
</script>

<style scoped src="./index.css"></style>
