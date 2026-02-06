<template>
    <div class="background">
        <Bubble />
    </div>
</template>

<script setup>
import Bubble from '~/components/effects/Bubble.vue';
import SmokeUp from '~/components/effects/SmokeUp.vue';

</script>

<style>
.background {
    width: 100vw;
    height: 100vh;
    background-color: black;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>