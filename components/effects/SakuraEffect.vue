<template>
    <div class="container" :class="`mode-${mode}`">
        <div :class="mode">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    mode: {
        type: String,
        default: 'sakura',
        validator: (value) => ['sakura', 'snow'].includes(value),
    },
});
</script>

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
    z-index: 99;
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

.snow span {
    position: absolute;
    top: -10%;
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
    opacity: 0.85;
    animation: snow-fall linear infinite;
    z-index: 99;
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.7);
}

.snow span:nth-child(1) {
    left: 10%;
    width: 5px;
    height: 5px;
    animation-duration: 9s;
}

.snow span:nth-child(2) {
    left: 25%;
    width: 8px;
    height: 8px;
    animation-duration: 12s;
}

.snow span:nth-child(3) {
    left: 40%;
    width: 6px;
    height: 6px;
    animation-duration: 10s;
}

.snow span:nth-child(4) {
    left: 60%;
    width: 10px;
    height: 10px;
    animation-duration: 14s;
}

.snow span:nth-child(5) {
    left: 75%;
    width: 7px;
    height: 7px;
    animation-duration: 11s;
}

.snow span:nth-child(6) {
    left: 90%;
    width: 5px;
    height: 5px;
    animation-duration: 13s;
}

@keyframes snow-fall {
    0% {
        top: -10%;
        transform: translateX(0);
    }

    50% {
        transform: translateX(24px);
    }

    100% {
        top: 110%;
        transform: translateX(-24px);
    }
}
</style>
