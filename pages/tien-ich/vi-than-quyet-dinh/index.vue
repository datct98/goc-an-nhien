<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { viThanQuyetDinh } from './data.js'
import StarOverlay from '~/components/effects/StarOverlay.vue'
import WoodGrain from '~/components/effects/WoodGrain.vue'

const router = useRouter()
const isLoading = ref(false)
const result = ref('')

const goBack = () => {
    router.back()
}

const getDecision = () => {
    if (isLoading.value) return

    // Bắt đầu quá trình kết nối vũ trụ (loading)
    result.value = ''
    isLoading.value = true

    // Đợi 2 giây rồi hiển thị kết quả ngẫu nhiên
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * viThanQuyetDinh.length)
        result.value = viThanQuyetDinh[randomIndex].decision
        isLoading.value = false
    }, 3500)
}
</script>

<template>
    <div class="tien-ich-page">
        <!-- Nút quay lại -->
        <div class="w-full flex justify-end">
            <button class="btn-back" @click="goBack">
                <font-awesome-icon icon="fa-solid fa-arrow-left"></font-awesome-icon>
            </button>
        </div>

        <div class="content-wrapper">
            <WoodGrain />

            <!-- Tiêu đề -->
            <h1 class="title">Vị Thần Quyết Định</h1>
            <p class="subtitle">Hãy suy nghĩ thật kỹ về câu hỏi của bạn rồi bấm vào nút 'Nhận tín hiệu vũ trụ'</p>

            <!-- Khu vực hiển thị kết quả / Loading -->
            <div class="result-box" :class="{ 'is-loading': isLoading, 'has-result': result }">
                <!-- Trạng thái đang tải (Loading Animation) -->
                <div v-if="isLoading" class="loader">
                    <div class="spinner"></div>
                    <p class="loading-text">Đang nhận tín hiệu...</p>
                </div>

                <!-- Hiển thị kết quả -->
                <div v-else-if="result" class="answer-text">
                    {{ result }}
                </div>

                <!-- Trạng thái trống ban đầu -->
                <div v-else class="empty-state">
                    <i class="pi pi-sparkles"></i>
                </div>
            </div>

            <!-- Nút bấm -->
            <button class="btn-action" @click="getDecision" :disabled="isLoading">
                Nhận tín hiệu vũ trụ
            </button>
        </div>
    </div>
</template>

<style scoped>
.tien-ich-page {
    width: 100%;
    height: 100vh;
    min-height: 448px;
    margin: 0 auto;
    padding: 24px 20px;
    position: relative;
    background: #3E2723;
    color: white;
}

.btn-back {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid white;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 10;
}

.content-wrapper {
    max-width: 600px;
    width: 100%;
    margin-top: 80px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    position: relative;
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 15px;
    text-shadow: 0 4px 20px rgba(230, 202, 119, 0.3);
}

.subtitle {
    position: relative;
    font-size: 1.1rem;
    color: #a0a0b0;
    margin-bottom: 40px;
    line-height: 1.5;
    max-width: 80%;
}

.result-box {
    width: 100%;
    min-height: 280px;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    margin-bottom: 40px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.result-box.has-result {
    border-color: rgba(230, 202, 119, 0.4);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 40px rgba(230, 202, 119, 0.1);
}

.answer-text {
    font-size: 1.8rem;
    font-weight: 600;
    color: #ffffff;
    line-height: 1.5;
    animation: fadeInScale 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.btn-action {
    position: relative;
    background-size: 200% auto;
    color: white;
    border: 1px solid white;
    font-size: 1.1rem;
    font-weight: 700;
    padding: 18px 45px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.4s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.btn-action:hover:not(:disabled) {
    background-position: right center;
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(188, 55, 212, 0.5);
}

.btn-action:active:not(:disabled) {
    transform: translateY(1px);
}

.btn-action:disabled {
    background: #333;
    color: #666;
    box-shadow: none;
    cursor: not-allowed;
    opacity: 0.7;
}

/* Loading Animation */
.loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.spinner {
    width: 60px;
    height: 60px;
    border: 4px solid rgba(230, 202, 119, 0.1);
    border-top: 4px solid white;
    border-radius: 50%;
    animation: spin 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
}

.loading-text {
    color: white;
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 1px;
    animation: pulse 1.5s ease-in-out infinite;
}

.empty-state i {
    font-size: 5rem;
    color: rgba(255, 255, 255, 0.05);
    animation: float 4s ease-in-out infinite;
}

/* Keyframes */
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes pulse {

    0%,
    100% {
        opacity: 0.6;
    }

    50% {
        opacity: 1;
    }
}

@keyframes fadeInScale {
    0% {
        opacity: 0;
        transform: scale(0.9) translateY(20px);
    }

    100% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

/* Responsive */
@media (max-width: 600px) {
    .title {
        font-size: 2rem;
    }

    .answer-text {
        font-size: 1.5rem;
    }

    .result-box {
        min-height: 220px;
        padding: 25px;
    }
}
</style>
