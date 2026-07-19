<template>
    <div class="wrapper">
        <TarotCard />
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
</style>