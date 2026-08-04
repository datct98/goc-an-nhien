<template>
  <!-- LOADING SCREEN -->
  <div v-if="!isReady" class="gm-loading">
    <div class="gm-loading-inner">
      <div class="gm-loading-lotus"><font-awesome-icon icon="fa-solid fa-gear" /></div>
      <p class="gm-loading-text">Đang tải bàn thờ...</p>
    </div>
  </div>

  <!-- MOBILE layout -->
  <!-- <GoMoMobile v-if="isReady && isMobileView" /> -->

  <!-- DESKTOP layout (original) -->
  <div v-else-if="isReady" class="container-goMo" id="container" ref="containerRef">
    <!-- <div class="bang">
      <p style="width: 280px; word-wrap: break-word; font-size: 14px; color: #73462d">
        - Click vào cái <b>gậy</b> và nhấn vào <b>chiếc mõ</b> hoặc nhấn
        <b>phím space</b> để tụng kinh <br />
        - Mỗi lần tụng kinh sẽ được cộng điểm, giải nghiệp và xua tan đi ưu phiền
      </p>
    </div> -->
    <!-- <Decor className="tuongPhat" src="tuong/duc_phat.png" :width="15.6" :isEdit="isEdit" />
    <Decor className="caynen left" src="decor/nen.png" :width="2.5" :isEdit="isEdit" />
    <Decor className="caynen right" src="decor/nen.png" :width="2.5" :isEdit="isEdit" />
    <Decor className="caiBan" src="decor/table.png" :width="31.25" :isEdit="isEdit" /> -->
    <!-- <Decor className="caiMo" src="decor/cai_mo.png" :width="5.2" :isEdit="isEdit" @click="goMo()" /> -->
    <!-- <Decor className="pillow" src="decor/goi.png" :width="10.4" :isEdit="isEdit" /> -->
    <!-- <Decor className="bathuong" src="decor/bat_huong_2.png" :width="4.16" :isEdit="isEdit" :isSmokeUp="isEdit" /> -->
    <!-- <Decor className="gayGoMo" ref="gayGoMoRef" src="decor/gay_go_mo.png" :width="3.64" :isEdit="isEdit"
      :isShowImage="isShowGayGoMo" @click="camGayGoMo()" />
    <Decor className="khayDungGay" ref="khayDungGayRef" src="decor/khay.png" :width="6.24" :isEdit="isEdit"
      @click="camGayGoMo()" /> -->

    <div class="m-auto flex flex-col items-center gap-4 relative">
      <!-- Container tượng phật & 3 quả cầu -->
      <div class="tuong-phat-wrapper relative" ref="tuongPhatWrapperRef">
        <!-- Quả cầu bên trái: Ngôi sao -->
        <div class="orb orb-left" ref="orbLeftRef">
          <font-awesome-icon icon="fa-solid fa-star" class="orb-icon" />
        </div>

        <!-- Quả cầu trên đầu: Bông hoa -->
        <div class="orb orb-top" ref="orbTopRef">
          <font-awesome-icon icon="fa-solid fa-flora" v-if="hasFloraIcon" class="orb-icon" />
          <font-awesome-icon icon="fa-solid fa-fan" v-else class="orb-icon" />
        </div>

        <!-- Quả cầu bên phải: Biểu tượng (Lót hoa Sen / Trái tim) -->
        <div class="orb orb-right" ref="orbRightRef">
          <font-awesome-icon icon="fa-solid fa-heart" class="orb-icon" />
        </div>

        <Decor className="tuongPhatChibi" src="tuong/tuongPhatChibi.png" :width="15" :isEdit="isEdit" />
      </div>

      <!-- Chiếc mõ -->
      <div ref="caiMoRef" class="cai-mo-container">
        <Decor className="caiMoDeThuong" src="decor/bogomo.png" :width="10" :isEdit="isEdit" @click="startGoMo" />
      </div>

      <!-- Particle Beams (Tia sáng hiệu ứng) -->
      <div class="light-beams-container">
        <div v-for="beam in lightBeams" :key="beam.id" class="light-beam" :style="beam.style"></div>
      </div>
    </div>


    <!-- <div class="banCongDuc">
      <Image src="ban_tho/ban_cong_duc.png" alt="ban_cong_duc" width="350" />
      <div class="congDucText">
        Công đức <br />
        {{ stats.merit }}
      </div>
      <div class="tamTinhText">
        Tâm tịnh <br />
        {{ stats.peace }}
      </div>
      <div class="nghiepTieuText">
        Nghiệp tiêu <br />
        {{ stats.karma }}
      </div>
      <div class="soLanText">
        Tổng số <br />
        {{ stats.totalClicks }}
      </div>
    </div> -->
    <audio ref="audioRef" src="/audio/goMo.m4a"></audio>

    <!-- <div class="floating-texts-container">
      <FloatingText v-for="text in floatingTexts" :key="text.id" :text="text.text" :x="text.x" :y="text.y"
        :is-meme="text.isMeme" />
    </div> -->

    <!-- Edit Toggle Button -->
    <!-- <button class="btn-toggle-edit" @click="isEdit = !isEdit">
      <font-awesome-icon :icon="isEdit ? 'fa-solid fa-check' : 'fa-solid fa-pen-to-square'" />
      {{ isEdit ? 'Xong' : 'Sửa' }}
    </button> -->
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import memeTexts from "~/constants/memeTexts.json";
import regularTexts from "~/constants/regularTexts.json";
import bg from "../../assets/goMo/bg_night.png";
import GoMoMobile from "~/components/GoMoMobile.vue";
import Decor from "~/components/goMo/Decor.vue";

const {
  stats,
  incrementMerit,
  incrementPeace,
  incrementKarma,
  bigGo,
  level,
  rateLimitMessage,
} = useGameStats();

// ========== IMAGE PRELOADER ==========
const isReady = ref(true);
const isEdit = ref(false);
const isShowGayGoMo = ref(true);

const preloadImages = () => {
  const imagePaths = [
    "/mobile/room_bg.png",
    "/tuong/duc_phat.png",
    "/decor/nen.png",
    "/decor/table.png",
    "/decor/cai_mo.png",
    "/decor/goi.png",
    "/decor/bat_huong_2.png",
    "/decor/gay_go_mo.png",
    "/decor/khay.png",
    "/ban_tho/ban_cong_duc.png",
    bg,
  ];

  let loaded = 0;
  const total = imagePaths.length;

  const onLoad = () => {
    loaded++;
    if (loaded >= total) {
      isReady.value = true;
    }
  };

  imagePaths.forEach((src) => {
    const img = new window.Image();
    img.onload = onLoad;
    img.onerror = onLoad; // Don't block on error
    img.src = src;
  });

  // Fallback: show after 5s no matter what
  setTimeout(() => {
    if (!isReady.value) {
      isReady.value = true;
    }
  }, 5000);
};

// ========== MOBILE DETECTION ==========
const windowWidth = ref(800);

const checkWidth = () => {
  windowWidth.value = window.innerWidth;
};

const isMobileView = computed(() => {
  return windowWidth.value <= 768;
});

onMounted(() => {
  // Start preloading images
  // preloadImages();

  // Set initial width immediately
  // windowWidth.value = window.innerWidth;
  // window.addEventListener("resize", checkWidth);
  // Also listen for keydown only on desktop
  // if (window.innerWidth > 768) {
  //   window.addEventListener("keydown", handleKeydown);
  // }
});

onUnmounted(() => {
  window.removeEventListener("resize", checkWidth);
  window.removeEventListener("keydown", handleKeydown);
});

// ========== DESKTOP LOGIC ==========
const sidebarOpen = ref(false);
const audioRef = ref(null);
const containerRef = ref(null);
const gayGoMoRef = ref(null);
const khayDungGayRef = ref(null);
const floatingTexts = ref([]);
let floatingTextId = 0;
let isTeng = 0;

// Orbs & Light Beams logic
const caiMoRef = ref(null);
const orbLeftRef = ref(null);
const orbTopRef = ref(null);
const orbRightRef = ref(null);
const lightBeams = ref([]);
let beamIdCounter = 0;

const startGoMo = () => {
  triggerLightBeam();
  // moRungDong();
  audioRef.value.currentTime = 0;
  audioRef.value.play();
};

const triggerLightBeam = () => {
  if (!caiMoRef.value) return;

  const orbRefs = [orbLeftRef.value, orbTopRef.value, orbRightRef.value];
  // Chọn ngẫu nhiên 1 trong 3 quả cầu
  const randomIndex = Math.floor(Math.random() * orbRefs.length);
  const targetOrb = orbRefs[randomIndex];

  if (!targetOrb) return;

  const moRect = caiMoRef.value.getBoundingClientRect();
  const orbRect = targetOrb.getBoundingClientRect();

  const startX = moRect.left + moRect.width / 2;
  const startY = moRect.top + moRect.height / 2;
  const endX = orbRect.left + orbRect.width / 2;
  const endY = orbRect.top + orbRect.height / 2;

  const deltaX = endX - startX;
  const deltaY = endY - startY;

  // Đổi ngẫu nhiên màu ánh sáng vàng / hồng tím / cam
  const colors = [
    "radial-gradient(circle, #fff7ad 0%, #ffd700 70%, rgba(255,215,0,0) 100%)",
    "radial-gradient(circle, #ffffff 0%, #ff80bf 70%, rgba(255,128,191,0) 100%)",
    "radial-gradient(circle, #ffffff 0%, #76efff 70%, rgba(118,239,255,0) 100%)"
  ];
  const color = colors[randomIndex];

  const currentBeamId = ++beamIdCounter;
  const beamStyle = {
    position: "fixed",
    left: `${startX}px`,
    top: `${startY}px`,
    "--dx": `${deltaX}px`,
    "--dy": `${deltaY}px`,
    background: color,
    boxShadow: `0 0 15px 5px ${randomIndex === 0 ? '#ffd700' : randomIndex === 1 ? '#ff80bf' : '#76efff'}`,
  };

  lightBeams.value.push({ id: currentBeamId, style: beamStyle });

  // Sau khi quả cầu nhận ánh sáng, kích hoạt hiệu ứng lóe sáng (pulse/hit)
  setTimeout(() => {
    targetOrb.classList.add("orb-hit");
    setTimeout(() => {
      targetOrb.classList.remove("orb-hit");
    }, 400);
  }, 500);

  // Xóa tia sáng sau khi hiệu ứng kết thúc (600ms)
  setTimeout(() => {
    const idx = lightBeams.value.findIndex((b) => b.id === currentBeamId);
    if (idx > -1) {
      lightBeams.value.splice(idx, 1);
    }
  }, 600);
};

// const moRungDong = () => {
//   createFloatingText();
//   isTeng++;

//   audioRef.value.currentTime = 0;
//   audioRef.value.play();

//   const object = document.getElementById("caiMo");
//   object.classList.add("shake");
//   setTimeout(() => {
//     object.classList.remove("shake");
//   }, 300);
// };

const createFloatingText = () => {
  const isMeme = Math.random() < 0.05;
  const textArray = isMeme ? memeTexts : regularTexts;
  const textId = Math.floor(Math.random() * textArray.length);
  const text = textArray[textId];

  const x = window.innerWidth / 2;
  const y = window.innerHeight / 2;

  if (!isMeme) {
    if (textId == 0) {
      incrementMerit();
    } else if (textId == 1) {
      incrementPeace();
    } else if (textId == 2) {
      incrementKarma();
    }
  } else {
    bigGo();
  }

  const newText = {
    id: floatingTextId++,
    text,
    x,
    y,
    isMeme,
  };

  floatingTexts.value.push(newText);

  setTimeout(() => {
    const index = floatingTexts.value.findIndex((t) => t.id === newText.id);
    if (index > -1) {
      floatingTexts.value.splice(index, 1);
    }
  }, 1400);
};

const camGayGoMo = () => {
  isCamGay = !isCamGay;
  if (isCamGay) {
    containerRef.value.classList.add("camGayGoMo");
    isShowGayGoMo.value = false;
  } else {
    containerRef.value.classList.remove("camGayGoMo");
    isShowGayGoMo.value = true;
  }
};
</script>

<style scoped src="./index.css"></style>

<style scoped>
/* Loading screen */
.gm-loading {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #1e0f06 0%, #3a2010 40%, #4a2e1b 100%);
}

.gm-loading-inner {
  text-align: center;
}

.gm-loading-lotus {
  font-size: 48px;
  animation: lotus-spin 2s ease-in-out infinite;
}

.gm-loading-text {
  margin-top: 16px;
  font-family: "Georgia", serif;
  font-size: 16px;
  color: #d4a24e;
  letter-spacing: 1px;
  animation: pulse-text 1.5s ease-in-out infinite;
}

@keyframes lotus-spin {

  0%,
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }

  50% {
    transform: scale(1.15) rotate(180deg);
    opacity: 0.7;
  }
}

@keyframes pulse-text {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}

.btn-toggle-edit {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background-color: rgba(115, 70, 45, 0.8);
  color: #fff;
  border: 2px solid #d4a24e;
  border-radius: 8px;
  cursor: pointer;
  font-family: inherit;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.btn-toggle-edit:hover {
  background-color: #73462d;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.btn-toggle-edit:active {
  transform: translateY(0);
}
</style>
