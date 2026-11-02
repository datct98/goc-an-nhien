<template>
    <div class="loadingContainer" v-if="isLoading">
        <Transition name="fade">
            <!-- <ContainerWithBackground src="/layout/loading.webp" aria-label="Quần đảo Góc An Nhiên"
                background-size="cover" :offset-top="0">
                <div class="mainLoading">
                    <Image src="/layout/loadingNhaSu.png" width="200" />
                    <ProgressBar :percent="progress" />
                </div>
            </ContainerWithBackground> -->
            <ParallaxScrolling v-if="isLoading" :image-src="[
                '/anim/bg2/part_1.png',
                '/anim/bg2/part_2.png',
                '/anim/bg2/part_3.png',
            ]" :speed="50" :horizon="1">
                <div class="main-object">
                    <Image src="/webp/nhasucuoico.webp" alt="main" />
                </div>
                <p class="labelText">Đang loading, thí chủ chờ xíu nhé !</p>
            </ParallaxScrolling>
        </Transition>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ContainerWithBackground from '~/components/layout/ContainerWithBackground.vue';
import ProgressBar from './ProgressBar.vue';
import ParallaxScrolling from '~/components/anim/ParallaxScrolling.vue';

definePageMeta({
    layout: "loading"
})
const { isLoading, progress } = useLoading();

onMounted(() => {
    // startProgress()
})

// Dọn dẹp khi component bị unmount
onUnmounted(() => {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
    }
})

</script>

<style scoped>
.mainLoading {
    width: 100%;
    position: absolute;
    top: 50%;
}

.loading-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    z-index: 9999;
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.labelText {
    font-family: Lora;
    font-weight: 800;
    font-size: 14px;
    text-transform: uppercase;
    color: white;
    text-align: center;
    text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.7);
}

.loadingContainer {
    width: 100vw;
    height: 100vh;
    background-color: #d2c1b8;
    display: flex;
    justify-content: start;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: absolute;
}
</style>