<template>
  <!-- MOBILE: Giữ nguyên background cũ -->
  <div v-if="isMobileView" class="home-page-mobile" :style="{ backgroundImage: `url(${mobileBackground})` }">
    <SakuraEffect />
  </div>

  <!-- DESKTOP: SVG Polygon Hotspot Map -->
  <div v-else class="map-home">
    <div v-if="isMorning" class="sky-layer-morning"></div>
    <div v-else class="sky-layer"></div>

    <!-- Cloud layers for parallax effect -->
    <div class="clouds-container">
      <div class="cloud cloud-slow"></div>
      <div class="cloud cloud-medium"></div>
      <div class="cloud cloud-fast"></div>
    </div>

    <div class="land-layer">
      <div class="chuaGoMo" @click="router.push('/goMo')">
        <ImgAnimation :images="gomoAnim" :width="500" :interval="300" :delay="500" />
      </div>

      <div class="huyenHoc" @click="router.push('/huyenHoc')">
        <ImgAnimation :images="isMorning ? huyenHocAnim : huyenHocAnimSleep" :width="200" :interval="300"
          :delay="2000" />
      </div>


      <div class="tienIch" @click="router.push('/tien-ich')">
        <ImgAnimation :images="tienIchAnim" :width="300" :interval="300" :delay="1000" />
      </div>

      <div class="main-land">
      </div>

      <!-- <div class="hoTamSu">
        <ImgAnimation :images="hoTamSuAnim" :width="300" :interval="200" :delay="0" />
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import backgroundImgMobile from '~/assets/PhatNgoiHoaSenMobile.png';
import backgroundImgMobileNight from '~/assets/PhatNgoiHoaSenMobileNightRes.png';
import SakuraEffect from '~/components/effects/SakuraEffect.vue';

const gomoAnim = ref(Array.from({ length: 4 }, (_, i) => `/home/anim/gomo/image_${i + 1}.jpg`));
const tienIchAnim = ref(Array.from({ length: 8 }, (_, i) => `/home/anim/tienIch/image_${i + 13}.jpg`));
const huyenHocAnim = ref(Array.from({ length: 10 }, (_, i) => `/home/anim/maThuat/image_${i + 1}.jpg`));
const huyenHocAnimSleep = ref(Array.from({ length: 20 }, (_, i) => `/home/anim/maThuat/sleep/image_${i + 1}.png`));
const hoTamSuAnim = ref(Array.from({ length: 19 }, (_, i) => `/home/anim/hoTamSu/image_${i + 1}.jpg`));


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
const isMorning = ref(false)
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
    isMorning.value = true
  } else {
    mobileBackground.value = backgroundImgMobileNight
    isMorning.value = false
  }
}
</script>

<style scoped src="./index.css"></style>
