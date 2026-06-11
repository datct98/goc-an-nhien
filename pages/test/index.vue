<template>
    <div class="wrapper">
        <h1>Demo Hiệu Ứng Chạy Ảnh Liên Tục</h1>

        <ImgAnimation :images="myImages" :width="300" :height="300" :interval="200" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

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
}
</style>