<template>
    <div class="login-container" :style="{ backgroundImage: `url(${loginBackground})` }">
        <div class="login-board">
            <RegisterComponent />
        </div>
    </div>
</template>

<script setup>

definePageMeta({
    layout: "login_layout"
})

import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import RegisterComponent from '~/components/RegisterComponent.vue';
import { authService } from '~/services/authService';

const router = useRouter();
const route = useRoute();

const { $common } = useNuxtApp();

const REDIRECT_URI = window.location.origin + '/login/';

const config = useRuntimeConfig()
const GOOGLE_CLIENT_ID = config.public.googleClientId;

const loginBackground = ref('/login/login_v2.png');

const updateBackground = () => {
    const now = new Date();
    const vnTime = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Ho_Chi_Minh',
        hour: 'numeric',
        hour12: false,
    });
    const currentHour = parseInt(vnTime.format(now));
    if (currentHour >= 6 && currentHour < 20) {
        loginBackground.value = '/login/regis.png';
    } else {
        loginBackground.value = '/login/regis_night.png';
    }
};

// Check for Google OAuth callback on mount
onMounted(async () => {
    updateBackground();

    // check show warning
    if (route.query.isWarning) {
        $common.showWarning('🔒 Chưa đăng nhập, chuyển hướng về /login');
    }

});

</script>

<style scoped src="./index.css"></style>