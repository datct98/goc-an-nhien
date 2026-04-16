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
                <p class="small-title">Nhập thông tin ngày sinh</p>
                <div class="date-container">
                  <InputText
                    type="date"
                    class="date-input"
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
                <div class="luan-giai-tu-vi">
                  <!-- First Row -->
                  <div class="tu-vi-row">
                    <div v-for="n in [0,1,2,3]" :key="n" class="tu-vi-card">
                      <div class="tu-vi-header">
                        <span class="tiny-text">M.Ngọ</span>
                        <span>{{ mockData.palaces[n].name }}</span>
                        <span class="tiny-text">116</span>
                      </div>
                      <div class="tu-vi-body">
                        <div class="tu-vi-title">Thái Dương (M)</div>
                        <div class="tu-vi-content">
                          <div class="tu-vi-list">
                            <span
                              class="tiny-text"
                              v-for="(star, i) in mockData.palaces[n]
                                .majorStars"
                              :key="i"
                            >
                              {{ star }}
                            </span>
                          </div>
                          <div class="tu-vi-list">
                            <span
                              class="tiny-text"
                              v-for="(star, i) in mockData.palaces[n]
                                .minorStars"
                              :key="i"
                            >
                              {{ star }}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="tu-vi-footer">
                        <span>Ngọ</span>
                        <span>Bệnh</span>
                        <span>T5</span>
                      </div>
                    </div>
                  </div>
                  <!-- Second and Third row  -->
                  <div class="tu-vi-row">
                    <div class="tu-vi-col" style="flex: 1">
                      <div v-for="n in [4, 5]" :key="n" class="tu-vi-card">
                        <div class="tu-vi-header">
                          <span class="tiny-text">M.Ngọ</span>
                          <span>{{ mockData.palaces[n].name }}</span>
                          <span class="tiny-text">116</span>
                        </div>
                        <div class="tu-vi-body">
                          <div class="tu-vi-title">Thái Dương (M)</div>
                          <div class="tu-vi-content">
                            <div class="tu-vi-list">
                              <span
                                class="tiny-text"
                                v-for="(star, i) in mockData.palaces[n]
                                  .majorStars"
                                :key="i"
                              >
                                {{ star }}
                              </span>
                            </div>
                            <div class="tu-vi-list">
                              <span
                                class="tiny-text"
                                v-for="(star, i) in mockData.palaces[n]
                                  .minorStars"
                                :key="i"
                              >
                                {{ star }}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="tu-vi-footer">
                          <span>Ngọ</span>
                          <span>Bệnh</span>
                          <span>T5</span>
                        </div>
                      </div>
                    </div>
                    <!-- Luan giai chinh -->
                    <div class="tu-vi-main" style="flex: 2">
                      <div class="tu-vi-main-title">Lá số tử vi</div>
                      <div class="info-row">
                        <span class="label">Họ tên:</span>
                        <span class="value">{{ mockData.name }}</span>
                      </div>
                      <div class="info-row">
                        <span class="label">Năm sinh:</span>
                        <span class="value">{{
                          mockData.birthDate.split("-")[0]
                        }}</span>
                      </div>
                      <div class="info-row">
                        <span class="label">Tháng sinh:</span>
                        <span class="value">{{
                          mockData.birthDate.split("-")[1]
                        }}</span>
                      </div>
                      <div class="info-row">
                        <span class="label">Ngày sinh:</span>
                        <span class="value">{{
                          mockData.birthDate.split("-")[2]
                        }}</span>
                      </div>
                      <div class="info-row">
                        <span class="label">Giờ sinh:</span>
                        <span class="value">Bổ sung</span>
                      </div>
                      <div class="info-row">
                        <span class="label">Âm dương:</span>
                        <span class="value">Test</span>
                      </div>
                      <div class="info-row">
                        <span class="label">Bán mệnh:</span>
                        <span class="value">Test</span>
                      </div>
                      <div class="info-row">
                        <span class="label">Cục mệnh:</span>
                        <span class="value">Test</span>
                      </div>
                      <div class="info-row">
                        <span class="label">Chủ mệnh:</span>
                        <span class="value">Test</span>
                      </div>
                      <div class="info-row">
                        <span class="label">Chủ thân:</span>
                        <span class="value">Test</span>
                      </div>
                      <div class="info-row">
                        <span class="label">Cân lượng:</span>
                        <span class="value">Test</span>
                      </div>
                      <div class="info-row">
                        <span class="label">Lai nhân:</span>
                        <span class="value">Test</span>
                      </div>
                      <div class="info-row">
                        <span class="label">Năm xem:</span>
                        <span class="value">Test</span>
                      </div>
                      <div class="info-row">
                        <span class="label">Tháng xem:</span>
                        <span class="value">Test</span>
                      </div>
                    </div>
                    <div class="tu-vi-col" style="flex: 1">
                      <div v-for="n in [6, 7]" :key="n" class="tu-vi-card">
                        <div class="tu-vi-header">
                          <span class="tiny-text">M.Ngọ</span>
                          <span>{{ mockData.palaces[n].name }}</span>
                          <span class="tiny-text">116</span>
                        </div>
                        <div class="tu-vi-body">
                          <div class="tu-vi-title">Thái Dương (M)</div>
                          <div class="tu-vi-content">
                            <div class="tu-vi-list">
                              <span
                                class="tiny-text"
                                v-for="(star, i) in mockData.palaces[n]
                                  .majorStars"
                                :key="i"
                              >
                                {{ star }}
                              </span>
                            </div>
                            <div class="tu-vi-list">
                              <span
                                class="tiny-text"
                                v-for="(star, i) in mockData.palaces[n]
                                  .minorStars"
                                :key="i"
                              >
                                {{ star }}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="tu-vi-footer">
                          <span>Ngọ</span>
                          <span>Bệnh</span>
                          <span>T5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Last Row -->
                  <div class="tu-vi-row">
                    <div v-for="n in [8, 9, 10, 11]" :key="n" class="tu-vi-card">
                      <div class="tu-vi-header">
                          <span class="tiny-text">M.Ngọ</span>
                          <span>{{ mockData.palaces[n].name }}</span>
                          <span class="tiny-text">116</span>
                        </div>
                        <div class="tu-vi-body">
                          <div class="tu-vi-title">Thái Dương (M)</div>
                          <div class="tu-vi-content">
                            <div class="tu-vi-list">
                              <span
                                class="tiny-text"
                                v-for="(star, i) in mockData.palaces[n]
                                  .majorStars"
                                :key="i"
                              >
                                {{ star }}
                              </span>
                            </div>
                            <div class="tu-vi-list">
                              <span
                                class="tiny-text"
                                v-for="(star, i) in mockData.palaces[n]
                                  .minorStars"
                                :key="i"
                              >
                                {{ star }}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="tu-vi-footer">
                          <span>Ngọ</span>
                          <span>Bệnh</span>
                          <span>T5</span>
                        </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
            <!-- Button thao tác -->
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
import vongBatQuaiImg from "~/assets/vongBatQuai.png";
import { timeIndices, zodiacMapping, mockData } from "./data";
// import zodiac
import xuNu from "~/assets/zodiac/xuNu.png";

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
const loading = ref(false);
const error = ref(null);
const resultData = ref(null);
const showLuanGiaiTuVi = ref(true);
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
    console.log("baseBody : ", baseBody);
    let data;
    const res = await $api.sendPostApi("horoscope", baseBody);
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
