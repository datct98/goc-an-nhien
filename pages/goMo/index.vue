<template>
  <ContainerWithBackground src="/home/bg2_2.webp" aria-label="Quần đảo Góc An Nhiên" background-size="contain"
    :offset-top="0">
    <div class="gomo">
      <TalkMessage y="20" :message="message" :visible="showMessage" :time-disappear="timeToLeave" />
      <ToggleImage @click="goMo()" width="200" :src="src" :time="timeToLeave" />
      <p style="color: white; position: absolute; bottom: -20px;">
        {{ isClick ? 'Thí chủ chờ một chút' : 'Sẵn sàng tụng kinh nào' }}
      </p>
      <audio ref="audioRef" src="/audio/goMo.m4a"></audio>
      <!-- <audio ref="audioTalk"></audio> -->
      <TextToSpeech :is-show="false" :message="message" :is-start="isStart" />
    </div>
  </ContainerWithBackground>
</template>

<script setup>
import ToggleImage from '~/components/common/ToggleImage.vue';
import ContainerWithBackground from '~/components/layout/ContainerWithBackground.vue';
import TalkMessage from '~/components/common/TalkMessage.vue';
import TextToSpeech from '~/components/common/TextToSpeech.vue';
import { watch } from 'vue';

const src = ref([
  '/gomo/up.png',
  '/gomo/down.png'
]);

const currentAudioPlay = ref(0);
const audioTalks = [
  'no_bad_talk_075.wav',
  'no_bad_talk_sep.wav',
  'team_good.wav'
]
const currentAudio = ref('no_bad_talk_075.wav');
const messages = [
  'Không được nói xấu đồng nghiệp',
  'Không được nói xấu sếp',
  'Đồng nghiệp lúc nào cũng tuyệt vời',
];
const mCount = ref(0);
const message = ref('Không được nói xấu sếp');
const showMessage = ref(false);
let messageTimeout;
const timeToLeave = ref(3000);
const audioRef = ref(null);
const audioTalk = ref(null);
const volumeLevel = ref(0.5);
const isClick = ref(false);
const isStart = ref(false);

const playMessage = () => {
  isStart.value = true;
}

watch(showMessage, (isVisible) => {
  clearTimeout(messageTimeout);
  if (isVisible) {
    if (mCount.value % (messages.length) == 0) mCount.value = 0;
    message.value = messages[mCount.value];
    messageTimeout = setTimeout(() => {
      showMessage.value = false;
      mCount.value += 1;
      isClick.value = false;
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
    // phat ra am thanh audioTalk
    playMessage();
    isClick.value = true;
  } else {
    message.value = "Xin thí chủ đừng vội vàng, hãy hít thở thật sâu";
    // isClick.value = false;
  }
}

const changeTrack = async (newSrc) => {
  console.log("newSrc : ", newSrc);

  if (audioTalk.value) {
    audioTalk.value.pause();
    audioTalk.value.removeAttribute('src'); // Gỡ src sạch sẽ
    audioTalk.value.load();
  }

  try {
    audioTalk.value.src = `/audio/${newSrc}`;
    audioTalk.value.currentTime = 0;
    await audioTalk.value.play();
  } catch (error) {
    console.error(error);
  }
};

</script>

<style src="./index.css"></style>
