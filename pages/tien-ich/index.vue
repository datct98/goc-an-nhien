<template>
    <div class="tien-ich-page">
        <!-- Lớp hiệu ứng (nằm dưới) -->
        <StarOverlay />

        <div class="tien-ich-header mt-10">
            <!-- <button class="tien-ich-back" @click="goBack">
                <i class="pi pi-arrow-left"></i>
            </button> -->
            <h1 class="tien-ich-title">
                <font-awesome-icon icon="fa-solid fa-star" /> &nbsp;
                <span>Mật pháp</span>
            </h1>
            <p class="tien-ich-subtitle">khám phá những phương pháp bí mật, hữu ích cho cuộc sống</p>
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
import { useRouter } from 'vue-router';
import StarOverlay from '~/components/effects/StarOverlay.vue';

const router = useRouter();

const utilities = ref([
    {
        id: 'chia-tien',
        icon: 'fa-solid fa-dollar-sign',
        name: 'Chia tiền',
        description: 'Chia tiền nhóm dễ dàng',
        path: '/tien-ich/chia-tien',
        status: 'done',
    },
    // {
    //     id: 'ghi-chu',
    //     icon: '📝',
    //     name: 'Ghi chú',
    //     description: 'Lưu lại suy nghĩ',
    //     path: '/tien-ich/ghi-chu',
    //     status: 'process',
    // },
    // {
    //     id: 'dem-ngay',
    //     icon: '📅',
    //     name: 'Đếm ngày',
    //     description: 'Đếm ngược sự kiện',
    //     path: '/tien-ich/dem-ngay',
    //     status: 'process',
    // },
]);

const goBack = () => {
    router.push('/home');
};

const navigateTo = (item) => {
    if (item.status === 'done') {
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
    /* Gradient nền tối sâu thẳm */
    background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
    border-radius: 20px;
    color: white;
}

.tien-ich-header {
    margin-bottom: 32px;
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
    background: rgba(0, 0, 0, 0.06);
    border-radius: 16px;
    padding: 20px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.25s ease;
    position: relative;
    box-shadow: 4px 0 20px rgba(0, 0, 0, 0.5);
}

.tien-ich-card:hover:not(.coming-soon) {
    background: rgba(212, 175, 55, 0.12);
    border-color: rgba(212, 175, 55, 0.4);
    transform: translateY(-2px);
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
