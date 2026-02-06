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
import Bubble from '~/components/effects/Bubble.vue';

const loginWithGoogle = () => {
    alert('login with google');
}
</script>

<style scoped src="./index.css"></style>