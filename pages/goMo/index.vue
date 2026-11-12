<template>
  <ContainerWithBackground src="/home/bg2_2.webp" aria-label="Quần đảo Góc An Nhiên" background-size="contain"
    :offset-top="0">
    <div class="gomo">
      <TalkMessage y="20" :message="message" :visible="showMessage" :time-disappear="timeToLeave" />
      <ToggleImage @click="goMo()" width="200" :src="src" :time="timeToLeave" />
      <img v-for="leaf in leaves" :key="leaf.id" class="gomo-leaf" src="/layout/small_leaf.png" alt="tesst"
        aria-hidden="true"
        :style="{ left: `${leaf.x}%`, top: `${leaf.y}px`, '--leaf-drift': `${leaf.drift}px`, '--leaf-rotation': `${leaf.rotation}deg` }" />
      <p style="color: white; position: absolute; bottom: -20px;">
        {{ isClick ? 'Thí chủ chờ một chút' : 'Sẵn sàng tụng kinh nào' }}
      </p>
      <audio ref="audioRef" src="/audio/goMo.m4a"></audio>
      <TextToSpeech :is-show="true" :message="message" :is-start="isStart" @update:messages="updateMessages">
      </TextToSpeech>
    </div>
  </ContainerWithBackground>
</template>

<script setup>
import ToggleImage from '~/components/common/ToggleImage.vue';
import ContainerWithBackground from '~/components/layout/ContainerWithBackground.vue';
import TalkMessage from '~/components/common/TalkMessage.vue';
import TextToSpeech from '~/components/common/TextToSpeech.vue';
import { onMounted, onUnmounted, ref, watch } from 'vue';

const src = ref([
  '/gomo/up.png',
  '/gomo/down.png'
]);
// default mesage
const defaultMessages = [
  'Không được nói xấu đồng nghiệp',
  'Không được nói xấu sếp',
  'Đồng nghiệp lúc nào cũng tuyệt vời',
];
const messages = ref([...defaultMessages]);
const mCount = ref(0);
const message = ref('Không được nói xấu sếp');
const showMessage = ref(false);
let messageTimeout;
const timeToLeave = ref(3000);
const audioRef = ref(null);
const isClick = ref(false);
const isStart = ref(false);
const leaves = ref([]);
let leafId = 0;
const leafTimeouts = new Set();

const createLeaf = async () => {
  const id = ++leafId;
  leaves.value.push({
    id,
    x: 50 + (Math.random() - 0.5) * 12,
    y: 20 + Math.random() * 50,
    drift: (Math.random() + 0.5) * 90,
    rotation: (Math.random() - 0.5) * 90,
  });
  console.log("leaves : ", leaves);
  const timeout = setTimeout(() => {
    leaves.value = leaves.value.filter((leaf) => leaf.id !== id);
    leafTimeouts.delete(timeout);
  }, 10000);
  leafTimeouts.add(timeout);
};

onUnmounted(() => leafTimeouts.forEach(clearTimeout));

onMounted(() => {
  try {
    const savedMessages = JSON.parse(localStorage.getItem('talkMessages'));
    if (Array.isArray(savedMessages)) {
      messages.value = savedMessages.filter(message => typeof message === 'string').slice(0, 6);
    }
  } catch (error) {
    console.error('Không thể đọc talkMessages từ localStorage:', error);
  }
});

const updateMessages = (newMessages) => {
  messages.value = newMessages;
  mCount.value = 0;
};

const playMessage = () => {
  isStart.value = true;
}

watch(showMessage, (isVisible) => {
  clearTimeout(messageTimeout);
  if (isVisible) {
    if (!messages.value.length) return;
    if (mCount.value >= messages.value.length) mCount.value = 0;
    message.value = messages.value[mCount.value];
    messageTimeout = setTimeout(() => {
      showMessage.value = false;
      mCount.value += 1;
      isClick.value = false;
    }, timeToLeave.value);
  }
});

const goMo = async () => {
  console.log("Go mo");
  if (!isClick.value) {
    await createLeaf();
    showMessage.value = true;
    // phat ra tieng dong
    audioRef.value.currentTime = 0;
    audioRef.value.play();
    // phat ra am thanh audioTalk
    playMessage();
    isClick.value = true;
  } else {
    message.value = "Xin thí chủ đừng vội vàng, hãy hít thở thật sâu";
  }
}

</script>

<style src="./index.css"></style>
