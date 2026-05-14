<template>
  <!-- MOBILE: Giữ nguyên background cũ -->
  <div v-if="isMobileView" class="home-page-mobile" :style="{ backgroundImage: `url(${mobileBackground})` }">
    <SakuraEffect />
  </div>

  <!-- DESKTOP: SVG Polygon Hotspot Map -->
  <div v-else class="map-home">
    <div class="map-wrapper">
      <!-- Background map image -->
      <img
        :src="mapImage"
        alt="Bản đồ Góc An Nhiên"
        class="map-background"
        @load="onImageLoaded"
        draggable="false"
      />

      <!-- SVG Overlay — viewBox 0 0 100 100 = normalized % coordinates
           SVG fills wrapper 100%, wrapper keeps aspect-ratio of image
           → polygon points in % always align with image pixels -->
      <svg
        v-if="imageLoaded"
        class="map-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Bản đồ điều hướng Góc An Nhiên"
      >
        <g
          v-for="loc in locations"
          :key="loc.id"
          class="hotspot-group"
          :class="{ 'debug-visible': debugMode }"
          @click="handleNavigate(loc)"
          @mouseenter="hoveredId = loc.id"
          @mouseleave="hoveredId = null"
          style="cursor: pointer"
          :aria-label="loc.name"
          role="button"
        >
          <!-- Polygon hotspot — follows island silhouette -->
          <polygon
            :points="loc.points"
            class="hotspot-polygon"
            :class="{ hovered: hoveredId === loc.id }"
          />

          <!-- Pulse dot at centroid -->
          <circle
            :cx="loc.cx"
            :cy="loc.cy"
            r="1.2"
            class="hotspot-pulse"
            :class="{ hidden: hoveredId === loc.id }"
          />
        </g>
      </svg>

      <!-- Debug badge -->
      <div v-if="debugMode" class="debug-badge">🔧 Debug Mode (Ctrl+Shift+H)</div>

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
  points: string   // SVG polygon points (normalized 0-100)
  cx: number       // centroid x (for pulse dot + tooltip)
  cy: number       // centroid y
}

const router = useRouter()
const { $common } = useNuxtApp()
const { isMobileView } = useDevice()
const imageLoaded = ref(false)
const mobileBackground = ref<string | null>(null)
const hoveredId = ref<string | null>(null)
const debugMode = ref(false)

const mapImage = '/home/map-home.png'

/**
 * Polygon hotspots — all coordinates in normalized % (0-100).
 * viewBox="0 0 100 100" + preserveAspectRatio="none" + wrapper keeps aspect-ratio
 * → polygons always align with image regardless of screen size.
 *
 * Each polygon tightly follows the island/object silhouette.
 * No overlap between adjacent regions.
 */
/**
 * FINAL POLYGON HOTSPOTS — from external polygon mapper.
 * Coordinates: normalized % (0-100), clockwise order.
 * viewBox="0 0 100 100" + preserveAspectRatio="none"
 */
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

const handleDebugToggle = (e: KeyboardEvent) => {
  if (e.ctrlKey && e.shiftKey && e.key === 'H') {
    debugMode.value = !debugMode.value
  }
}

onMounted(() => {
  updateMobileBackground()
  window.addEventListener('keydown', handleDebugToggle)
  if (import.meta.client) {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('debug') === 'hotspot') {
      debugMode.value = true
    }
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
