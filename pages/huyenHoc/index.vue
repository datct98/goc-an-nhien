<template>
  <div v-if="isMobileView" class="container-huyenhoc-mobile">
    <div class="bg-filter">
      <!-- Giao diện màn tung đồng xu -->
      <swiper class="mySwiper">
        <!-- Tử vi -->
        <swiper-slide>
          <div class="tuViPage">
            <p class="title">
              <span>Xem tử vi</span>
            </p>
            <div class="vongBatQuai" :class="{ rotating: showLoadingAnimation }">
              <Image style="width: 80%" :src="vongBatQuaiImg" alt="Vong bat quai" />
            </div>
            <!-- Tử vi phần xử lý chính chính -->
            <div class="spiritual-card" v-if="!showLoadingAnimation">
              <template v-if="!showLuanGiaiTuVi">
                <Tabs value="0">
                  <TabList class="center-tabs">
                    <Tab value="0">Trọn Đời</Tab>
                    <Tab value="1">Lưu Niên</Tab>
                    <Tab value="2">Lưu Nhật</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel value="0">
                      <p class="small-title pt-5">Nhập thông tin</p>
                      <div class="input-container">
                        <InputText v-model="username" type="text" class="input" placeholder="Nhập tên của bạn" />
                      </div>
                      <div class="input-container pt-5">
                        <div class="flex justify-between w-full">
                          <div class="w-1/3 text-center text-white">Ngày</div>
                          <div class="w-1/3 text-center text-white">Tháng</div>
                          <div class="w-1/3 text-center text-white">Năm</div>
                        </div>
                        <div class="flex flex-wrap justify-between w-full">
                          <InputText placeholder="01" class="w-1/3 input-small" v-model="day" type="number" />
                          <InputText placeholder="01" class="w-1/3 input-small" v-model="month" type="number" />
                          <InputText placeholder="2000" class="w-1/3 input-small" v-model="year" type="number" />
                        </div>
                      </div>
                      <p class="small-title pt-5 pb-5">Nhập giới tính</p>
                      <div class="gender-container">
                        <div class="male" :class="{ active: gender == 1 }" @click="updateGender(1)">
                          Nam
                        </div>
                        <div class="female" :class="{ active: gender == 0 }" @click="updateGender(0)">
                          Nữ
                        </div>
                      </div>
                      <p class="small-title pt-5">Giờ sinh</p>
                      <Select v-model="selectedTimeIndice" class="born-date-input"
                        overlayClass="born-date-overlay-input" checkmark :highlightOnSelect="false"
                        :options="timeIndices" optionLabel="name" placeholder="Chọn giờ sinh..."></Select>
                    </TabPanel>
                    <TabPanel value="1"> </TabPanel>
                    <TabPanel value="2"> </TabPanel>
                  </TabPanels>
                </Tabs>
              </template>
              <!-- Kết quả luận giải tử vi -->
              <template v-else>
                <div class="result-header">
                  <div class="zodiac">
                    <div>
                      <Image :src="resultData.zodiacImage" alt="zodiac" />
                    </div>
                  </div>
                  <div>
                    <div class="small-title-result">
                      {{ resultData.zodiac }} · {{ resultData.sign }}
                    </div>
                    <div class="small-title-result-sub">
                      {{ resultData.lunarDate }}
                    </div>
                  </div>
                </div>
                <div class="result-divider"></div>
                <div>
                  <p class="summary-title">Lá số tử vi</p>
                  <LuanGiaiTuVi :data="resultData" />
                  <div class="result-divider"></div>
                </div>
                <div class="summary-container">
                  <!-- Chân dung bản mệnh -->
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
                <div class="interpretation pt-5">
                  <!-- Luận giải chi tiết -->
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
                  <!-- Lời khuyên -->
                  <p class="summary-title pt-5">Lời khuyên</p>
                  <Accordion>
                    <AccordionPanel value="0">
                      <AccordionHeader style="color: #e6ca77">Xem lời khuyên</AccordionHeader>
                      <AccordionContent>
                        <p class="summary">
                          <span class="summary-content">{{
                            resultData.advice
                          }}</span>
                        </p>
                      </AccordionContent>
                    </AccordionPanel>
                  </Accordion>
                </div>
              </template>
            </div>
            <!-- Button thao tác -->
            <div class="pb-10">
              <button class="btn-tuvi" v-if="!showLuanGiaiTuVi" @click="luanGiaiTuVi()" :disabled="luanGiaiTuViDisable">
                Luận Giải Tử Vi
              </button>
              <button class="btn-return" v-else @click="showLuanGiaiTuVi = false">
                Quay trở lại
              </button>
            </div>
          </div>
        </swiper-slide>

        <!-- Gieo quẻ -->
        <swiper-slide>
          <div class="coinPage">
            <p class="title">Gieo quẻ</p>
            <Coin ref="firstCoinRef" />
            <button class="btnTossCoin" @click="tossCoin()">
              Tung đồng xu
            </button>
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
    <div class="left-task-bar"></div>
  </div>
</template>

<script setup>
import Coin from "~/components/Coin.vue";
import LuanGiaiTuVi from "~/components/LuanGiaiTuVi.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
// import Swiper and modules styles
import "swiper/css";
// import image
import vongBatQuaiImg from "~/assets/vongBatQuai.png";
import { timeIndices, zodiacMapping, mockData } from "./data";

const { $common } = useNuxtApp();
const { isMobileView } = useDevice();

// tung dong xu
const firstCoinRef = ref(null);

// xem tu vi
const username = ref();
const gender = ref(null);
const selectedTimeIndice = ref();
const { $api } = useNuxtApp();
const images = import.meta.glob("~/assets/zodiac/*.png", { eager: true });

// 2. Hàm lấy đường dẫn ảnh
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

const updateGender = (value) => {
  gender.value = value;
};

const tossCoin = () => {
  if (firstCoinRef.value) {
    firstCoinRef.value.tossCoin();
  }
};

const isFormValid = computed(
  () =>
    day.value &&
    month.value &&
    year.value &&
    selectedTimeIndice.value &&
    username.value !== null
);
const error = ref(null);
const resultData = ref(null);
const showLuanGiaiTuVi = ref(false);
const showLoadingAnimation = ref(false);
const luanGiaiTuViDisable = ref(false);
const loadingAnimationTimer = ref(null);
const day = ref();
const month = ref();
const year = ref();

// Luân giải tư vi trọn đơì
const luanGiaiTuVi = async () => {
  if (!isFormValid.value) {
    $common.showWarning("Bạn chưa nhập đủ thông tin cần thiết");
    return;
  }
  error.value = null;
  luanGiaiTuViDisable.value = true;
  showLoadingAnimation.value = false;
  if (loadingAnimationTimer.value) {
    clearTimeout(loadingAnimationTimer.value);
    loadingAnimationTimer.value = null;
  }

  showLoadingAnimation.value = true;

  try {
    const baseBody = {
      name: username.value,
      birthDate: `${year.value}-${month.value}-${day.value}`,
      timeIndex: selectedTimeIndice.value.index,
      gender: gender.value,
      fixLeap: true,
    };
    console.log("baseBody : ", baseBody);
    const res = await $api.sendPostApi("horoscope", baseBody);
    resultData.value = res.data;

    showLuanGiaiTuVi.value = true;
    let imageZodiacPath = zodiacMapping[resultData.value.sign].path;
    if (imageZodiacPath) {
      resultData.value.zodiacImage = getZodiacImage(
        `/assets/zodiac/${imageZodiacPath}.png`
      );
    }
  } catch (err) {
    console.error("Horoscope API error:", err);
    $common.showError(
      "Có lỗi xảy ra khi luận giải tử vi. Vui lòng thử lại sau." + err.message
    );
  } finally {
    luanGiaiTuViDisable.value = false;
    showLoadingAnimation.value = false;
    if (loadingAnimationTimer.value) {
      clearTimeout(loadingAnimationTimer.value);
      loadingAnimationTimer.value = null;
    }
  }
};
</script>
<style scoped src="./index.css"></style>
