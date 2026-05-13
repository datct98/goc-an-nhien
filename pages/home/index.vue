<template>
  <!-- MOBILE: Giữ nguyên background cũ -->
  <div v-if="isMobileView" class="home-page-mobile" :style="{ backgroundImage: `url(${mobileBackground})` }">
    <SakuraEffect />
  </div>

  <!-- DESKTOP: SVG Image Map + Hotspot -->
  <div v-else class="map-home">
    <div class="map-wrapper" ref="mapContainer">
      <!-- Background map image -->
      <img
        :src="mapImage"
        alt="Bản đồ Góc An Nhiên"
        class="map-background"
        @load="onImageLoaded"
        draggable="false"
      />

      <!-- SVG Hotspot Overlay
           viewBox="0 0 1845 1038" khớp với kích thước ảnh gốc
           → tọa độ px luôn chính xác, tự responsive theo mọi màn hình -->
      <svg
        v-if="imageLoaded"
        class="map-svg"
        viewBox="0 0 1845 1038"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Bản đồ điều hướng Góc An Nhiên"
      >
        <g
          v-for="loc in locations"
          :key="loc.id"
          class="hotspot-group"
          :class="{ 'debug-mode': debugMode }"
          @click="handleNavigate(loc)"
          @mouseenter="hoveredId = loc.id"
          @mouseleave="hoveredId = null"
          style="cursor: pointer"
          :aria-label="loc.name"
          role="button"
        >
          <!-- Vùng click trong suốt -->
          <rect
            :x="loc.x"
            :y="loc.y"
            :width="loc.w"
            :height="loc.h"
            class="hotspot-rect"
            :class="{ hovered: hoveredId === loc.id }"
            rx="14"
          />

          <!-- Pulse dot - ẩn khi hover -->
          <circle
            :cx="loc.x + loc.w / 2"
            :cy="loc.y + loc.h / 2"
            r="8"
            class="hotspot-pulse"
            :class="{ paused: hoveredId === loc.id }"
          />

          <!-- Label tooltip khi hover -->
          <g v-if="hoveredId === loc.id" class="hotspot-tooltip">
            <rect
              :x="loc.x + loc.w / 2 - 110"
              :y="loc.y + loc.h / 2 - 62"
              width="220"
              height="36"
              rx="10"
              class="tooltip-bg"
            />
            <text
              :x="loc.x + loc.w / 2"
              :y="loc.y + loc.h / 2 - 38"
              text-anchor="middle"
              class="tooltip-text"
            >{{ loc.name }}</text>
          </g>
        </g>
      </svg>

      <!-- Debug badge -->
      <div v-if="debugMode" class="debug-badge">🔧 Debug (Ctrl+Shift+H)</div>

      <!-- Header overlay -->
      <header class="map-header">
        <button class="user-btn" @click="showUserMenu">
          <img src="/home/cosmic_user_avatar.png" class="user-avatar-img" alt="User Profile" />
        </button>
      </header>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import backgroundImgMobile from '~/assets/PhatNgoiHoaSenMobile.png'
import backgroundImgMobileNight from '~/assets/PhatNgoiHoaSenMobileNightRes.png'
import SakuraEffect from '~/components/effects/SakuraEffect.vue'

interface MapLocation {
  id: string
  name: string
  route: string
  status: string
  x: number
  y: number
  w: number
  h: number
}

const router = useRouter()
const { $common } = useNuxtApp()
const { isMobileView } = useDevice()
const imageLoaded = ref(false)
const mapContainer = ref<HTMLElement | null>(null)
const mobileBackground = ref<string | null>(null)
const hoveredId = ref<string | null>(null)
const debugMode = ref(false)

const mapImage = '/home/map-home.png'

/**
 * Tọa độ tính bằng px tuyệt đối theo ảnh gốc 1845×1038.
 * SVG viewBox="0 0 1845 1038" đảm bảo scale tự động trên mọi viewport.
 *
 * Công thức convert từ % cũ:
 *   x_px = x_pct * 1845 / 100
 *   y_px = y_pct * 1038 / 100
 *   w_px = w_pct * 1845 / 100
 *   h_px = h_pct * 1038 / 100
 */
const locations: MapLocation[] = [
  {
    id: 'goMo',
    name: 'Gõ Mõ',
    route: '/goMo',
    status: 'done',
    x: 1071, y: 21, w: 369, h: 332,
  },
  {
    id: 'hoTinhTam',
    name: 'Hồ Tĩnh Tâm',
    route: '/worry-jar',
    status: 'process',
    x: 498, y: 83, w: 517, h: 332,
  },
  {
    id: 'thuVienVuTru',
    name: 'Thư Viện Vũ Trụ',
    route: '/huyenHoc',
    status: 'done',
    x: 1365, y: 187, w: 480, h: 415,
  },
  {
    id: 'phienChoTamLinh',
    name: 'Phiên Chợ Tâm Linh',
    route: '/shop',
    status: 'done',
    x: 609, y: 467, w: 517, h: 291,
  },
  {
    id: 'leHoiHoaDang',
    name: 'Lễ Hội Hoa Đăng',
    route: '/box',
    status: 'done',
    x: 0, y: 467, w: 554, h: 467,
  },
  {
    id: 'hangTienIch',
    name: 'Hang Tiện Ích',
    route: '/tien-ich',
    status: 'done',
    x: 1163, y: 644, w: 498, h: 363,
  },
  {
    id: 'lauThien',
    name: 'Lầu Thiền',
    route: '/thapNhang',
    status: 'done',
    x: 0, y: 104, w: 461, h: 363,
  },
]

const handleDebugToggle = (e: KeyboardEvent) => {
  if (e.ctrlKey && e.shiftKey && e.key === 'H') {
    debugMode.value = !debugMode.value
  }
}

onMounted(() => {
  updateMobileBackground()
  window.addEventListener('keydown', handleDebugToggle)
  const urlParams = new URLSearchParams(window.location.search)
  if (urlParams.get('debug') === 'hotspot') {
    debugMode.value = true
  }
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleDebugToggle)
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

const onImageLoaded = () => {
  imageLoaded.value = true
}

const handleNavigate = (location: MapLocation) => {
  $common.navigateTo(location.route, location.status, router)
}

const showUserMenu = () => {
  console.log('User menu')
}
</script>

<style scoped src="./index.css"></style>
