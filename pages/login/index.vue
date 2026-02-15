<template>
    <div class="login-container">
        <div class="google">
            <Bubble @click="loginWithGoogle">
                <Image src="/logo/gg.png" alt="google" width="50" />
            </Bubble>
        </div>
        <div class="login-board">
            <InputComponent />
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Bubble from '~/components/effects/Bubble.vue';
import { authService } from '~/services/authService';

const router = useRouter();
const route = useRoute();

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const REDIRECT_URI = window.location.origin + '/login/';

// Check for Google OAuth callback on mount
onMounted(async () => {
    // Check if this is a callback from Google (hash contains id_token or access_token)
    const hash = window.location.hash;
    if (hash && hash.includes('id_token=')) {
        await handleGoogleCallback(hash);
    }
    
    // Also check for credential in URL params (for some OAuth flows)
    const params = new URLSearchParams(window.location.search);
    const credential = params.get('credential');
    if (credential) {
        await handleCredential(credential);
    }
});

const handleGoogleCallback = async (hash) => {
    try {
        // Parse the hash to get id_token
        const params = new URLSearchParams(hash.substring(1));
        const idToken = params.get('id_token');
        
        if (idToken) {
            await handleCredential(idToken);
        }
    } catch (error) {
        console.error('Failed to parse Google callback:', error);
    }
};

const handleCredential = async (idToken) => {
    try {
        console.log('Sending ID token to backend...');
        const token = await authService.loginWithGoogle(idToken);
        
        // Store JWT token
        localStorage.setItem('token', token);
        
        // Clear the hash/params from URL
        window.history.replaceState({}, document.title, '/login/');
        
        // Show success and redirect
        alert('Đăng nhập thành công!');
        router.push('/home');
    } catch (error) {
        console.error('Google login failed:', error);
        alert('Đăng nhập Google thất bại: ' + (error.message || 'Lỗi không xác định'));
    }
};

const loginWithGoogle = () => {
    // Build Google OAuth URL for implicit flow (returns id_token directly)
    const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
    authUrl.searchParams.set('client_id', GOOGLE_CLIENT_ID);
    authUrl.searchParams.set('redirect_uri', REDIRECT_URI);
    authUrl.searchParams.set('response_type', 'id_token');
    authUrl.searchParams.set('scope', 'openid email profile');
    authUrl.searchParams.set('nonce', generateNonce());
    authUrl.searchParams.set('prompt', 'select_account');
    
    // Redirect to Google OAuth
    window.location.href = authUrl.toString();
};

// Generate a random nonce for security
const generateNonce = () => {
    const array = new Uint32Array(4);
    crypto.getRandomValues(array);
    return Array.from(array, x => x.toString(16)).join('');
};
</script>

<style scoped src="./index.css"></style>