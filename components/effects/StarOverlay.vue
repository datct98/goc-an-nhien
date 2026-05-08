<template>
    <div class="stars-container">
        <div v-for="n in starCount" :key="n" class="star" :style="generateStarStyle()"></div>

        <!-- Các ngôi sao băng -->
        <div v-for="n in shootingStarCount" :key="'shooting-' + n" class="shooting-star" :style="generateShootingStarStyle()"></div>
    </div>
</template>

<script setup>
// Bạn có thể tùy chỉnh số lượng hạt tùy theo hiệu năng mong muốn
const starCount = 150;
const shootingStarCount = 10; // Số lượng vệt sao băng xuất hiện trong một chu kỳ

// Style cho sao băng
const generateShootingStarStyle = () => {
    const top = Math.random() * 50; // Xuất hiện ở nửa trên màn hình
    const left = Math.random() * 80 + 20; // Xuất hiện lệch phải để bay sang trái
    const duration = Math.random() * 3 + 4; // Tốc độ bay
    const delay = Math.random() * 10; // Thời gian chờ ngẫu nhiên để không rơi cùng lúc

    return {
        top: `${top}%`,
        left: `${left}%`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`
    };
};

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

/* Sao tĩnh */
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

/* Sao băng */
.shooting-star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: linear-gradient(-45deg, #fff, rgba(0, 0, 255, 0));
    border-radius: 999px;
    filter: drop-shadow(0 0 6px #fff);
    animation: shoot infinite linear;
    opacity: 0;
}

/* Hiệu ứng vệt sáng bằng giả lập pseudo-element */
.shooting-star::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100px; /* Độ dài vệt sáng */
    height: 1px;
    background: linear-gradient(90deg, #fff, transparent);
}

@keyframes shoot {
    0% {
        transform: rotate(-45deg) translateX(0);
        opacity: 1;
    }
    20% {
        transform: rotate(-45deg) translateX(-500px);
        opacity: 0;
    }
    100% {
        transform: rotate(-45deg) translateX(-500px);
        opacity: 0;
    }
}
</style>