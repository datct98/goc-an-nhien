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
            <!-- Tử vi phần xử lý chính chính -->
            <div class="spiritual-card">
              <template v-if="!showLuanGiaiTuVi">
                <p class="small-title">Nhập thông tin</p>
                <div class="input-container">
                  <InputText
                    v-model="username"
                    type="text"
                    class="input"
                    placeholder="Nhập tên của bạn"
                  />
                </div>
                <div class="input-container">
                  <InputText
                    v-model="dateOfBirth"
                    type="date"
                    class="input"
                    placeholder="Nhập thông tin ngày sinh"
                  />
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
              </template>
              <!-- Kết quả luận giải tử vi -->
              <template v-else>
                <div class="result-header">
                  <div class="zodiac">
                    <div>
                      <Image :src="xuNu" alt="zodiac" />
                    </div>
                  </div>
                  <div>
                    <div class="small-title-result">
                      {{ mockData.zodiac }} · {{ mockData.sign }}
                    </div>
                    <div class="small-title-result-sub">
                      {{ mockData.lunarDate }}
                    </div>
                  </div>
                </div>
                <div class="result-divider"></div>
                <LuanGiaiTuVi :data="resultData" />
              </template>
            </div>
            <!-- Button thao tác -->
            <div>
              <button class="btn-tuvi" @click="luanGiaiTuVi()" :disabled="luanGiaiTuViDisable">
                Luận Giải Tử Vi
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
import LuanGiaiTuVi from "~/components/LuanGiaiTuVi.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
// import Swiper and modules styles
import "swiper/css";
// import image
import vongBatQuaiImg from "~/assets/vongBatQuai.png";
import { timeIndices, zodiacMapping, mockData } from "./data";
// import zodiac
import xuNu from "~/assets/zodiac/xuNu.png";

const { $common } = useNuxtApp();

const { isMobileView } = useDevice();
const firstCoinRef = ref(null);
const toggleSetting = () => {};
const dateOfBirth = ref();

const username = ref();
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

const isFormValid = computed(() => dateOfBirth.value && selectedTimeIndice.value && username.value !== null);
const loading = ref(false);
const error = ref(null);
const resultData = ref(null);
const showLuanGiaiTuVi = ref(false);
const luanGiaiTuViDisable = ref(false);

// Luân giải tư vi trọn đơì
const luanGiaiTuVi = async () => {
  console.log("validate : ", isFormValid.value);
  luanGiaiTuViDisable.value = true;
  if (!isFormValid.value) {
    $common.showWarning("Bạn chưa nhập đủ thông tin cần thiết")
    return;
  };
  loading.value = true;
  error.value = null;
  try {
    const baseBody = {
      name: username.value,
      birthDate: dateOfBirth.value,
      timeIndex: selectedTimeIndice.value.index,
      gender: gender.value,
      fixLeap: true,
    };
    console.log("baseBody : ", baseBody);
    const res = await $api.sendPostApi("horoscope", baseBody);
    resultData.value = res.data;
    luanGiaiTuViDisable.value = false;
    showLuanGiaiTuVi.value = true;
    // if (mode.value === "trondoi") {

    // } else {

    // }
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
