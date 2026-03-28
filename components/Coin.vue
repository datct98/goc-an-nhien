<template>
    <div class="coin-stage">
        <div class="coin-renderer" :class="{ 'flipping': isFlipping }" :style="coinStyle">
            <div class="coin-front">
                <Image :src="headPng" alt="Mặt trước" />
            </div>
            <div class="coin-back">
                <Image :src="tailPng" alt="Mặt sau" />
            </div>
        </div>
    </div>
</template>


<script setup>
import headPng from '../assets/coin/head.png';
import tailPng from '../assets/coin/tails.png';


const isFlipping = ref(false);
const result = ref('front');
const rotationY = ref(0);
const rotationX = ref(0); // Thêm xoay trục X để nhìn thật hơn

const tossCoin = () => {
    if (isFlipping.value) return;
    isFlipping.value = true;
    // 1. Random kết quả
    const isFront = Math.random() > 0.5;
    result.value = isFront ? 'front' : 'back';
    if (isFront) {
        rotationY.value = 360;
        rotationX.value = 0;
    } else {
        rotationY.value = 180;
        rotationX.value = 0;
    }
    setTimeout(() => {
        isFlipping.value = false;
    }, 2500);
};

const coinStyle = computed(() => ({
    // Kết hợp xoay cả 2 trục Y và X
    transform: `rotateY(${rotationY.value}deg) rotateX(${rotationX.value}deg)`,
    transition: isFlipping.value ? 'transform 2.5s cubic-bezier(0.1, 0.7, 0.3, 1)' : 'none'
}));

// Mở cửa cho page cha truy cập
defineExpose({
    tossCoin
});
</script>


<style scoped>
.coin-stage {
    width: 100%;
    perspective: 3000px;
}

.coin-renderer {
    width: 150px;
    height: 150px;
    position: relative;
    transform-style: preserve-3d;
    /* Mặc định nằm yên */
    transform: translateZ(0);
}

/* Hiệu ứng bay về phía trước (Trục Z) */
.coin-renderer.flipping {
    /* Dùng animation để điều khiển Z-axis */
    animation: fly-forward 2.5s forwards;
}

.coin-front,
.coin-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    /* border-radius: 50%; */
    /* overflow: hidden; */
    /* Thêm hiệu ứng viền kim loại cho đẹp */
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(0, 0, 0, 0.3);
}

.coin-front {
    z-index: 2;
    transform: rotateY(0deg);
}

.coin-back {
    transform: rotateY(180deg);
}

.coin-front img,
.coin-back img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Animation cho Trục Z */
@keyframes fly-forward {
    0% {
        /* Bắt đầu ở vị trí bình thường và không xoay */
        transform: translateZ(0) rotateX(0deg) rotateY(0deg);
        opacity: 0;
        /* Có thể thêm fade-in cho đẹp */
    }

    40% {
        /* Bay ĐẾN CỰC GẦN người xem và XOAY CỰC NHANH */
        /* Chú ý: Giữ nguyên translateZ như bạn đã xử lý được */
        transform: translateZ(800px) rotateX(360deg) rotateY(720deg);
        /* rotateX(360deg): lộn vòng 1 lần */
        /* rotateY(720deg): lật 2 lần nhanh chóng */
        opacity: 1;
        /* Hiển thị rõ */
    }

    /* Thêm một step trung gian để làm mượt chuyển động xoay và rơi */
    60% {
        /* Vẫn ở gần nhưng đã rơi nhẹ và XOAY CHẬM LẠI */
        transform: translateZ(600px) rotateX(450deg) rotateY(900deg);
        /* 450 = 360 + 90, xoay thêm 90 độ */
        /* 900 = 720 + 180, xoay thêm 180 độ */
        opacity: 1;
    }

    100% {
        /* Rơi về vị trí kết thúc và DỪNG XOAY ở mặt kết quả */
        /* transform ban đầu của vật thể lật mặt sẽ xác định sấp/ngửa */
        transform: translateZ(0) rotateX(0deg) rotateY(0deg);
        /* Nếu dùng logic JS để random sấp ngửa bằng độ xoay cuối, 
           bạn hãy đặt rotateY kết thúc là 0deg hoặc 180deg */
        opacity: 0;
        /* Fade-out khi rơi về? Tùy ý bạn. */
    }
}
</style>