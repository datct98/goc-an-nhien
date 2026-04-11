<template>
  <div v-if="isMobileView" class="container-huyenhoc-mobile">
    <div class="bg-filter">
      <!-- Giao diện màn tung đồng xu -->
      <swiper class="mySwiper">
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
                <InputText type="date" class="date-input" />
              </div>
              <div class="gender-container">
                <div class="male">Nam</div>
                <div class="female">Nữ</div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="coinPage">
            <p class="title">Gieo quẻ</p>
            <Coin ref="firstCoinRef" />
            <button class="btnTossCoin" @click="tossCoin()">
              Tung đồng xu
            </button>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="tarotPage">
            <p class="title">Xem tarot</p>
          </div>
        </swiper-slide>
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

const { isMobileView } = useDevice();
const firstCoinRef = ref(null);
const toggleSetting = () => {};
const day = ref(null);
const month = ref(null);
const year = ref(null);

const tossCoin = () => {
  if (firstCoinRef.value) {
    firstCoinRef.value.tossCoin();
  }
};
</script>
<style scoped src="./index.css"></style>
