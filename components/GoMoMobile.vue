<template>
    <div class="gm-room">
        <!-- MÕ — on the table surface -->
        <div class="gm-mo" id="caiMoMobile" @click="goMo()">
            <Image src="decor/cai_mo.png" alt="cái mõ" />
        </div>

        <!-- STATS NUMBERS — positioned after label text in bg -->
        <div class="gm-stats-overlay">
            <div class="gm-num gm-merit">{{ stats.merit }}</div>
            <div class="gm-num gm-peace">{{ stats.peace }}%</div>
            <div class="gm-num gm-karma">+{{ stats.karma }}</div>
            <div class="gm-num gm-total">{{ stats.totalClicks.toLocaleString() }}</div>
        </div>

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

const { stats, incrementMerit, incrementPeace, incrementKarma, bigGo } = useGameStats();

const audioRef = ref(null);
const floatingTexts = ref([]);
let fid = 0;

const goMo = () => {
    createFloatingText();
    if (audioRef.value) {
        audioRef.value.currentTime = 0;
        audioRef.value.play();
    }
    const el = document.getElementById('caiMoMobile');
    if (el) {
        el.classList.add('shake');
        setTimeout(() => el.classList.remove('shake'), 300);
    }
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
