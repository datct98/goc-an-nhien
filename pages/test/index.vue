<template>
    <div class="wrapper">
        <div class="row w-full justify-center gap-4 mt-4">
            <Deck :num="78" :status="status" />
        </div>
        <div class="row w-full flex flex-row justify-center gap-4 mt-4">
            <div @click="updateStatus('idle')">Update Status Idle</div>
            <div @click="updateStatus('shuffle')">Update Status Shuffle</div>
            <div @click="updateStatus('lay')">Update Status lay</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import TarotCard from '~/components/tarot/TarotCard.vue'
import SpriteAnimation from '~/components/anim/SpriteAnimation.vue'
import Deck from '~/components/tarot/Deck.vue';

const { isLoading, showLoading, hideLoading } = useLoading();

// showLoading();
hideLoading();

const status = ref('idle');
const updateStatus = (newStatus) => {
    status.value = newStatus;
    console.log('Status updated to:', newStatus);
}

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
    flex-direction: column;
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