<template>
    <div class="w-full flex justify-center absolute">
        <div class="progressbar">
            <div class="progressbar-full-fill" :style="{ width: `${clampedPercent}%` }"></div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    percent: {
        type: Number,
        default: 0,
        validator: (value) => value >= 0 && value <= 100
    }
})

// Đảm bảo giá trị luôn nằm trong khoảng 0 đến 100
const clampedPercent = computed(() => {
    return Math.min(80, Math.max(0, props.percent))
})
</script>

<style scoped>
.progressbar {
    background-image: url('/layout/progressbar.png');
    background-size: cover;
    background-repeat: no-repeat;
    width: 80%;
    height: 80px;
}

.progressbar-full-fill {
    position: relative;
    top: 50%;
    left: 10%;
    /* Bỏ width cố định để nhận dynamic width từ style binding */
    height: 13px;
    background-color: burlywood;
    background-image: url('/layout/progress.PNG');
    background-size: cover;
    /* Chuyển sang cover để ảnh thanh fill trải đều theo chiều rộng */
    background-repeat: no-repeat;
    border-radius: 25px;
    transition: width 0.3s ease;
    /* Thêm hiệu ứng chuyển động mượt mà khi đổi giá trị */
}
</style>