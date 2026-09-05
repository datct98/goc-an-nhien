<template>
  <!-- DESKTOP layout (original) -->
  <div class="container-goMo" id="container" ref="containerRef">

    <!-- Clickcount -->
    <div class="clickCount" v-if="clickCount > 0">
      <span> X{{ clickCount }}</span>
    </div>

    <div class="m-auto flex flex-col items-center gap-4 relative">
      <!-- Status -->
      <div class="status-container">
        <div class="status-text">
          Công đức <br /> {{ stats.merit }}
        </div>
        <div class="status-text">
          Tâm tịnh <br /> {{ stats.peace }}
        </div>
        <div class="status-text">
          Nghiệp tiêu <br /> {{ stats.karma }}
        </div>
      </div>
      <!-- Container tượng phật & 3 quả cầu -->
      <div class="tuong-phat-wrapper relative" ref="tuongPhatWrapperRef">
        <Decor className="tuongPhatChibi" src="/tuong/tuongPhat.png" :width="15" :isEdit="isEdit" />
      </div>

      <div class="gm-floats">
        <FloatingText v-for="text in floatingTexts" :key="text.id" :text="text.text" :x="text.x" :y="text.y"
          :is-meme="text.isMeme" />
      </div>

      <!-- Chiếc mõ -->
      <div ref="caiMoRef" class="cai-mo-container">
        <Decor className="caiMoDeThuong" src="/decor/bogomo.png" :width="10" :isEdit="isEdit" @click="startGoMo" />
      </div>

      <!-- Particle Beams (Tia sáng hiệu ứng) -->
      <div class="light-beams-container">
        <div v-for="beam in lightBeams" :key="beam.id" class="light-beam" :style="beam.style"></div>
      </div>
    </div>
    <audio ref="audioRef" src="/audio/goMo.m4a"></audio>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import memeTexts from "~/constants/memeTexts.json";
import regularTexts from "~/constants/regularTexts.json";
import bg from "../../assets/goMo/bg_night.png";
import Decor from "~/components/go-mo/Decor.vue";
import FloatingText from "~/components/effects/FloatingText.vue";

const {
  stats,
  incrementMerit,
  incrementPeace,
  incrementKarma,
  bigGo,
  level,
  rateLimitMessage,
  loadMeritPoints,
} = useGameStats();

// ========== IMAGE PRELOADER ==========
const isReady = ref(true);
const isEdit = ref(false);
const isShowGayGoMo = ref(true);

// ========== MOBILE DETECTION ==========
const { isMobileView } = useDevice();

// ========== DESKTOP LOGIC ==========
const sidebarOpen = ref(false);
const audioRef = ref(null);
const containerRef = ref(null);
const gayGoMoRef = ref(null);
const khayDungGayRef = ref(null);
const floatingTexts = ref([]);
let floatingTextId = 0;
let isTeng = 0;
let fid = 0;

// Orbs & Light Beams logic
const caiMoRef = ref(null);
const orbLeftRef = ref(null);
const orbTopRef = ref(null);
const orbRightRef = ref(null);
const lightBeams = ref([]);
let beamIdCounter = 0;

const clickCount = ref(0);
const lastClickTime = ref(0);
const isSpamming = ref(false);
let resetTimer = null; // Biến lưu trữ bộ đếm thời gian


onMounted(() => {
  loadMeritPoints();
});


const startGoMo = () => {
  let check = clickCountFunc();
  if (check) return;
  createFloatingText();
  // moRungDong();
  audioRef.value.currentTime = 0;
  audioRef.value.play();
};

const createFloatingText = () => {
  const isMeme = Math.random() < 0.05;
  const arr = isMeme ? memeTexts : regularTexts;
  const idx = Math.floor(Math.random() * arr.length);
  const text = arr[idx];
  const x = window.innerWidth / 2;
  const y = window.innerHeight * 0.3;

  if (!isMeme) {
    if (idx === 0) incrementMerit();
    else if (idx === 1) incrementPeace();
    else if (idx === 2) incrementKarma();
  } else bigGo();

  const t = { id: fid++, text, x, y, isMeme };
  floatingTexts.value.push(t);
  setTimeout(() => {
    const i = floatingTexts.value.findIndex(v => v.id === t.id);
    if (i > -1) floatingTexts.value.splice(i, 1);
  }, 1400);
};

const clickCountFunc = () => {
  // Nếu đang hiện cảnh báo thì không cho gõ
  if (isSpamming.value) return;
  const now = Date.now();
  clickCount.value++;
  // Ngưỡng cảnh báo: ví dụ gõ liên tục quá 10 lần cực nhanh
  if (clickCount.value > 10) {
    showWarning();
    return true; // Dừng không cho gõ tiếp
  }
  return false;
}

const showWarning = () => {
  isSpamming.value = true;
  if (resetTimer) clearTimeout(resetTimer); // Dừng luôn bộ reset khi đang phạt
  // Tự động đóng cảnh báo sau 3 giây và reset bộ đếm
  setTimeout(() => {
    isSpamming.value = false;
    clickCount.value = 0;
  }, 3000);
};

</script>

<style scoped src="./index.css"></style>
