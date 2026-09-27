<template>
    <div class="login-container">
        
    </div>
</template>

<script setup>

definePageMeta({
    layout: "login_layout"
})

import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Bubble from '~/components/effects/Bubble.vue';
import { authService } from '~/services/authService';
import InputComponent from '~/components/common/InputComponent.vue';
import ImgAnimation from '~/components/anim/ImgAnimation.vue';

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