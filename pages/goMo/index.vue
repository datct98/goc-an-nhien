<template>
  <ContainerWithBackground src="/home/bg2_2.webp" aria-label="Quần đảo Góc An Nhiên" background-size="contain"
    :offset-top="0">
    <div class="gomo">
      <TalkMessage y="50" message="Không được nói xấu sếp" :visible="showMessage" :time-disappear="timeToLeave" />
      <ToggleImage @click="goMo()" width="200" :src="src" :time="timeToLeave" />
    </div>
  </ContainerWithBackground>
</template>

<script setup>
import ToggleImage from '~/components/common/ToggleImage.vue';
import ContainerWithBackground from '~/components/layout/ContainerWithBackground.vue';
import TalkMessage from '~/components/common/TalkMessage.vue';
import { watch } from 'vue';

const src = ref([
  '/gomo/up.png',
  '/gomo/down.png'
])

const showMessage = ref(false);
let messageTimeout;
const timeToLeave = ref(2000)


watch(showMessage, (isVisible) => {
  clearTimeout(messageTimeout);
  if (isVisible) {
    messageTimeout = setTimeout(() => {
      showMessage.value = false;
    }, timeToLeave.value);
  }
});

const goMo = () => {
  console.log("Go mo")
  showMessage.value = true;
}

</script>

<style src="./index.css"></style>
