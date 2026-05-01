<template>
    <div class="chia-tien-wrapper">
        <SplitBillMobile />
    </div>
</template>

<script setup>
import SplitBillMobile from '~/components/split-bill/SplitBillMobile.vue';
</script>

<style scoped>
.chia-tien-wrapper {
    width: 100%;
    max-width: 448px;
    margin: 0 auto;
    min-height: 100dvh;
    background-color: #0d0705;
    overflow: hidden;
    overscroll-behavior: none;
}
</style>
