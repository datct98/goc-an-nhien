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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    background-color: #0d0705;
    overflow: hidden;
    overscroll-behavior: none;
}
</style>
