<template>
    <div class="stars-container">
        <div v-for="n in starCount" :key="n" class="star" :style="generateStarStyle()"></div>
    </div>
</template>

<script setup>
// Bạn có thể tùy chỉnh số lượng hạt tùy theo hiệu năng mong muốn
const starCount = 150;

const generateStarStyle = () => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.random() * 2 + 1;
    const duration = Math.random() * 3 + 2; // Thời gian nhấp nháy 2s - 5s
    const delay = Math.random() * 5;

    return {
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`
    };
};
</script>

<style scoped>
.stars-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: transparent;
    pointer-events: none;
    z-index: 0;
}

.star {
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    opacity: 0.7;
    animation: twinkle infinite ease-in-out;
}

@keyframes twinkle {

    0%,
    100% {
        opacity: 0.3;
        transform: scale(1);
    }

    50% {
        opacity: 1;
        transform: scale(1.2);
    }
}
</style>