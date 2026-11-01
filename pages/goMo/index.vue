<template>
  <ContainerWithBackground src="/home/bg2_2.webp" aria-label="Quần đảo Góc An Nhiên" background-size="contain"
    :offset-top="0">
    <div class="gomo">
      <TalkMessage y="20" :message="message" :visible="showMessage" :time-disappear="timeToLeave" />
      <ToggleImage @click="goMo()" width="200" :src="src" :time="timeToLeave" />
      <audio ref="audioRef" src="/audio/goMo.m4a"></audio>
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
]);

const messages = [
  'Không được nói xấu sếp',
  'Không được nói xấu đồng nghiệp',
  'Đồng nghiệp lúc nào cũng tuyệt vời',
  'Sếp là bố là mẹ '
];
const mCount = ref(0);
const message = ref('Không được nói xấu sếp');
const showMessage = ref(false);
let messageTimeout;
const timeToLeave = ref(3000);
const audioRef = ref(null);
const isClick = ref(false);

watch(showMessage, (isVisible) => {
  clearTimeout(messageTimeout);
  if (isVisible) {
    if (mCount.value % 4 == 0) mCount.value = 0;
    message.value = messages[mCount.value];
    messageTimeout = setTimeout(() => {
      showMessage.value = false;
      mCount.value += 1;
    }, timeToLeave.value);
  }
});

const goMo = () => {
  console.log("Go mo");
  if (!isClick.value) {
    showMessage.value = true;
    // phat ra tieng dong
    audioRef.value.currentTime = 0;
    audioRef.value.play();
    isClick.value = true;
  } else {
    message.value = "Xin thí chủ đừng vội vàng, hãy hít thở thật sâu";
    isClick.value = false;
  }
}

</script>

<style src="./index.css"></style>
