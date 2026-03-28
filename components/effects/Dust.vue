<template>
    <div class="container">
        <div class="dust">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<style scoped>
.container {
    margin: 0;
    overflow: hidden;
    background: #0f172a;
    /* nền tối cho nổi */
}

.dust span {
    position: absolute;
    top: -10%;
    /* Hạt bụi nên có kích thước ngẫu nhiên và nhỏ hơn */
    width: 5px;
    height: 5px;
    background: rgba(231, 201, 146, 1);
    /* Thêm độ trong suốt cho màu gốc */
    border-radius: 50%;
    /* Hiệu ứng tỏa sáng nhẹ và làm nhòe cạnh để trông thật hơn */
    box-shadow: 0 0 8px 2px rgba(231, 201, 146, 0.4);
    filter: blur(1px);
    animation: fall linear infinite;
    pointer-events: none;
}

/* Random vị trí – tốc độ – kích thước */
.dust span:nth-child(1) {
    left: 10%;
    animation-duration: 10s;
    transform: scale(1);
}

.dust span:nth-child(2) {
    left: 25%;
    animation-duration: 12s;
    transform: scale(0.8);
}

.dust span:nth-child(3) {
    left: 40%;
    animation-duration: 9s;
    transform: scale(1.2);
}

.dust span:nth-child(4) {
    left: 60%;
    animation-duration: 14s;
    transform: scale(0.9);
}

.dust span:nth-child(5) {
    left: 75%;
    animation-duration: 11s;
    transform: scale(1.1);
}

.sakura span:nth-child(6) {
    left: 90%;
    animation-duration: 13s;
    transform: scale(0.7);
}

@keyframes fall {
    0% {
        transform: translateX(0) rotate(0deg);
    }

    50% {
        transform: translateX(40px) rotate(180deg);
    }

    100% {
        top: 110%;
        transform: translateX(-40px) rotate(360deg);
    }
}
</style>