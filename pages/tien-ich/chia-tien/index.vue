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
}
</style>
