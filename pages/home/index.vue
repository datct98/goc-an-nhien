<template>
  <!-- MOBILE: Giữ nguyên background cũ -->
  <div v-if="isMobileView" class="home-page-mobile" :style="{ backgroundImage: `url(${mobileBackground})` }">
    <SakuraEffect />
  </div>

  <!-- DESKTOP: SVG Polygon Hotspot Map -->
  <div v-else class="map-home">
    <div class="sky-layer"></div>

    <!-- Cloud layers for parallax effect -->
    <div class="clouds-container">
      <div class="cloud cloud-slow"></div>
      <div class="cloud cloud-medium"></div>
      <div class="cloud cloud-fast"></div>
    </div>

    <div class="chuaGoMo" @click="router.push('/goMo')">
      <ImgAnimation :images="gomoAnim" :width="24" :interval="300" :delay="500" />
    </div>

    <div class="huyenHoc" @click="router.push('/huyenHoc')">
      <ImgAnimation :images="huyenHocAnim" :width="10" :interval="300" :delay="2000" />
    </div>


    <div class="tienIch" @click="router.push('/tien-ich')">
      <ImgAnimation :images="tienIchAnim" :width="16" :interval="300" :delay="1000" />
    </div>

    <div class="hoTamSu">
      <ImgAnimation :images="hoTamSuAnim" :width="18" :interval="200" :delay="0" />
    </div>

    <div class="land-layer"></div>
  </div>

  <div class="user-profile">
    <Image src="/avatar.png" width="210">
    </Image>
    <div class="user-name-container">
      <span class="user-name">{{ fullName }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import backgroundImgMobile from '~/assets/PhatNgoiHoaSenMobile.png';
import backgroundImgMobileNight from '~/assets/PhatNgoiHoaSenMobileNightRes.png';
import SakuraEffect from '~/components/effects/SakuraEffect.vue';

const gomoAnim = ref([
  '/home/anim/gomo/image_1.jpg',
  '/home/anim/gomo/image_2.jpg',
  '/home/anim/gomo/image_3.jpg',
  '/home/anim/gomo/image_4.jpg',
]);


const tienIchAnim = ref([
  '/home/anim/tienIch/image_13.jpg',
  '/home/anim/tienIch/image_14.jpg',
  '/home/anim/tienIch/image_15.jpg',
  '/home/anim/tienIch/image_16.jpg',
  '/home/anim/tienIch/image_17.jpg',
  '/home/anim/tienIch/image_18.jpg',
  '/home/anim/tienIch/image_19.jpg',
  '/home/anim/tienIch/image_20.jpg',
]);

const huyenHocAnim = ref([
  '/home/anim/maThuat/image_1.jpg',
  '/home/anim/maThuat/image_2.jpg',
  '/home/anim/maThuat/image_3.jpg',
  '/home/anim/maThuat/image_4.jpg',
  '/home/anim/maThuat/image_5.jpg',
  '/home/anim/maThuat/image_6.jpg',
  '/home/anim/maThuat/image_7.jpg',
  '/home/anim/maThuat/image_8.jpg',
  '/home/anim/maThuat/image_9.jpg',
  '/home/anim/maThuat/image_10.jpg',
]);

const hoTamSuAnim = ref([
  '/home/anim/hoTamSu/image_1.jpg',
  '/home/anim/hoTamSu/image_2.jpg',
  '/home/anim/hoTamSu/image_3.jpg',
  '/home/anim/hoTamSu/image_4.jpg',
  '/home/anim/hoTamSu/image_5.jpg',
  '/home/anim/hoTamSu/image_6.jpg',
  '/home/anim/hoTamSu/image_7.jpg',
  '/home/anim/hoTamSu/image_8.jpg',
  '/home/anim/hoTamSu/image_9.jpg',
  '/home/anim/hoTamSu/image_10.jpg',
  '/home/anim/hoTamSu/image_11.jpg',
  '/home/anim/hoTamSu/image_12.jpg',
  '/home/anim/hoTamSu/image_13.jpg',
  '/home/anim/hoTamSu/image_14.jpg',
  '/home/anim/hoTamSu/image_15.jpg',
  '/home/anim/hoTamSu/image_16.jpg',
  '/home/anim/hoTamSu/image_17.jpg',
  '/home/anim/hoTamSu/image_18.jpg',
  '/home/anim/hoTamSu/image_19.jpg',
]);


interface MapLocation {
  id: string
  name: string
  route: string
  status: string
  points: string   // SVG polygon points (normalized 0-100)
  cx: number       // centroid x (for pulse dot + tooltip)
  cy: number       // centroid y
}

const locations: MapLocation[] = [
  {
    id: 'chuaThien',
    name: 'Chùa Thiền',
    route: '/thapNhang',
    status: 'done',
    points: '2,6.5 31,6.5 31,51.5 2,51.5',
    cx: 16.5,
    cy: 29,
  },
  {
    id: 'leHoiHoaDang',
    name: 'Lễ Hội Hoa Đăng',
    route: '/box',
    status: 'done',
    points: '2.5,66 46,66 46,96.5 2.5,96.5',
    cx: 24,
    cy: 81,
  },
  {
    id: 'hoTinhTam',
    name: 'Hồ Tịnh Tâm',
    route: '/worry-jar',
    status: 'process',
    points: '51,38.5 66.5,38.5 66.5,50 51,50',
    cx: 58.8,
    cy: 44.2,
  },
  {
    id: 'phienChoTamLinh',
    name: 'Phiên Chợ Tâm Linh',
    route: '/shop',
    status: 'done',
    points: '50.5,53 73.5,53 73.5,77 50.5,77',
    cx: 62,
    cy: 65,
  },
  {
    id: 'goMo',
    name: 'Gõ Mõ',
    route: '/goMo',
    status: 'done',
    points: '68,13 83.5,13 83.5,52 68,52',
    cx: 75.8,
    cy: 32.5,
  },
  {
    id: 'thuVienVuTru',
    name: 'Thư Viện Vũ Trụ',
    route: '/huyenHoc',
    status: 'done',
    points: '84.5,30.5 99,30.5 99,72 84.5,72',
    cx: 91.8,
    cy: 51.2,
  },
  {
    id: 'hangTienIch',
    name: 'Hang Tiện Ích',
    route: '/tien-ich',
    status: 'done',
    points: '77,75 94,75 94,99 77,99',
    cx: 85.5,
    cy: 87,
  },
]
const router = useRouter()
const { $common } = useNuxtApp()
const { isMobileView } = useDevice()
const mobileBackground = ref<string | null>(null)
const fullName = ref('')

onMounted(() => {
  updateMobileBackground()
  if (import.meta.client) {
    fullName.value = localStorage.getItem('fullName') || 'Khách'
    console.log('Viewport Width:', window.innerWidth, 'px');
    console.log('Viewport Height:', window.innerHeight, 'px');
  }
})

const updateMobileBackground = () => {
  const now = new Date()
  const vnTime = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Ho_Chi_Minh',
    hour: 'numeric',
    hour12: false,
  })
  const currentHour = parseInt(vnTime.format(now))
  if (currentHour >= 6 && currentHour < 20) {
    mobileBackground.value = backgroundImgMobile
  } else {
    mobileBackground.value = backgroundImgMobileNight
  }
}
</script>

<style scoped src="./index.css"></style>
