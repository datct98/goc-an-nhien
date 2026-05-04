<template>
  <div v-if="isMobileView" class="container-huyenhoc-mobile">
    <div class="bg-filter">
      <div class="huyenhoc-menu-page">
        <button class="btn-back-home" @click="goHome">
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
            @click="navigateTo(item)"
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
  <div v-else class="container-huyenHoc">
    <div class="left-task-bar"></div>
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
  transition: all 0.25s ease;
  position: relative;
}

.huyenhoc-card:hover:not(.coming-soon) {
  background: rgba(15, 23, 42, 0.7);
  border-color: rgba(212, 175, 55, 0.45);
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(212, 175, 55, 0.15);
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
</style>
