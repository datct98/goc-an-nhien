<template>
    <div class="gm-room">

        <!-- Clickcount -->
        <div class="clickCount" v-if="clickCount > 0">
            <span> X{{ clickCount }}</span>
        </div>

        <!-- Điểm số tích công đức giải nghiệp -->
        <div class="p-4" style="position: absolute; right: 0px;">
            <CircleSymbol icon="heart-fill" text="Công đức" :score="stats.merit" />

            <CircleSymbol icon="sparkles" text="Tâm tịnh" :score="stats.peace" />

            <CircleSymbol icon="star-fill" text="Nghiệp tiêu" :score="stats.karma" />
        </div>

        <!-- LƯ HƯƠNG + KHÓI — positioned on the shelf area -->
        <div class="gm-incense-area">
            <div class="gm-smoke-wrap">
                <SmokeUp />
            </div>
            <div class="gm-bat-huong">
                <Image src="decor/bat-huong-mobile.png" alt="lư hương" />
            </div>
        </div>

        <!-- MÕ — on the table surface -->
        <div class="gm-mo" id="caiMoMobile" @click="goMo()">
            <Image src="decor/cai_mo_mobile.png" alt="cái mõ" />
        </div>

        <!-- Xin thí chủ hãy tịnh tâm -->
        <div class="suQuyLay-container" v-if="isSpamming">
            <div class="suQuyLay">
                <Image src="mobile/gomo/nhaSuDapDau.png"></Image>
            </div>
            <div class="talkBox">
                <span>Xin thí chủ hãy tịnh tâm !</span>
            </div>
        </div>

        

        <!-- STATS NUMBERS — positioned after label text in bg -->
        <!-- <div class="gm-stats-overlay">
            <div class="gm-num gm-merit">{{ stats.merit }}</div>
            <div class="gm-num gm-peace">{{ stats.peace }}%</div>
            <div class="gm-num gm-karma">+{{ stats.karma }}</div>
            <div class="gm-num gm-total">{{ stats.totalClicks.toLocaleString() }}</div>
        </div> -->

        <audio ref="audioRef" src="/audio/goMo.m4a"></audio>

        <div class="gm-floats">
            <FloatingText v-for="text in floatingTexts" :key="text.id" :text="text.text" :x="text.x" :y="text.y"
                :is-meme="text.isMeme" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import memeTexts from '~/constants/memeTexts.json';
import regularTexts from '~/constants/regularTexts.json';
import SmokeUp from '~/components/effects/SmokeUp.vue';
import CircleSymbol from './CircleSymbol.vue';

const { stats, incrementMerit, incrementPeace, incrementKarma, bigGo } = useGameStats();

const audioRef = ref(null);
const floatingTexts = ref([]);
let fid = 0;


const clickCount = ref(0);
const lastClickTime = ref(0);
const isSpamming = ref(false);
let resetTimer = null; // Biến lưu trữ bộ đếm thời gian

const goMo = () => {

    // Nếu đang hiện cảnh báo thì không cho gõ
    if (isSpamming.value) return;

    const now = Date.now();
    
    // Nếu khoảng cách giữa 2 lần gõ quá ngắn (dưới 300ms)
    if (now - lastClickTime.value < 300) {
        clickCount.value++;
    } else {
        // Nếu gõ chậm lại, reset bộ đếm dần dần hoặc về 0
        clickCount.value = Math.max(0, clickCount.value - 1);
    }
    lastClickTime.value = now;

    // Thiết lập bộ đếm mới: Nếu sau 5 giây không gọi lại hàm goMo, clickCount = 0
    resetTimer = setTimeout(() => {
        clickCount.value = 0;
        console.log("Đã reset clickCount do thí chủ quá lâu không gõ.");
    }, 5000); // 5000ms = 5 giây (bạn có thể chỉnh tùy ý)

    // Ngưỡng cảnh báo: ví dụ gõ liên tục quá 10 lần cực nhanh
    if (clickCount.value > 10) {
        showWarning();
        return; // Dừng không cho gõ tiếp
    }

    createFloatingText(); // tạo ra chữ nổi trên màn hình
    // Phát âm thanh
    if (audioRef.value) {
        audioRef.value.currentTime = 0;
        audioRef.value.play();
    }
    // Hiệu ứng động cho cái mõ
    const el = document.getElementById('caiMoMobile');
    if (el) {
        el.classList.add('shake');
        setTimeout(() => el.classList.remove('shake'), 300);
    }
};

const showWarning = () => {
    isSpamming.value = true;
    if (resetTimer) clearTimeout(resetTimer); // Dừng luôn bộ reset khi đang phạt
    // Tự động đóng cảnh báo sau 3 giây và reset bộ đếm
    setTimeout(() => {
        isSpamming.value = false;
        clickCount.value = 0;
    }, 3000);
};

const createFloatingText = () => {
    const isMeme = Math.random() < 0.05;
    const arr = isMeme ? memeTexts : regularTexts;
    const idx = Math.floor(Math.random() * arr.length);
    const text = arr[idx];
    const x = window.innerWidth / 2;
    const y = window.innerHeight * 0.3;

    if (!isMeme) {
        if (idx === 0) incrementMerit();
        else if (idx === 1) incrementPeace();
        else if (idx === 2) incrementKarma();
    } else bigGo();

    const t = { id: fid++, text, x, y, isMeme };
    floatingTexts.value.push(t);
    setTimeout(() => {
        const i = floatingTexts.value.findIndex(v => v.id === t.id);
        if (i > -1) floatingTexts.value.splice(i, 1);
    }, 1400);
};
</script>

<style scoped src="./GoMoMobile.css"></style>
