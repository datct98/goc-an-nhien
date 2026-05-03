<template>
    <div class="stars-overlay"></div>
</template>

<style scoped>
/* Lớp tạo sao: Không ảnh hưởng đến chữ */
.stars-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* Tạo hạt sao bằng radial-gradient lặp lại */
    background-image:
        radial-gradient(1px 1px at 20px 30px, #fff, rgba(0, 0, 0, 0)),
        radial-gradient(1px 1px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
        radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0, 0, 0, 0)),
        radial-gradient(1px 1px at 90px 40px, #fff, rgba(0, 0, 0, 0));
    background-size: 200px 200px;
    /* Độ phủ của các cụm sao */
    opacity: 0.4;
    animation: twinkle 5s ease-in-out infinite;
    pointer-events: none;
    /* Quan trọng: Để không cản trở click vào content */
    z-index: 1;
}

/* Hiệu ứng lấp lánh (mờ dần rồi lại sáng) */
@keyframes twinkle {

    0%,
    100% {
        opacity: 0.3;
        transform: scale(1);
    }

    50% {
        opacity: 0.6;
        transform: scale(1.05);
    }
}
</style>