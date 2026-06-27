<template>
  <div class="tien-ich-page">
    <WoodGrain />
    <div class="tien-ich-header mt-10">
      <!-- <button class="tien-ich-back" @click="goBack">
                <i class="pi pi-arrow-left"></i>
            </button> -->
      <h1 class="tien-ich-title text-center">
        <font-awesome-icon icon="fa-solid fa-screwdriver-wrench" /> &nbsp;
      </h1>
      <h1 class="tien-ich-title text-center">
        <span>Mật pháp</span>
      </h1>
      <p class="tien-ich-subtitle text-center">
        khám phá những phương pháp bí mật, hữu ích cho cuộc sống
      </p>
    </div>

    <div class="tien-ich-grid">
      <div v-for="item in utilities" :key="item.id" class="tien-ich-card"
        :class="{ 'coming-soon': item.status !== 'done' }" @click="navigateTo(item)">
        <font-awesome-icon class="tien-ich-card-icon" :icon="item.icon" />
        <span class="tien-ich-card-name">{{ item.name }}</span>
        <span class="tien-ich-card-desc">{{ item.description }}</span>
        <span v-if="item.status !== 'done'" class="tien-ich-card-badge">Sắp ra mắt</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import WoodGrain from "~/components/effects/WoodGrain.vue";

const router = useRouter();

const utilities = ref([
  {
    id: "chia-tien",
    icon: "fa-solid fa-sack-dollar",
    name: "Chia tiền",
    description: "Chia tiền nhóm dễ dàng",
    path: "/tien-ich/chia-tien",
    status: "done",
  },
  {
    id: "vi-than-cua-nhung-quyet-dinh",
    icon: "fa-solid fa-gavel",
    name: "Vị thần của những quyết định",
    description: "Hãy để vị thần đưa ra quyết định cho bạn",
    path: "/tien-ich/vi-than-quyet-dinh",
    status: "done",
  },
  {
    id: "xem-ngay-di-cat-toc",
    icon: "fa-solid fa-calendar-days",
    name: "Xem ngày đi cắt tóc",
    description: "Hôm nay có nên đi cắt tóc không",
    path: "/tien-ich/xem-ngay-di-cat-toc",
    status: "process",
  },
]);

const goBack = () => {
  router.push("/home");
};

const navigateTo = (item) => {
  if (item.status === "done") {
    router.push(item.path);
  }
};
</script>

<style scoped>
* {
  font-family: Lora;
}

.tien-ich-page {
  width: 100%;
  height: 100vh;
  min-height: 448px;
  margin: 0 auto;
  padding: 24px 20px;
  position: relative;
  background: #3E2723;
  color: white;
}

.tien-ich-header {
  margin-bottom: 32px;
  position: relative;
}

.tien-ich-back {
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.3);
  color: #d4af37;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin-bottom: 20px;
  transition: all 0.2s ease;
}

.tien-ich-back:hover {
  background: rgba(212, 175, 55, 0.2);
}

.tien-ich-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 6px 0;
  letter-spacing: 0.5px;
}

.tien-ich-subtitle {
  font-size: 0.9rem;
  margin: 0;
  font-style: italic;
}

.tien-ich-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.tien-ich-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border: 1px solid transparent;
  /* Chuẩn bị viền sẵn để không bị nhảy layout */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  /* Chỉnh lại shadow cho tự nhiên */
}

.tien-ich-card.coming-soon {
  opacity: 0.45;
  cursor: not-allowed;
}

.tien-ich-card-icon {
  font-size: 2rem;
  margin-bottom: 4px;
}

.tien-ich-card-name {
  font-size: 1rem;
  font-weight: 600;
}

.tien-ich-card-desc {
  font-size: 0.75rem;
  text-align: center;
}

.tien-ich-card-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 0.55rem;
  padding: 2px 6px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
