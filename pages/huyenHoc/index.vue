<template>
    <div v-if="isMobileView" class="container-huyenhoc-mobile">
        <!-- <button class="toggleButtonSetting" @click="toggleSetting()">
            <i class="pi pi-cog"></i>
        </button> -->

        <!-- Giao diện màn tung đồng xu -->
        <swiper class="mySwiper">
            <swiper-slide>
                <div class="coinPage">
                    <p class="title">Gieo quẻ</p>
                    <Coin ref="firstCoinRef" />
                    <button class="btnTossCoin" @click="tossCoin()"> Tung đồng xu </button>
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
    <div v-else class="container-huyenHoc">
        <div class="left-task-bar">

        </div>

    </div>
</template>

<script setup>
import Coin from '~/components/Coin.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
// import Swiper and modules styles
import 'swiper/css';


const isMobileView = useDevice();

const firstCoinRef = ref(null);

const toggleSetting = () => {
}

const tossCoin = () => {
    if (firstCoinRef.value) {
        firstCoinRef.value.tossCoin();
    }
}

</script>
<style scoped src="./index.css"></style>