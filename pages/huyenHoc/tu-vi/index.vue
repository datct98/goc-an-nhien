<template>
  <!-- Mobile -->
  <div v-if="isMobileView" class="container-huyenhoc-mobile">
    <div class="bg-filter">
      <swiper class="mySwiper">
        <!-- Tử vi -->
        <swiper-slide>
          <div class="tuViPage">
            <button class="btn-back-huyenhoc" @click="goBack">
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
  <div v-else class="container-huyenHoc">
    <!-- Lớp hiệu ứng (nằm dưới) -->
    <StarOverlay />

    <DesktopTitle title="Tử vi" sub="Thấu hiểu bản thân qua dòng chảy của số mệnh" />

    <div class="wizard flex justify-center items-center">
      <div>
        <Image src="/huyenHoc/wizard.png" width="500" />
      </div>
      <div class="main-content">
        <TuViCard />
      </div>
    </div>

    <!--  -->
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
import StarOverlay from "~/components/effects/StarOverlay.vue";
import TuViCard from "~/components/huyen-hoc/TuViCard.vue";

const router = useRouter();
const { $common } = useNuxtApp();
const { isMobileView } = useDevice();

const firstCoinRef = ref(null);
const gender = ref(null);
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

const luanGiaiTuVi = async () => {

  // if (!isFormValid.value) { $common.showWarning("Bạn chưa nhập đủ thông tin cần thiết"); return; }
  error.value = null;
  luanGiaiTuViDisable.value = true;
  showLoadingAnimation.value = false;
  if (loadingAnimationTimer.value) { clearTimeout(loadingAnimationTimer.value); loadingAnimationTimer.value = null; }
  showLoadingAnimation.value = true;

  try {
    console.log("modeLuanGiai : ", modeLuanGiai.value);
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
    $common.showError("Có lỗi xảy ra khi luận giải tử vi. Vui lòng thử lại sau." + err.message);
  } finally {
    luanGiaiTuViDisable.value = false;
    showLoadingAnimation.value = false;
    if (loadingAnimationTimer.value) { clearTimeout(loadingAnimationTimer.value); loadingAnimationTimer.value = null; }
  }
};
</script>

<style scoped>
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

/*FOR DESKTOP =========================================================================>*/
.container-huyenHoc {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 24px 20px;
  position: relative;
  /* Gradient nền tối sâu thẳm */
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  color: white;
}

.main-content {
  background: none;
  width: 100%;
  height: fit-content;
  border-radius: 15px;
}
</style>
