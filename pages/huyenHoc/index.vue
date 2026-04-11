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
            <div class="vongBatQuai">
              <Image
                style="width: 80%"
                :src="vongBatQuaiImg"
                alt="Vong bat quai"
              />
            </div>
            <div class="spiritual-card">
              <p class="small-title">Nhập thông tin ngày sinh</p>
              <div class="date-container">
                <InputText type="date" class="date-input" aria-placeholder="" />
              </div>
              <div class="gender-container">
                <div
                  class="male"
                  :class="{ active: gender == 1 }"
                  @click="updateGender(1)"
                >
                  Nam
                </div>
                <div
                  class="female"
                  :class="{ active: gender == 0 }"
                  @click="updateGender(0)"
                >
                  Nữ
                </div>
              </div>
              <p class="small-title pt-5">Giờ sinh</p>
              <Select
                v-model="selectedTimeIndice"
                class="born-date-input"
                overlayClass="born-date-overlay-input"
                checkmark
                :highlightOnSelect="false"
                :options="timeIndices"
                optionLabel="name"
                placeholder="Chọn giờ sinh..."
              ></Select>
            </div>
            <div>
              <button class="btn-tuvi">Luận Giải Tử Vi</button>
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
    <!-- <button class="toggleButtonSetting" @click="toggleSetting()">
            <i class="pi pi-cog"></i>
        </button> -->
  </div>
  <div v-else class="container-huyenHoc">
    <div class="left-task-bar"></div>
  </div>
</template>

<script setup>
import Coin from "~/components/Coin.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
// import Swiper and modules styles
import "swiper/css";
// import image
import vongBatQuaiImg from "../../public/huyenHoc/vongBatQuai.png";
import { timeIndices } from "./data";

const { isMobileView } = useDevice();
const firstCoinRef = ref(null);
const toggleSetting = () => {};
const dateOfBirth = ref();

const gender = ref(null);
const selectedTimeIndice = ref();
const { $api } = useNuxtApp();

const updateGender = (value) => {
  gender.value = value;
};

const tossCoin = () => {
  if (firstCoinRef.value) {
    firstCoinRef.value.tossCoin();
  }
};


const isFormValid = computed(() => dateOfBirth && selectedTimeIndice !== null);
const loading = ref(false)
const error = ref(null)
const resultData = ref(null)
// Luân giải tư vi trọn đơì
const calculate = async () => {
  if (!isFormValid.value) return;
  loading.value = true;
  error.value = null;
  try {
    const baseBody = {
      name: "user",
      birthDate: dateOfBirth,
      timeIndex: selectedTimeIndice,
      gender: gender,
      fixLeap: true,
    };
    console.log('baseBody : ', baseBody)
    let data;
    const res = await $api.sendPostApi('horoscope', baseBody)
    data = res.data;
    // if (mode.value === "trondoi") {
      
    // } else {
      
    // }
    resultData.value = data;
  } catch (err) {
    console.error("Horoscope API error:", err);
    error.value =
      err.response?.data?.error || "Có lỗi xảy ra, vui lòng thử lại";
  } finally {
    loading.value = false;
  }
};
</script>
<style scoped src="./index.css"></style>
