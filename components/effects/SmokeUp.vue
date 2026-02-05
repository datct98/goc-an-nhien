<template>
    <div class="scene">
        <div class="smoke-source">
            <div v-for="particle in particles" :key="particle.id" class="smoke-particle" :style="particle.style"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const particles = ref([]);
let particleId = 0;
let interval = null;

const createParticle = () => {
    const id = particleId++;
    const size = Math.random() * 40 + 20;

    // Tạo các thuộc tính ngẫu nhiên cho từng hạt
    const newParticle = {
        id,
        style: {
            width: `${size}px`,
            height: `${size}px`,
            left: `${Math.random() * 60 - 30}px`, // Phân tán quanh tâm
            animationDuration: `${Math.random() * 3 + 4}s`,
            opacity: Math.random() * 0.7 + 0.3
        }
    };

    particles.value.push(newParticle);

    // Xóa hạt khỏi mảng sau khi animation kết thúc (khoảng 7s) để giải phóng bộ nhớ
    setTimeout(() => {
        particles.value = particles.value.filter(p => p.id !== id);
    }, 7000);
};

onMounted(() => {
    // Cứ mỗi 400ms tạo một hạt khói mới
    interval = setInterval(createParticle, 400);
});

onUnmounted(() => {
    clearInterval(interval);
});
</script>

<style scoped>
.scene {
    position: relative;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.smoke-source {
    position: relative;
    width: 2px;
    height: 2px;
    bottom: 0px;
    /* Vị trí trên miệng bát hương */
}

.smoke-particle {
    position: absolute;
    bottom: 0;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%);
    border-radius: 50%;
    filter: blur(2px);
    animation: rise linear forwards;
    pointer-events: none;
}

@keyframes rise {
    0% {
        transform: translateY(0) scale(1) translateX(0);
        opacity: 0;
    }

    10% {
        opacity: var(--v-opacity, 0.5);
    }

    50% {
        /* Tạo hiệu ứng khói lượn sóng nhẹ */
        transform: translateY(-150px) scale(1.5) translateX(20px);
    }

    100% {
        transform: translateY(-400px) scale(3) translateX(-20px);
        opacity: 0;
    }
}
</style>