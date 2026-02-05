<template>
    <div class="background">
        <SmokeUp />
    </div>
</template>

<script setup>
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
}
</style>