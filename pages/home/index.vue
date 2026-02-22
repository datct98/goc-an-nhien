<template>

  <div class="home-page" :style="{ backgroundImage: `url(${backgroundImg})` }">
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
      <div class="feature-bubble card-top-left" @click="navigateTo('/goMo', homeList.goMo.status)"
        :style="{ backgroundImage: `url(${bubbleImg})`, backgroundSize: 'cover' }">
        <div class="icon-wrapper">
          <Image :src="homeList.goMo.image" class="card-icon-img" :alt="homeList.goMo.name"></Image>
        </div>
        <div class="card-title">{{ homeList.goMo.name }}</div>
      </div>

      <!-- Mid-Left: Hũ Tâm Sự -->
      <div class="feature-bubble card-mid-left" @click="navigateTo('/worry-jar', homeList.hoTamSu.status)"
        :style="{ backgroundImage: `url(${bubbleImg})`, backgroundSize: 'cover' }">
        <div class="icon-wrapper">
          <Image :src="homeList.hoTamSu.image" class="card-icon-img" :alt="homeList.hoTamSu.name"></Image>
        </div>
        <div class="card-title">{{ homeList.hoTamSu.name }}</div>
      </div>

      <!-- Top-Right: Phóng Đăng -->
      <div class="feature-bubble card-top-right" @click="navigateTo('/altar', homeList.phongDang.status)"
        :style="{ backgroundImage: `url(${bubbleImg})`, backgroundSize: 'cover' }">
        <div class="icon-wrapper">
          <Image :src="homeList.phongDang.image" class="card-icon-img" :alt="homeList.phongDang.name"></Image>
        </div>
        <div class="card-title">{{ homeList.phongDang.name }}</div>
      </div>

      <!-- Mid-Right: Thắp Nhang -->
      <div class="feature-bubble card-mid-right" @click="navigateTo('/altar', homeList.thapNhang.status)"
        :style="{ backgroundImage: `url(${bubbleImg})`, backgroundSize: 'cover' }">
        <div class="icon-wrapper">
          <Image :src="homeList.thapNhang.image" class="card-icon-img" :alt="homeList.thapNhang.name"></Image>
        </div>
        <div class="card-title">{{ homeList.thapNhang.name }}</div>
      </div>

      <!-- Bottom-Center-Left: Huyền Học -->
      <div class="feature-bubble card-bottom-left" @click="navigateTo('/huyenHoc', homeList.huyenHoc.status)"
        :style="{ backgroundImage: `url(${bubbleImg})`, backgroundSize: 'cover' }">
        <div class="icon-wrapper">
          <Image :src="homeList.huyenHoc.image" class="card-icon-img" :alt="homeList.huyenHoc.name"></Image>
        </div>
        <div class="card-title">{{ homeList.huyenHoc.name }}</div>
      </div>

      <!-- Bottom-Center-Right: Linh Vật -->
      <div class="feature-bubble card-bottom-right" @click="navigateTo('/shop', homeList.linhVat.status)"
        :style="{ backgroundImage: `url(${bubbleImg})`, backgroundSize: 'cover' }">
        <div class="icon-wrapper">
          <Image :src="homeList.linhVat.image" class="card-icon-img" :alt="homeList.linhVat.name"></Image>
        </div>
        <div class="card-title">{{ homeList.linhVat.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '../composables/useAuth';
import backgroundImg from '../assets/phatNgoiHoaSenRes.png';
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
