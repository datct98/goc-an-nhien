<template>
    <div class="login-container">
        <ParallaxScrolling :image-src="[
            '/anim/bg2/part_1.png',
            '/anim/bg2/part_2.png',
            '/anim/bg2/part_3.png',
        ]" :speed="50" :horizon="1">
            <p class="labelText">Góc An Nhiên</p>
            <div style="width: 100%; height: 50px;"></div>
            <div class="main-object">
                <Image src="/webp/nhasucuoico.webp" alt="main" />
            </div>
            <div style="width: 100%; height: 50px;"></div>
            <Bounce
                image-src="/decor/mo/mo1.png"
                sub-text="Gõ mõ để sang thế giới bí ẩn"
                :width="150"
                @click="handleMoClick"
            />
            <div style="width: 100%; height: 100px;"></div>
            <audio ref="audioRef" src="/audio/goMo.m4a"></audio>
        </ParallaxScrolling>
    </div>
</template>

<script setup>

definePageMeta({
    layout: "login_layout"
})

import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import ParallaxScrolling from '~/components/anim/ParallaxScrolling.vue';
import Bounce from '~/components/effects/Bounce.vue';

const router = useRouter();
const route = useRoute();

const { $common } = useNuxtApp();

const audioRef = ref(null);
const isNavigatingHome = ref(false);

const handleMoClick = async () => {
    if (isNavigatingHome.value) return;
    isNavigatingHome.value = true;

    // $common.showSuccess('Mõ đã vang lên!');
    const audio = audioRef.value;

    if (!audio) {
        return router.push('/home');
    }

    audio.currentTime = 0;
    const goHome = () => {
        router.push('/home');
    };

    audio.addEventListener('ended', goHome, { once: true });

    try {
        await audio.play();
    } catch {
        audio.removeEventListener('ended', goHome);
        goHome();
    }
};

const REDIRECT_URI = window.location.origin + '/login/';

const config = useRuntimeConfig()
const GOOGLE_CLIENT_ID = config.public.googleClientId;

const loginBackground = ref('/login/login_v2.png');
const loginBoard = ref('login-board');

// Check for Google OAuth callback on mount
onMounted(async () => {
});
</script>

<style scoped src="./index.css"></style>
