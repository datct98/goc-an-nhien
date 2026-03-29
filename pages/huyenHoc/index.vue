<template>
    <div v-if="isMobileView" class="container-huyenhoc-mobile">
        <button class="toggleButtonSetting" @click="toggleSetting()">
            <i class="pi pi-cog"></i>
        </button>

        <!-- Giao diện màn tung đồng xu -->
        <div class="coinPage">
            <Coin ref="firstCoinRef" />
            <button class="btnTossCoin" @click="tossCoin()"> Tung đồng xu </button>
        </div>
    </div>
    <div v-else class="container-huyenHoc">
        <div class="left-task-bar">

        </div>

    </div>
</template>

<script setup>
import Coin from '~/components/Coin.vue';
const isMobileView = useDevice();

const firstCoinRef = ref(null);

const toggleSetting = () => {
}

const tossCoin = () => {
    if (firstCoinRef.value) {
        firstCoinRef.value.tossCoin();
    }
}

</script>
<style scoped src="./index.css"></style>