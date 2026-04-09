<template>
  <div class="huyen-hoc-page">
    <!-- Stars background -->
    <div class="stars-bg">
      <div
        v-for="s in stars"
        :key="s.id"
        class="star"
        :style="{
          left: s.x + '%', top: s.y + '%',
          width: s.size + 'px', height: s.size + 'px',
          '--dur': s.dur + 's', '--op': s.op
        }"
      />
    </div>

    <!-- Nebula glows -->
    <div class="nebula-glow top-right" />
    <div class="nebula-glow bottom-left" />
    <div class="nebula-glow center" />

    <!-- Header -->
    <header class="hh-header">
      <button class="hh-back-btn" @click="goBack">‹</button>
      <span class="hh-title">Huyền Học</span>
      <span class="hh-badge">Gen 2</span>
    </header>

    <!-- Hero section (depends on active tab) -->
    <div class="hh-hero">
      <template v-if="activeTab === 'tarot'">
        <h1 class="hh-hero-title">Huyền Học<br/><span style="color:#bb88ff">Rớt bài ngay</span></h1>
        <p class="hh-hero-subtitle">Để vũ trụ dẫn lối cho bạn</p>
        <div class="hh-center-art">
          <div class="orb-glow-ring" />
          <div class="orb-glow-ring" />
          <div class="orb-glow-ring" />
          <span class="center-icon-art">🃏</span>
        </div>
        <button class="hh-cta-btn" @click="drawCard">Tarot · Rớt bài</button>
        <p class="hh-cta-hint">Hãy tập trung vào câu hỏi trước khi rớt</p>
      </template>

      <template v-else-if="activeTab === 'tuvi'">
        <h1 class="hh-hero-title">Tử Vi<br/><span style="color:#e8c87c">Xem vận mệnh</span></h1>
        <p class="hh-hero-subtitle">Khám phá cung mệnh & 12 con giáp</p>
        <div class="hh-center-art">
          <div class="orb-glow-ring" />
          <div class="orb-glow-ring" />
          <div class="orb-glow-ring" />
          <span class="center-icon-art">⭐</span>
        </div>

        <div class="tuvi-entry-card" @click="goToTuVi">
          <span class="tuvi-entry-icon">🔭</span>
          <div class="tuvi-entry-title">Xem Tử Vi ngay</div>
          <div class="tuvi-entry-desc">Nhập ngày sinh để khám phá<br/>cung mệnh và vận số của bạn</div>
        </div>
      </template>

      <template v-else-if="activeTab === 'kinhDich'">
        <h1 class="hh-hero-title">Kinh Dịch<br/><span style="color:#44cccc">Bát quái</span></h1>
        <p class="hh-hero-subtitle">Trí tuệ cổ xưa từ Đông phương</p>
        <div class="hh-center-art">
          <div class="orb-glow-ring" />
          <div class="orb-glow-ring" />
          <div class="orb-glow-ring" />
          <span class="center-icon-art">☯️</span>
        </div>
        <div class="hh-coming-soon">
          <p class="cs-text">Tính năng đang được phát triển.<br/>Sắp ra mắt trong phiên bản tiếp theo!</p>
        </div>
      </template>
    </div>

    <!-- Tab Bar -->
    <nav class="hh-tab-bar">
      <div
        class="hh-tab"
        :class="{ active: activeTab === 'tuvi' }"
        @click="activeTab = 'tuvi'"
      >
        <span class="tab-icon">✨</span>
        <span class="tab-label">Tử Vi</span>
      </div>
      <div
        class="hh-tab"
        :class="{ active: activeTab === 'kinhDich' }"
        @click="activeTab = 'kinhDich'"
      >
        <span class="tab-icon">☯️</span>
        <span class="tab-label">Kinh Dịch</span>
      </div>
      <div
        class="hh-tab"
        :class="{ active: activeTab === 'tarot' }"
        @click="activeTab = 'tarot'"
      >
        <span class="tab-icon">🃏</span>
        <span class="tab-label">Tarot</span>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeTab = ref('tarot')

// Generate random stars
const stars = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 0.5,
  dur: Math.random() * 3 + 2,
  op: (Math.random() * 0.5 + 0.2).toFixed(2),
}))

const goBack = () => router.push('/home')

const goToTuVi = () => router.push('/huyenHoc/tuVi')

const drawCard = () => {
  // TODO: implement tarot card draw
  console.log('Drawing tarot card...')
}
</script>

<style scoped src="./index.css"></style>