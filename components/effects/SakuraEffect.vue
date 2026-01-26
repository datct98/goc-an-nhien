<template>
    <div class="container">
        <div class="sakura">
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

.sakura span {
    position: absolute;
    top: -10%;
    width: 14px;
    height: 14px;
    background: pink;
    border-radius: 0 70% 70% 70%;
    opacity: 0.8;
    animation: fall linear infinite;
}

/* Random vị trí – tốc độ – kích thước */
.sakura span:nth-child(1) {
    left: 10%;
    animation-duration: 10s;
    transform: scale(1);
}

.sakura span:nth-child(2) {
    left: 25%;
    animation-duration: 12s;
    transform: scale(0.8);
}

.sakura span:nth-child(3) {
    left: 40%;
    animation-duration: 9s;
    transform: scale(1.2);
}

.sakura span:nth-child(4) {
    left: 60%;
    animation-duration: 14s;
    transform: scale(0.9);
}

.sakura span:nth-child(5) {
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