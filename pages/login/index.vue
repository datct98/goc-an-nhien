<template>
    <ContainerWithBackground src="/layout/loading.webp" aria-label="Quần đảo Góc An Nhiên" background-size="cover"
        :offset-top="0">
        <div class="w-full pt-16">
            <p class="labelText">Góc An Nhiên</p>
        </div>
        <div class="mainLoading">
            <Image src="/layout/loadingNhaSu.png" width="200" />
        </div>
    </ContainerWithBackground>
</template>

<script setup>

definePageMeta({
    layout: "login_layout"
})

import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import ParallaxScrolling from '~/components/anim/ParallaxScrolling.vue';
import Bounce from '~/components/effects/Bounce.vue';
import ContainerWithBackground from '~/components/layout/ContainerWithBackground.vue';

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
