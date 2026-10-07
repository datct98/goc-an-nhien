<template>
    <div class="login-container">
        <ParallaxScrolling :image-src="[
            '/anim/bg2/part_1.png',
            '/anim/bg2/part_2.png',
            '/anim/bg2/part_3.png',
        ]" :speed="50" :horizon="0">
            <div class="main-object">
                <Image src="/webp/nhasucuoico.webp" alt="main" />
            </div>
            <p class="labelText">Góc An Nhiên</p>
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

const router = useRouter();
const route = useRoute();

const { $common } = useNuxtApp();

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