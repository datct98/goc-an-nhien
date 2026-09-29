<template>
    <div class="wrapper">

        <!-- <SpriteAnimation src="/sprites/spriteSheetLogin.png" :frame-width="260" :frame-height="250" :frames="12" :fps="12" /> -->
        <SpriteAnimation src="/sprites/spriteSheet2.png" :frame-width="350" :frame-height="346" :frames="6" :fps="3" />

    </div>
</template>

<script setup>
import { ref } from 'vue'
import TarotCard from '~/components/tarot/TarotCard.vue'
import SpriteAnimation from '~/components/anim/SpriteAnimation.vue'

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
    background-image: url('/public/bg/bgLogin.png');
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