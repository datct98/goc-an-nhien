<template>
  <!-- MOBILE -->
  <div v-if="isMobileView" class="container-huyenhoc-mobile">
    <div class="bg-filter">
      <div class="huyenhoc-menu-page">
        <button class="btn-back-home" aria-label="Quay lại trang chủ" @click="goHome">
          <i class="pi pi-arrow-left"></i>
        </button>

        <p class="title"><span>🔮 Huyền Học</span></p>
        <p class="huyenhoc-subtitle">Khám phá vận mệnh qua các bộ môn huyền học</p>

        <div class="huyenhoc-grid">
          <div
            v-for="item in disciplines"
            :key="item.id"
            class="huyenhoc-card"
            :class="{ 'coming-soon': item.status !== 'done' }"
            role="button"
            :aria-label="item.name"
            :aria-disabled="item.status !== 'done'"
            tabindex="0"
            @click="navigateTo(item)"
            @keydown.enter="navigateTo(item)"
            @keydown.space.prevent="navigateTo(item)"
          >
            <span class="huyenhoc-card-icon">{{ item.icon }}</span>
            <span class="huyenhoc-card-name">{{ item.name }}</span>
            <span class="huyenhoc-card-desc">{{ item.description }}</span>
            <span v-if="item.status !== 'done'" class="huyenhoc-card-badge">Sắp ra mắt</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- DESKTOP -->
  <div v-else class="container-huyenhoc-desktop">
    <div class="bg-filter">
      <div class="huyenhoc-desktop-shell">
        <button class="btn-back-desktop" aria-label="Quay lại trang chủ" @click="goHome">
          <i class="pi pi-arrow-left"></i>
          <span>Trang chủ</span>
        </button>

        <header class="huyenhoc-desktop-header">
          <p class="huyenhoc-desktop-title"><span>🔮 Huyền Học</span></p>
          <p class="huyenhoc-desktop-subtitle">Khám phá vận mệnh qua các bộ môn huyền học</p>
        </header>

        <div class="huyenhoc-desktop-grid">
          <div
            v-for="item in disciplines"
            :key="item.id"
            class="huyenhoc-desktop-card"
            :class="{ 'coming-soon': item.status !== 'done' }"
            role="button"
            :aria-label="item.name"
            :aria-disabled="item.status !== 'done'"
            tabindex="0"
            @click="navigateTo(item)"
            @keydown.enter="navigateTo(item)"
            @keydown.space.prevent="navigateTo(item)"
          >
            <span class="huyenhoc-desktop-card-icon">{{ item.icon }}</span>
            <span class="huyenhoc-desktop-card-name">{{ item.name }}</span>
            <span class="huyenhoc-desktop-card-desc">{{ item.description }}</span>
            <span v-if="item.status !== 'done'" class="huyenhoc-desktop-card-badge">Sắp ra mắt</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const { isMobileView } = useDevice();

const disciplines = ref([
  {
    id: 'tu-vi',
    icon: '🌟',
    name: 'Xem Tử Vi',
    description: 'Luận giải lá số tử vi đẩu số',
    path: '/huyenHoc/tu-vi',
    status: 'done',
  },
  {
    id: 'xem-chi-tay',
    icon: '🤚',
    name: 'Xem Chỉ Tay',
    description: 'Luận giải vận mệnh qua chỉ tay',
    path: '/huyenHoc/xem-chi-tay',
    status: 'done',
  },
  {
    id: 'tarot',
    icon: '🃏',
    name: 'Xem Tarot',
    description: 'Bói bài Tarot',
    path: '/huyenHoc/tarot',
    status: 'process',
  },
  {
    id: 'cung-hoang-dao',
    icon: '♈',
    name: 'Cung Hoàng Đạo',
    description: 'Xem cung hoàng đạo',
    path: '/huyenHoc/cung-hoang-dao',
    status: 'process',
  },
]);

const goHome = () => router.push('/home');

const navigateTo = (item) => {
  if (item.status === 'done') {
    router.push(item.path);
  }
};
</script>
<style scoped src="./index.css"></style>
<style scoped>
/* ========= MOBILE ========= */
.huyenhoc-menu-page {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 24px 20px 40px;
  max-width: 448px;
  margin: 0 auto;
}

.btn-back-home {
  background: rgba(212, 175, 55, 0.15);
  border: 1px solid rgba(212, 175, 55, 0.3);
  color: #d4af37;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

.huyenhoc-subtitle {
  text-align: center;
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.85rem;
  margin: 0 0 28px;
  font-style: italic;
}

.huyenhoc-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.huyenhoc-card {
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 16px;
  padding: 22px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
  position: relative;
}

.huyenhoc-card:hover:not(.coming-soon),
.huyenhoc-card:focus-visible:not(.coming-soon) {
  transform: translateY(-2px);
  outline: none;
  border-color: rgba(212, 175, 55, 0.45);
}

.huyenhoc-card.coming-soon {
  opacity: 0.4;
  cursor: not-allowed;
}

.huyenhoc-card-icon {
  font-size: 2.2rem;
  margin-bottom: 4px;
}

.huyenhoc-card-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: #e6ca77;
}

.huyenhoc-card-desc {
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  line-height: 1.3;
}

.huyenhoc-card-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 0.55rem;
  padding: 2px 6px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* ========= DESKTOP ========= */
.container-huyenhoc-desktop {
  width: 100vw;
  min-height: 100dvh;
  background-image: url("../../public/huyenHoc/cucQuang.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}

.huyenhoc-desktop-shell {
  width: 100%;
  min-height: 100dvh;
  max-width: 1200px;
  margin: 0 auto;
  /* Pad-left to clear the global hamburger button (top:1rem,left:1rem) */
  padding: 6rem 2rem 4rem;
  display: flex;
  flex-direction: column;
}

.btn-back-desktop {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(212, 175, 55, 0.12);
  border: 1px solid rgba(212, 175, 55, 0.3);
  color: #d4af37;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: opacity 0.2s ease, transform 0.2s ease;
  margin-bottom: 1.5rem;
}

.btn-back-desktop:hover,
.btn-back-desktop:focus-visible {
  outline: none;
  border-color: rgba(212, 175, 55, 0.6);
  transform: translateX(-2px);
}

.huyenhoc-desktop-header {
  text-align: center;
  margin-bottom: 3rem;
}

.huyenhoc-desktop-title {
  color: #e6ca77;
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  text-balance: balance;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
}

.huyenhoc-desktop-subtitle {
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.05rem;
  margin: 0;
  font-style: italic;
  text-pretty: pretty;
}

.huyenhoc-desktop-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}

.huyenhoc-desktop-card {
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(212, 175, 55, 0.22);
  border-radius: 20px;
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease, border-color 0.2s ease;
  position: relative;
  text-align: center;
  min-height: 240px;
  justify-content: center;
}

.huyenhoc-desktop-card:hover:not(.coming-soon),
.huyenhoc-desktop-card:focus-visible:not(.coming-soon) {
  outline: none;
  border-color: rgba(212, 175, 55, 0.6);
  transform: translateY(-4px);
}

.huyenhoc-desktop-card.coming-soon {
  opacity: 0.4;
  cursor: not-allowed;
}

.huyenhoc-desktop-card-icon {
  font-size: 3.5rem;
  line-height: 1;
}

.huyenhoc-desktop-card-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #e6ca77;
  letter-spacing: 0.5px;
}

.huyenhoc-desktop-card-desc {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.5;
  text-pretty: pretty;
}

.huyenhoc-desktop-card-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 0.7rem;
  padding: 4px 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
