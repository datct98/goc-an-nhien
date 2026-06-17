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
          <div v-for="item in disciplines" :key="item.id" class="huyenhoc-card"
            :class="{ 'coming-soon': item.status !== 'done' }" @click="navigateTo(item)">
            <span class="huyenhoc-card-icon">{{ item.icon }}</span>
            <span class="huyenhoc-card-name">{{ item.name }}</span>
            <span class="huyenhoc-card-desc">{{ item.description }}</span>
            <span v-if="item.status !== 'done'" class="huyenhoc-card-badge">Sắp ra mắt</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- DESKTOP ============================================> -->
  <div v-else class="container-huyenHoc">
    <!-- Lớp hiệu ứng (nằm dưới) -->
    <StarOverlay />
    <DesktopTitle title="Huyền học"
      sub="Khám phá những bí ẩn của vận mệnh và sự hòa hợp giữa con người với vũ trụ qua tinh hoa các bộ môn huyền học." />

    <div class="wizard flex justify-center items-center">
      <div>
        <Image src="/huyenHoc/wizard.png" width="300" />
      </div>
    </div>
    <div class="flex">
      <div class="huyen-hoc-grid m-auto">
        <div v-for="item in disciplines" :key="item.id" class="huyen-hoc-card"
          :class="{ 'coming-soon': item.status !== 'done' }" @click="navigateTo(item)">
          <font-awesome-icon class="huyen-hoc-card-icon" :icon="item.icon" />
          <span class="huyen-hoc-card-name">{{ item.name }}</span>
          <span class="huyen-hoc-card-desc">{{ item.description }}</span>
          <span v-if="item.status !== 'done'" class="huyen-hoc-card-badge">Sắp ra mắt</span>
        </div>
      </div>
    </div>

  </div>

</template>

<script setup>
import StarOverlay from "~/components/effects/StarOverlay.vue";

const router = useRouter();
const { isMobileView } = useDevice();


const disciplines = ref([
  {
    id: 'tu-vi',
    icon: 'fa-solid fa-dharmachakra',
    name: 'Xem Tử Vi',
    description: 'Luận giải lá số tử vi đẩu số',
    path: '/huyenHoc/tu-vi',
    status: 'done',
  },
  {
    id: 'xem-chi-tay',
    icon: 'fa-regular fa-hand',
    name: 'Xem Chỉ Tay',
    description: 'Luận giải vận mệnh qua chỉ tay',
    path: '/huyenHoc/xem-chi-tay',
    status: 'done',
  },
  {
    id: 'tarot',
    icon: 'fa-solid fa-hat-wizard',
    name: 'Xem Tarot',
    description: 'Bói bài Tarot',
    path: '/huyenHoc/tarot',
    status: 'process',
  },
  {
    id: 'cung-hoang-dao',
    icon: 'fa-solid fa-scale-balanced',
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
