<template>
    <!-- MOBILE layout -->
    <GoMoMobile v-if="isMobileView" />

    <!-- DESKTOP layout (original) -->
    <div v-else class="container-goMo" id="container" ref="containerRef" :style="{ backgroundImage: `url(${bg})` }">
        <div class="bang">
            <p style="width: 280px; word-wrap: break-word; font-size: 14px; color: #73462d;">
                - Click vào cái <b>gậy</b> và nhấn vào <b>chiếc mõ</b> hoặc nhấn <b>phím space</b> để tụng kinh <br>
                - Mỗi lần tụng kinh sẽ được cộng điểm, giải nghiệp và xua tan đi ưu phiền
            </p>
        </div>
        <div class="tuongPhat">
            <Image src="tuong/duc_phat.png" alt="phat" width="300" />
        </div>
        <div class="caynen left">
            <Image src="decor/nen.png" alt="caynen" width="50" />
        </div>
        <div class="caynen right">
            <Image src="decor/nen.png" alt="caynen" width="50" />
        </div>
        <div class="caiBan">
            <Image src="decor/table.png" alt="cai_ban" width="600" />
        </div>
        <div class="caiMo" id="caiMo" @click="goMo()">
            <Image src="decor/cai_mo.png" alt="cai_mo" width="150" />
        </div>
        <div class="pillow">
            <Image src="decor/goi.png" alt="pillow" width="350" />
        </div>
        <div class="bathuong">
            <SmokeUp />
            <Image src="decor/bat_huong_2.png" alt="bathuong" width="80" />
        </div>
        <div class="gayGoMo" ref="gayGoMoRef" @click="camGayGoMo()">
            <Image src="decor/gay_go_mo.png " alt="gay_go_mo" width="100" />
        </div>
        <div class="khayDungGay" ref="khayDungGayRef" @click="camGayGoMo()">
            <Image src="decor/khay.png" alt="khay_dung_gay" width="150" />
        </div>
        <div class="banCongDuc">
            <Image src="ban_tho/ban_cong_duc.png" alt="ban_cong_duc" width="350" />
            <div class="congDucText">Công đức <br> {{ stats.merit }}</div>
            <div class="tamTinhText">Tâm tịnh <br> {{ stats.peace }}</div>
            <div class="nghiepTieuText">Nghiệp tiêu <br> {{ stats.karma }}</div>
            <div class="soLanText">Tổng số <br> {{ stats.totalClicks }}</div>
        </div>
        <audio ref="audioRef" src="/audio/goMo.m4a"></audio>

        <!-- Floating Texts -->
        <div class="floating-texts-container">
            <FloatingText v-for="text in floatingTexts" :key="text.id" :text="text.text" :x="text.x" :y="text.y"
                :is-meme="text.isMeme" />
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import memeTexts from '~/constants/memeTexts.json';
import regularTexts from '~/constants/regularTexts.json';
import bg from '../../assets/bg.png';
import SmokeUp from '~/components/effects/SmokeUp.vue';
import GoMoMobile from '~/components/GoMoMobile.vue';

const { stats, incrementMerit, incrementPeace, incrementKarma, bigGo, level, rateLimitMessage } = useGameStats();

// ========== MOBILE DETECTION ==========
const windowWidth = ref(800);

const checkWidth = () => {
    windowWidth.value = window.innerWidth;
};

const isMobileView = computed(() => {
    return windowWidth.value <= 768;
});

onMounted(() => {
    // Set initial width immediately
    windowWidth.value = window.innerWidth;
    window.addEventListener('resize', checkWidth);
    // Also listen for keydown only on desktop
    if (window.innerWidth > 768) {
        window.addEventListener('keydown', handleKeydown);
    }
});

onUnmounted(() => {
    window.removeEventListener('resize', checkWidth);
    window.removeEventListener('keydown', handleKeydown);
});

// ========== DESKTOP LOGIC ==========
const sidebarOpen = ref(false);
const audioRef = ref(null);
const containerRef = ref(null);
const gayGoMoRef = ref(null);
const khayDungGayRef = ref(null);
const floatingTexts = ref([]);
let floatingTextId = 0;
let isTeng = 0;

const handleKeydown = (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        moRungDong();
    }
}

var isClicking = false;
var isCamGay = false;
const goMo = () => {
    if (isCamGay) {
        moRungDong();
    }
}

const moRungDong = () => {
    createFloatingText();
    isTeng++

    audioRef.value.currentTime = 0
    audioRef.value.play();

    const object = document.getElementById('caiMo');
    object.classList.add('shake');
    setTimeout(() => {
        object.classList.remove('shake');
    }, 300);
}

const createFloatingText = () => {
    const isMeme = Math.random() < 0.05
    const textArray = isMeme ? memeTexts : regularTexts;
    const textId = Math.floor(Math.random() * textArray.length);
    const text = textArray[textId]

    const x = window.innerWidth / 2
    const y = window.innerHeight / 2

    if (!isMeme) {
        if (textId == 0) {
            incrementMerit();
        } else if (textId == 1) {
            incrementPeace();
        } else if (textId == 2) {
            incrementKarma();
        }
    } else {
        bigGo();
    }

    const newText = {
        id: floatingTextId++,
        text,
        x,
        y,
        isMeme
    }

    floatingTexts.value.push(newText)

    setTimeout(() => {
        const index = floatingTexts.value.findIndex(t => t.id === newText.id)
        if (index > -1) {
            floatingTexts.value.splice(index, 1)
        }
    }, 1400)
}

const camGayGoMo = () => {
    isCamGay = !isCamGay;
    if (isCamGay) {
        containerRef.value.classList.add('camGayGoMo');
        gayGoMoRef.value.classList.add('hidden');
    } else {
        containerRef.value.classList.remove('camGayGoMo');
        gayGoMoRef.value.classList.remove('hidden');
    }
}
</script>

<style scoped src="./index.css"></style>