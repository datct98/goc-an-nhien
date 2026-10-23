<template>
    <div class="wrapper">
        <div class="row w-full justify-center gap-4 mt-4">
            <Deck :list="tarotCards" :status="status" :num-lay="5" />
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

const tarotCards = ref([
    { id: 1, head: 'I', imgSrc: '/tarot/card1.png', footer: 'The Magician' },
    { id: 2, head: 'II', imgSrc: '/tarot/card2.png', footer: 'The High Priestess' },
    { id: 3, head: 'III', imgSrc: '/tarot/card3.png', footer: 'The Empress' },
    { id: 4, head: 'IV', imgSrc: '/tarot/card4.png', footer: 'The Emperor' },
    { id: 5, head: 'V', imgSrc: '/tarot/card5.png', footer: 'The Hierophant' },
    { id: 6, head: 'VI', imgSrc: '/tarot/card6.png', footer: 'The Lovers' },
    { id: 7, head: 'VII', imgSrc: '/tarot/card7.png', footer: 'The Chariot' },
    { id: 8, head: 'VIII', imgSrc: '/tarot/card8.png', footer: 'Strength' },
    { id: 9, head: 'IX', imgSrc: '/tarot/card9.png', footer: 'The Hermit' },
    { id: 10, head: 'X', imgSrc: '/tarot/card10.png', footer: 'Wheel of Fortune' }
]);

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