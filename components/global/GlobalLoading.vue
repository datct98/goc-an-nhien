<template>
    <Transition name="fade">
        <div v-if="isLoading">
            <ContainerWithBackground src="/layout/loading.webp" aria-label="Quần đảo Góc An Nhiên"
                background-size="cover" :offset-top="0">
            </ContainerWithBackground>
        </div>
    </Transition>
</template>

<script setup>

definePageMeta({
    layout: "loading"
})

const { isLoading } = useLoading()
import ContainerWithBackground from '~/components/layout/ContainerWithBackground.vue'

console.log("isLoading : ", isLoading.value);
</script>

<style scoped>
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
</style>