<template>
  <!-- MOBILE -->
  <div v-if="isMobileView" class="container-huyenhoc-mobile">
    <div class="bg-filter">
      <swiper class="mySwiper">
        <!-- Tử vi -->
        <swiper-slide>
          <div class="tuViPage">
            <button class="btn-back-huyenhoc" aria-label="Quay lại huyền học" @click="goBack">
              <i class="pi pi-arrow-left"></i>
            </button>
            <p class="title">
              <span>Xem tử vi</span>
            </p>
            <div class="vongBatQuai" :class="{ rotating: showLoadingAnimation }">
              <Image style="width: 80%" :src="vongBatQuaiImg" alt="Vong bat quai" />
            </div>
            <div class="spiritual-card" v-if="!showLoadingAnimation">
              <template v-if="!showLuanGiaiTuVi">
                <Tabs value="0">
                  <TabList class="center-tabs">
                    <Tab value="0" @click="setModeLuanGiai(0)">Trọn Đời</Tab>
                    <Tab value="1" @click="setModeLuanGiai(1)">Lưu Niên</Tab>
                    <Tab value="2" @click="setModeLuanGiai(2)">Lưu Nhật</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel value="0">
                      <TuViForm :data="tuViData" />
                    </TabPanel>
                    <TabPanel value="1">
                      <TuViForm :data="tuViDataYearly" />
                    </TabPanel>
                    <TabPanel value="2">
                      <TuViForm :data="tuViDataMonthLy" />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </template>
              <template v-else>
                <div class="result-header">
                  <div class="zodiac">
                    <div>
                      <Image :src="resultData.zodiacImage" alt="zodiac" />
                    </div>
                  </div>
                  <div>
                    <div class="small-title-result">{{ resultData.zodiac }} · {{ resultData.sign }}</div>
                    <div class="small-title-result-sub">{{ resultData.lunarDate }}</div>
                  </div>
                </div>
                <div class="result-divider"></div>
                <div>
                  <p class="summary-title">Lá số tử vi</p>
                  <LuanGiaiTuVi :data="resultData" />
                  <div class="result-divider"></div>
                </div>
                <div class="summary-container">
                  <p class="summary-title">Chân dung bản mệnh</p>
                  <Accordion>
                    <AccordionPanel value="0">
                      <AccordionHeader style="color: #e6ca77">Xem phân tích lá số tử vi</AccordionHeader>
                      <AccordionContent>
                        <p class="summary">
                          <span class="summary-content" v-for="(item, index) in resultData.summary" :key="index">
                            <span><b> 👉 {{ item.name }} : </b></span>
                            <span>{{ item.description }}</span>
                          </span>
                        </p>
                      </AccordionContent>
                    </AccordionPanel>
                  </Accordion>
                </div>
                <div class="interpretation">
                  <p class="summary-title pt-5">Chi tiết</p>
                  <Accordion>
                    <AccordionPanel value="0">
                      <AccordionHeader style="color: #e6ca77">Luận giải chi tiết</AccordionHeader>
                      <AccordionContent>
                        <p class="summary">
                          <span class="summary-content" v-html="formatContent(resultData.interpretation)"></span>
                        </p>
                      </AccordionContent>
                    </AccordionPanel>
                  </Accordion>
                  <p class="summary-title pt-5">Lời khuyên</p>
                  <Accordion>
                    <AccordionPanel value="0">
                      <AccordionHeader style="color: #e6ca77">Xem lời khuyên</AccordionHeader>
                      <AccordionContent>
                        <p class="summary">
                          <span class="summary-content">{{ resultData.advice }}</span>
                        </p>
                      </AccordionContent>
                    </AccordionPanel>
                  </Accordion>
                </div>
              </template>
            </div>
            <div class="pb-10">
              <button class="btn-tuvi" v-if="!showLuanGiaiTuVi" @click="luanGiaiTuVi()" :disabled="luanGiaiTuViDisable">
                Luận Giải Tử Vi
              </button>
              <button class="btn-return" v-else @click="showLuanGiaiTuVi = false">Quay trở lại</button>
            </div>
          </div>
        </swiper-slide>

        <!-- Gieo quẻ -->
        <swiper-slide>
          <div class="coinPage">
            <p class="title">Gieo quẻ</p>
            <Coin ref="firstCoinRef" />
            <button class="btnTossCoin" @click="tossCoin()">Tung đồng xu</button>
          </div>
        </swiper-slide>

        <!-- Xem tarot -->
        <swiper-slide>
          <div class="tarotPage">
            <p class="title">Xem tarot</p>
          </div>
        </swiper-slide>

        <!-- Xem cung hoàng đạo -->
        <swiper-slide>
          <div class="cunghoangdaoPage">
            <p class="title">Xem Cung Hoàng Đạo</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>

  <!-- DESKTOP -->
  <div v-else class="container-tuvi-desktop">
    <!-- Background Layer (z-0) -->
    <div class="tuvi-desktop-bg" aria-hidden="true"></div>

    <!-- Particle Layer (z-1) — Task 1.2 -->
    <div class="tuvi-desktop-particles" aria-hidden="true">
      <div class="tuvi-particle tuvi-particle--1"></div>
      <div class="tuvi-particle tuvi-particle--2"></div>
      <div class="tuvi-particle tuvi-particle--3"></div>
      <div class="tuvi-particle tuvi-particle--4"></div>
      <div class="tuvi-particle tuvi-particle--5"></div>
      <div class="tuvi-particle tuvi-particle--6"></div>
      <div class="tuvi-particle tuvi-particle--7"></div>
    </div>

    <!-- Content Shell (z-2) -->
    <div class="tuvi-desktop-shell">
        <button class="btn-back-tuvi-desktop" aria-label="Quay lại huyền học" @click="goBack">
          <i class="pi pi-arrow-left"></i>
          <span>Huyền Học</span>
        </button>

        <header class="tuvi-desktop-header">
          <p class="tuvi-desktop-title"><span>🌟 Xem Tử Vi</span></p>
          <p class="tuvi-desktop-subtitle">Luận giải lá số tử vi đẩu số trọn đời, lưu niên và lưu nhật</p>
        </header>

        <!-- Aria-live region for state announcements — Task 3.3 -->
        <div class="tuvi-sr-only" aria-live="polite">{{ stateAnnouncement }}</div>

        <!-- State transitions — Task 3.1 -->
        <Transition name="tuvi-state" mode="out-in" @after-enter="onStateAfterEnter">
          <!-- Loading animation — Task 6.1 -->
          <div v-if="showLoadingAnimation" key="loading" ref="loadingRef" class="tuvi-desktop-loading" role="status" aria-live="polite">
            <div class="tuvi-loading-visual">
              <div class="tuvi-loading-glow" aria-hidden="true"></div>
              <div class="tuvi-loading-spinner">
                <Image :src="vongBatQuaiImg" alt="Vòng bát quái đang xoay" @error="onBatQuaiError" />
              </div>
            </div>
            <p ref="loadingTextRef" class="tuvi-desktop-loading-text" tabindex="-1">Đang luận giải lá số tử vi...</p>
          </div>

          <!-- Form (input mode) -->
          <div v-else-if="!showLuanGiaiTuVi" key="form" class="tuvi-desktop-grid">
            <!-- Decorative left panel -->
            <aside class="tuvi-desktop-decor tuvi-glass-card" aria-hidden="true">
              <div class="vongBatQuai">
                <Image :src="vongBatQuaiImg" alt="" />
              </div>
              <p class="tuvi-desktop-decor-quote">
                「Thiên cơ vạn tượng, mệnh số luân hồi」
              </p>
              <p class="tuvi-desktop-decor-hint">
                Nhập đầy đủ thông tin để nhận luận giải chi tiết về vận mệnh,
                tài lộc, sự nghiệp và tình duyên theo Tử Vi Đẩu Số.
              </p>
            </aside>

            <!-- Form right panel -->
            <section ref="formPanelRef" class="tuvi-desktop-form tuvi-glass-card" tabindex="-1">
              <Tabs value="0">
                <TabList class="center-tabs">
                  <Tab value="0" @click="setModeLuanGiai(0)">Trọn Đời</Tab>
                  <Tab value="1" @click="setModeLuanGiai(1)">Lưu Niên</Tab>
                  <Tab value="2" @click="setModeLuanGiai(2)">Lưu Nhật</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel value="0">
                    <TuViForm :data="tuViData" />
                  </TabPanel>
                  <TabPanel value="1">
                    <TuViForm :data="tuViDataYearly" />
                  </TabPanel>
                  <TabPanel value="2">
                    <TuViForm :data="tuViDataMonthLy" />
                  </TabPanel>
                </TabPanels>
              </Tabs>

              <div class="tuvi-desktop-submit">
                <button class="btn-tuvi" :disabled="luanGiaiTuViDisable" @click="luanGiaiTuVi()">
                  Luận Giải Tử Vi
                </button>
              </div>
            </section>
          </div>

          <!-- Result -->
          <div v-else key="result" class="tuvi-desktop-result tuvi-glass-card">
            <!-- Task 7.1: Result header with zodiac badge -->
            <header ref="resultHeaderRef" class="tuvi-result-header" tabindex="-1">
              <div class="tuvi-zodiac-badge">
                <Image :src="resultData.zodiacImage" alt="Biểu tượng cung hoàng đạo" />
              </div>
              <div class="tuvi-result-header-info">
                <div class="tuvi-result-name">{{ resultData.zodiac }} · {{ resultData.sign }}</div>
                <div class="tuvi-result-lunar-date">{{ resultData.lunarDate }}</div>
              </div>
            </header>
            <div class="tuvi-gradient-divider"></div>

            <!-- Task 7.2: Lá số tử vi section with LuanGiaiTuVi -->
            <section class="tuvi-desktop-section">
              <p class="summary-title">Lá số tử vi</p>
              <LuanGiaiTuVi :data="resultData" />
            </section>
            <div class="tuvi-gradient-divider"></div>

            <!-- Task 7.3: Accordion sections with v-if checks -->
            <section v-if="resultData.summary && resultData.summary.length > 0" class="tuvi-desktop-section">
              <p class="summary-title">Chân dung bản mệnh</p>
              <Accordion>
                <AccordionPanel value="0">
                  <AccordionHeader style="color: #e6ca77">Xem phân tích lá số tử vi</AccordionHeader>
                  <AccordionContent>
                    <p class="summary">
                      <span class="summary-content" v-for="(item, index) in resultData.summary" :key="index">
                        <span><b> 👉 {{ item.name }} : </b></span>
                        <span>{{ item.description }}</span>
                      </span>
                    </p>
                  </AccordionContent>
                </AccordionPanel>
              </Accordion>
            </section>
            <div v-if="resultData.summary && resultData.summary.length > 0" class="tuvi-gradient-divider"></div>

            <section v-if="resultData.interpretation" class="tuvi-desktop-section">
              <p class="summary-title">Chi tiết</p>
              <Accordion>
                <AccordionPanel value="0">
                  <AccordionHeader style="color: #e6ca77">Luận giải chi tiết</AccordionHeader>
                  <AccordionContent>
                    <p class="summary">
                      <span class="summary-content" v-html="formatContent(resultData.interpretation)"></span>
                    </p>
                  </AccordionContent>
                </AccordionPanel>
              </Accordion>
            </section>
            <div v-if="resultData.interpretation" class="tuvi-gradient-divider"></div>

            <section v-if="resultData.advice" class="tuvi-desktop-section">
              <p class="summary-title">Lời khuyên</p>
              <Accordion>
                <AccordionPanel value="0">
                  <AccordionHeader style="color: #e6ca77">Xem lời khuyên</AccordionHeader>
                  <AccordionContent>
                    <p class="summary">
                      <span class="summary-content">{{ resultData.advice }}</span>
                    </p>
                  </AccordionContent>
                </AccordionPanel>
              </Accordion>
            </section>

            <div class="tuvi-desktop-submit">
              <button class="btn-return" @click="showLuanGiaiTuVi = false">Quay trở lại</button>
            </div>
          </div>
        </Transition>
      </div>
    </div>
</template>

<script setup>
import Coin from "~/components/Coin.vue";
import LuanGiaiTuVi from "~/components/LuanGiaiTuVi.vue";
import TuViForm from "~/components/huyen-hoc/TuViForm.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import vongBatQuaiImg from "~/assets/vongBatQuai.png";
import { zodiacMapping } from "../data";

const router = useRouter();
const { $common } = useNuxtApp();
const { isMobileView } = useDevice();

const firstCoinRef = ref(null);
const { $api } = useNuxtApp();
const images = import.meta.glob("~/assets/zodiac/*.png", { eager: true });
const goBack = () => router.push('/huyenHoc');

const modeLuanGiai = ref(0);
const setModeLuanGiai = (value) => {
  modeLuanGiai.value = value;
}

const tuViData = ref({
  username: "",
  day: 10,
  month: 10,
  year: 2000,
  gender: 1,
  mode: 'tronDoi',
  selectedTimeIndice: null,
  fixLeap: true
})

const tuViDataYearly = ref({
  username: "",
  day: 10,
  month: 10,
  year: 2000,
  gender: 1,
  selectedTimeIndice: null,
  mode: 'yearly',
  selectYear: 2000,
  fixLeap: true
})

const tuViDataMonthLy = ref({
  username: "",
  day: 10,
  month: 10,
  year: 2000,
  gender: 1,
  selectedTimeIndice: null,
  mode: 'monthly',
  selectYear: 2000,
  selectMonth: 2,
  fixLeap: true
})

const getZodiacImage = (path) => {
  const mod = images[path];
  return mod ? mod.default : "";
};

const formatContent = (rawString) => {
  return rawString
    .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
    .replace(/^###\s+(.*)$/gm, '<h3>$1</h3>')
    .replace(/^---$/gm, '<hr>')
    .replace(/\n/g, '<br>');
}
const tossCoin = () => { if (firstCoinRef.value) firstCoinRef.value.tossCoin(); };

const error = ref(null);
const resultData = ref(null);
const showLuanGiaiTuVi = ref(false);
const showLoadingAnimation = ref(false);
const luanGiaiTuViDisable = ref(false);
const loadingAnimationTimer = ref(null);

// Task 6.1: Handle vongBatQuai.png load failure gracefully
const batQuaiLoadFailed = ref(false);
const onBatQuaiError = () => {
  batQuaiLoadFailed.value = true;
};

// Task 9.1: Template refs for focus management
const formPanelRef = ref(null);
const loadingTextRef = ref(null);
const resultHeaderRef = ref(null);
const loadingRef = ref(null);

// Task 9.1: Focus management on state transitions via @after-enter
const onStateAfterEnter = () => {
  nextTick(() => {
    if (showLoadingAnimation.value && loadingTextRef.value) {
      loadingTextRef.value.focus();
    } else if (!showLuanGiaiTuVi.value && formPanelRef.value) {
      formPanelRef.value.focus();
    } else if (showLuanGiaiTuVi.value && resultHeaderRef.value) {
      resultHeaderRef.value.focus();
    }
  });
};

// Task 3.3: Reactive aria-live announcement for state transitions
const stateAnnouncement = computed(() => {
  if (showLoadingAnimation.value) return 'Đang tải...';
  if (showLuanGiaiTuVi.value) return 'Kết quả đã sẵn sàng';
  return 'Đã quay lại biểu mẫu';
});

const luanGiaiTuVi = async () => {
  error.value = null;
  luanGiaiTuViDisable.value = true;
  showLoadingAnimation.value = false;
  if (loadingAnimationTimer.value) { clearTimeout(loadingAnimationTimer.value); loadingAnimationTimer.value = null; }
  showLoadingAnimation.value = true;

  try {
    if (modeLuanGiai.value == 0) {
      const baseBody = {
        name: tuViData.value.username,
        birthDate: `${tuViData.value.year}-${tuViData.value.month}-${tuViData.value.day}`,
        timeIndex: tuViData.value.selectedTimeIndice.index,
        gender: tuViData.value.gender,
        fixLeap: true,
      };
      const res = await $api.sendPostApi("horoscope", baseBody, "default");
      resultData.value = res.data;
      showLuanGiaiTuVi.value = true;
      let imageZodiacPath = zodiacMapping[resultData.value.sign].path;
      if (imageZodiacPath) {
        resultData.value.zodiacImage = getZodiacImage(`/assets/zodiac/${imageZodiacPath}.png`);
      }
    } else if (modeLuanGiai.value === 1) {
      const baseBody = {
        name: tuViDataYearly.value.username,
        birthDate: `${tuViDataYearly.value.year}-${tuViDataYearly.value.month}-${tuViDataYearly.value.day}`,
        timeIndex: tuViDataYearly.value.selectedTimeIndice.index,
        gender: tuViDataYearly.value.gender,
        year: tuViDataYearly.value.selectYear,
        type: "yearly",
        fixLeap: true,
      };
      const res = await $api.sendPostApi("horoscope/forecast", baseBody, "default");
      resultData.value = res.data;
      showLuanGiaiTuVi.value = true;
      let imageZodiacPath = zodiacMapping[resultData.value.sign].path;
      if (imageZodiacPath) {
        resultData.value.zodiacImage = getZodiacImage(`/assets/zodiac/${imageZodiacPath}.png`);
      }
    } else if (modeLuanGiai.value === 2) {
      const baseBody = {
        name: tuViDataMonthLy.value.username,
        birthDate: `${tuViDataMonthLy.value.year}-${tuViDataMonthLy.value.month}-${tuViDataMonthLy.value.day}`,
        timeIndex: tuViDataMonthLy.value.selectedTimeIndice.index,
        gender: tuViDataMonthLy.value.gender,
        month: tuViDataMonthLy.value.selectMonth,
        year: tuViDataMonthLy.value.selectYear,
        type: tuViDataMonthLy.value.mode,
        fixLeap: true,
      };
      const res = await $api.sendPostApi("horoscope/forecast", baseBody, "default");
      resultData.value = res.data;
      showLuanGiaiTuVi.value = true;
      let imageZodiacPath = zodiacMapping[resultData.value.sign].path;
      if (imageZodiacPath) {
        resultData.value.zodiacImage = getZodiacImage(`/assets/zodiac/${imageZodiacPath}.png`);
      }
    }

  } catch (err) {
    console.error("Horoscope API error:", err);
    // Task 10.1: Show PrimeVue Toast error and transition back to Form_State
    $common.showError("Có lỗi xảy ra khi luận giải tử vi. Vui lòng thử lại sau.");
    // Ensure we return to Form_State (form data is preserved since we never clear it)
    showLuanGiaiTuVi.value = false;
  } finally {
    luanGiaiTuViDisable.value = false;
    showLoadingAnimation.value = false;
    if (loadingAnimationTimer.value) { clearTimeout(loadingAnimationTimer.value); loadingAnimationTimer.value = null; }
  }
};
</script>
<style scoped src="../index.css"></style>
<style scoped>
/* ========= MOBILE ========= */
.btn-back-huyenhoc {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 10;
  background: rgba(212, 175, 55, 0.15);
  border: 1px solid rgba(212, 175, 55, 0.3);
  color: #d4af37;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ========= DESKTOP ========= */

/* --- Task 1.1: Cosmic Background Layer --- */
.container-tuvi-desktop {
  position: relative;
  width: 100%;
  min-height: 100dvh;
  background-color: rgba(15, 23, 42, 1); /* Fallback for image load failure */
}

.tuvi-desktop-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  background-image: url("/huyenHoc/cucQuang.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}

/* Dark radial vignette overlay */
.tuvi-desktop-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
  pointer-events: none;
}

/* --- Task 2.1: Content Shell --- */
.tuvi-desktop-shell {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 72rem;
  margin: 0 auto;
  padding: 6rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100dvh;
}

/* --- Task 2.2: Reusable Glass Card --- */
.tuvi-glass-card {
  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 20px;
  border: 1px solid rgba(212, 175, 55, 0.2);
}

/* --- Task 2.3: Typography --- */
.container-tuvi-desktop h1,
.container-tuvi-desktop h2,
.container-tuvi-desktop h3,
.container-tuvi-desktop h4,
.container-tuvi-desktop h5,
.container-tuvi-desktop h6,
.container-tuvi-desktop .tuvi-desktop-title {
  font-family: 'Lora', serif;
}

.container-tuvi-desktop {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.btn-back-tuvi-desktop {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(212, 175, 55, 0.12);
  border: 1px solid rgba(212, 175, 55, 0.3);
  color: #d4af37;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: opacity 0.2s ease, transform 0.2s ease;
  margin-bottom: 1.5rem;
}

.btn-back-tuvi-desktop:hover,
.btn-back-tuvi-desktop:focus-visible {
  outline: none;
  border-color: rgba(212, 175, 55, 0.6);
  transform: translateX(-2px);
}

.tuvi-desktop-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.tuvi-desktop-title {
  color: #e6ca77;
  font-size: 2.75rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  text-balance: balance;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
}

.tuvi-desktop-subtitle {
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  margin: 0;
  font-style: italic;
  text-pretty: pretty;
}

/* Loading state — Task 6.1 */
.tuvi-desktop-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 4rem 2rem;
  min-height: 50vh;
}

.tuvi-loading-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 240px;
}

/* Pulsing glow behind the bát quái */
.tuvi-loading-glow {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(230, 202, 119, 0.3) 0%, transparent 70%);
  animation: tuvi-glow-pulse 2s ease-in-out infinite;
}

/* Spinning bát quái image */
.tuvi-loading-spinner {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: tuvi-spin 8s linear infinite;
}

.tuvi-loading-spinner :deep(img) {
  width: 80%;
  height: auto;
}

@keyframes tuvi-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes tuvi-glow-pulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

.tuvi-desktop-loading-text {
  color: #e6ca77;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* Input grid: decor + form (5:7 asymmetric ratio per spec) */
.tuvi-desktop-grid {
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 2rem;
  align-items: start;
}

@media (max-width: 1023px) {
  .tuvi-desktop-grid {
    grid-template-columns: 1fr;
  }

  .tuvi-desktop-decor {
    display: none;
  }
}

.tuvi-desktop-decor {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  position: sticky;
  top: 2rem;
}

.tuvi-desktop-decor .vongBatQuai {
  width: 60%;
  margin-bottom: 0.5rem;
}

.tuvi-desktop-decor-quote {
  color: #e6ca77;
  font-size: 1rem;
  font-weight: 600;
  font-style: italic;
  text-balance: balance;
  margin: 0;
}

.tuvi-desktop-decor-hint {
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.85rem;
  line-height: 1.6;
  text-pretty: pretty;
  margin: 0;
}

.tuvi-desktop-form {
  padding: 1.5rem 2rem 2rem;
}

.tuvi-desktop-submit {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

/* Result layout */
.tuvi-desktop-result {
  padding: 2rem;
}

/* Task 7.1: Result header with zodiac badge */
.tuvi-result-header {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 0.5rem 0 1.5rem;
}

.tuvi-zodiac-badge {
  width: 80px;
  height: 80px;
  min-width: 80px;
  border-radius: 50%;
  border: 3px solid rgba(212, 175, 55, 0.7);
  box-shadow: 0 0 12px rgba(212, 175, 55, 0.3);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.6);
}

.tuvi-zodiac-badge :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.tuvi-result-header-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.tuvi-result-name {
  color: #e6ca77;
  font-family: 'Lora', serif;
  font-size: 1.5rem;
  font-weight: 700;
}

.tuvi-result-lunar-date {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

/* Task 7.2 & 7.3: Gradient line dividers between sections */
.tuvi-gradient-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(212, 175, 55, 0.5), transparent);
  margin: 1rem 0;
}

.tuvi-desktop-section {
  margin-bottom: 1.5rem;
}

.tuvi-desktop-section :deep(.luan-giai-tu-vi) {
  font-size: 1rem;
}

/* --- Task 1.2: Particle Layer --- */
.tuvi-desktop-particles {
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}

.tuvi-particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(230, 202, 119, 0.6);
  animation: tuvi-particle-float 6s ease-in-out infinite;
}

.tuvi-particle--1 {
  width: 3px;
  height: 3px;
  top: 12%;
  left: 8%;
  animation-delay: 0s;
  animation-duration: 7s;
}

.tuvi-particle--2 {
  width: 2px;
  height: 2px;
  top: 25%;
  left: 85%;
  animation-delay: 1.2s;
  animation-duration: 5.5s;
}

.tuvi-particle--3 {
  width: 4px;
  height: 4px;
  top: 45%;
  left: 15%;
  animation-delay: 2.4s;
  animation-duration: 8s;
}

.tuvi-particle--4 {
  width: 2px;
  height: 2px;
  top: 60%;
  left: 72%;
  animation-delay: 0.8s;
  animation-duration: 6s;
}

.tuvi-particle--5 {
  width: 3px;
  height: 3px;
  top: 78%;
  left: 40%;
  animation-delay: 3.2s;
  animation-duration: 7.5s;
}

.tuvi-particle--6 {
  width: 2px;
  height: 2px;
  top: 35%;
  left: 55%;
  animation-delay: 1.8s;
  animation-duration: 6.5s;
}

.tuvi-particle--7 {
  width: 3px;
  height: 3px;
  top: 88%;
  left: 22%;
  animation-delay: 4s;
  animation-duration: 5s;
}

@keyframes tuvi-particle-float {
  0%, 100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  50% {
    transform: translateY(-20px);
    opacity: 1;
  }
}

/* --- Task 1.2 & 6.1: Reduced motion — pause all looping animations --- */
@media (prefers-reduced-motion: reduce) {
  .tuvi-particle {
    animation-play-state: paused;
  }

  .tuvi-loading-spinner {
    animation-play-state: paused;
  }

  .tuvi-loading-glow {
    animation-play-state: paused;
  }
}

/* --- Task 3.2: State Transition CSS Classes --- */
.tuvi-state-enter-active {
  transition: opacity 300ms ease-out, transform 300ms ease-out;
}

.tuvi-state-leave-active {
  transition: opacity 200ms ease-in, transform 200ms ease-in;
}

.tuvi-state-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.tuvi-state-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* --- Task 3.3: Visually-hidden utility for aria-live region --- */
.tuvi-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* --- Task 9.1: Focus targets should not show visible outline for programmatic focus --- */
.tuvi-desktop-form[tabindex="-1"]:focus,
.tuvi-desktop-loading-text[tabindex="-1"]:focus,
.tuvi-result-header[tabindex="-1"]:focus {
  outline: none;
}
</style>
