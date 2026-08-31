<template>
    <div class="circle" ref="boxRef" :class="{ 'scaleInOut': isAnimate }">
        <div class="icon">
            <i :class="`pi pi-${icon}`"></i>
        </div>
        <div class="text">
            {{ text }}
        </div>
        <div class="score">
            {{ score }}
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const boxRef = ref(null);
const isAnimate = ref(false)

const props = defineProps({
    icon: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
});

const doBounce = () => {
    isAnimate.value = true;
    setTimeout(() => {
        isAnimate.value = false
    }, 300)
}

// Theo dõi sự thay đổi của props.score
watch(
    () => props.score,
    (newValue, oldValue) => {
        console.log(`Score đã thay đổi từ ${oldValue} thành ${newValue}`);
        doBounce();
    }
);

</script>

<style scoped>
.circle {
    background: linear-gradient(to bottom, rgb(245 90 6 / 50%), rgb(59 54 50 / 30%));
    border-radius: 50%;
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffd46b;
    text-shadow:
        0 0 10px rgba(255, 210, 100, 0.9),
        0 0 30px rgba(255, 210, 100, 0.4);
}

.text {
    font-family: Inter, ui-sans-serif;
    font-size: 12px;
}

.scaleInOut {
    animation-name: scaleInOut;
    /* animation-duration: Thời gian hoàn thành 1 chu kỳ (ví dụ 1 giây) */
    animation-duration: 0.3s;
    /* animation-timing-function: Chạy đều (linear) theo yêu cầu */
    animation-timing-function: linear;
    /* animation-iteration-count: Số lần lặp (infinite = vô hạn) */
    animation-iteration-count: 1;
}

@keyframes scaleInOut {
    0% {
        /* Bắt đầu ở kích thước gốc */
        transform: scale(1);
    }

    50% {
        /* Phóng to lên 1.1 ở giữa chu kỳ */
        transform: scale(1.1);
    }

    100% {
        /* Quay về kích thước 1 ở cuối chu kỳ */
        transform: scale(1);
    }
}
</style>