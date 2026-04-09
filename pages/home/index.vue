<template>

  <div v-if="isMobileView" class="home-page-mobile" :style="{ backgroundImage: `url(${mobileBackground})` }">
    <SakuraEffect />
  </div>

  <div v-else class="home-page" :style="{ backgroundImage: `url(${desktopBackground})` }">
    <SakuraEffect />

    <!-- HEADER -->
    <header class="app-header">
      <!-- Right: Avatar -->
      <button class="user-btn" @click="showUserMenu">
        <Image src="/home/cosmic_user_avatar.png" class="user-avatar-img" alt="User Profile"></Image>
      </button>
    </header>

    <div class="feature-cards-container">
      <!-- Top-Left: Gõ Mõ -->
      <!-- <div class="feature-bubble card-top-left" @click="navigateTo('/goMo', homeList.goMo.status)"
        :style="{ backgroundImage: `url(${bubbleImg})`, backgroundSize: 'cover' }">
        <div class="icon-wrapper">
          <Image :src="homeList.goMo.image" class="card-icon-img" :alt="homeList.goMo.name"></Image>
        </div>
        <div class="card-title">{{ homeList.goMo.name }}</div>
      </div> -->

      <!-- Mid-Left: Hũ Tâm Sự -->
      <!-- <div class="feature-bubble card-mid-left" @click="navigateTo('/worry-jar', homeList.hoTamSu.status)"
        :style="{ backgroundImage: `url(${bubbleImg})`, backgroundSize: 'cover' }">
        <div class="icon-wrapper">
          <Image :src="homeList.hoTamSu.image" class="card-icon-img" :alt="homeList.hoTamSu.name"></Image>
        </div>
        <div class="card-title">{{ homeList.hoTamSu.name }}</div>
      </div> -->

      <!-- Top-Right: Phóng Đăng -->
      <!-- <div class="feature-bubble card-top-right" @click="navigateTo('/altar', homeList.phongDang.status)"
        :style="{ backgroundImage: `url(${bubbleImg})`, backgroundSize: 'cover' }">
        <div class="icon-wrapper">
          <Image :src="homeList.phongDang.image" class="card-icon-img" :alt="homeList.phongDang.name"></Image>
        </div>
        <div class="card-title">{{ homeList.phongDang.name }}</div>
      </div> -->

      <!-- Mid-Right: Thắp Nhang -->
      <!-- <div class="feature-bubble card-mid-right" @click="navigateTo('/thapNhang', homeList.thapNhang.status)"
        :style="{ backgroundImage: `url(${bubbleImg})`, backgroundSize: 'cover' }">
        <div class="icon-wrapper">
          <Image :src="homeList.thapNhang.image" class="card-icon-img" :alt="homeList.thapNhang.name"></Image>
        </div>
        <div class="card-title">{{ homeList.thapNhang.name }}</div>
      </div> -->

      <!-- Bottom-Center-Left: Huyền Học -->
      <!-- <div class="feature-bubble card-bottom-left" @click="navigateTo('/huyenHoc', homeList.huyenHoc.status)"
        :style="{ backgroundImage: `url(${bubbleImg})`, backgroundSize: 'cover' }">
        <div class="icon-wrapper">
          <Image :src="homeList.huyenHoc.image" class="card-icon-img" :alt="homeList.huyenHoc.name"></Image>
        </div>
        <div class="card-title">{{ homeList.huyenHoc.name }}</div>
      </div> -->

      <!-- Bottom-Center-Right: Linh Vật -->
      <!-- <div class="feature-bubble card-bottom-right" @click="navigateTo('/shop', homeList.shop.status)"
        :style="{ backgroundImage: `url(${bubbleImg})`, backgroundSize: 'cover' }">
        <div class="icon-wrapper">
          <Image :src="homeList.shop.image" class="card-icon-img" :alt="homeList.shop.name"></Image>
        </div>
        <div class="card-title">{{ homeList.shop.name }}</div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '../composables/useAuth';
import backgroundImg from '../assets/phatNgoiHoaSenRes.png';
import phatNgoiHoaSenNightRes from '../assets/phatNgoiHoaSenNightRes.png';
import backgroundImgMobile from '../assets/PhatNgoiHoaSenMobile.png';
import backgroundImgMobileNight from '../assets/PhatNgoiHoaSenMobileNightRes.png'
import bubbleImg from '../assets/bubble.png';
import SakuraEffect from '../components/effects/SakuraEffect.vue';
import { homeList } from '~/components/data/sideBar';


const router = useRouter()
const { getUserEmail } = useAuth()
const sidebarOpen = ref(false)
const { $common } = useNuxtApp()
const navigateTo = (path, status) => {
  $common.navigateTo(path, status, router);
}
const desktopBackground = ref(null);
const mobileBackground = ref(null);

const { isMobileView } = useDevice()

onMounted(() => {
  updateUIByTimer();
});

const updateUIByTimer = () => {
  // 1. Lấy thời gian hiện tại của hệ thống
  const now = new Date();

  // 2. Chuyển đổi sang múi giờ Việt Nam (ICT - UTC+7) 
  // Cách này giúp đảm bảo độ chính xác dù server hoặc thiết bị ở múi giờ khác
  const vnTime = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Ho_Chi_Minh',
    hour: 'numeric',
    hour12: false
  });

  const currentHour = parseInt(vnTime.format(now));

  // 3. Logic kiểm tra thời gian
  // Từ 6h sáng (6) đến trước 8h tối (20)
  if (currentHour >= 6 && currentHour < 20) {
    desktopBackground.value = backgroundImg;
    mobileBackground.value = backgroundImgMobile;
  } else {
    desktopBackground.value = phatNgoiHoaSenNightRes;
    mobileBackground.value = backgroundImgMobileNight;
  }
}


const toggleMenu = () => {
  console.log('Menu toggled')
}

const showUserMenu = () => {
  console.log('User menu')
}

const getUserInitial = () => {
  const email = getUserEmail()
  return email ? email.charAt(0).toUpperCase() : 'U'
}
</script>

<style scoped src="./index.css"></style>
