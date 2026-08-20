<template>
    <div class="wrapper">
        <div class="character"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import TarotCard from '~/components/tarot/TarotCard.vue'

// Khai báo danh sách đường dẫn ảnh của bạn
// Lưu ý: Nếu để trong thư mục public, bạn có thể viết đường dẫn trực tiếp từ "/"
const myImages = ref([
    '/home/anim/gomo/image_1.jpg',
    '/home/anim/gomo/image_2.jpg',
    '/home/anim/gomo/image_3.jpg',
    '/home/anim/gomo/image_4.jpg',
])
</script>

<style scoped>
.wrapper {
    padding: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.character {
    width: 785px;
    height: 1418px;

    background-image: url('/public/anim/nhaSuAnimation.png');
    background-repeat: no-repeat;

    animation: idle 5s steps(4) infinite;
}

@keyframes idle {
    from {
        background-position: 0 0;
    }

    to {
        background-position: -3137px 0;
    }
}
</style>