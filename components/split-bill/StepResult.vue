<template>
    <div>
        <h1 class="sb-header-title">Kết quả</h1>

        <!-- Total -->
        <div class="sb-result-total">
            <div class="sb-result-total-amount">{{ formatCurrency(total) }}</div>
        </div>

        <!-- Results List -->
        <div class="sb-result-list">
            <div v-for="(item, index) in results" :key="item.name" class="sb-result-item">
                <div class="sb-result-item-left">
                    <div class="sb-result-dot" :style="{ backgroundColor: item.color }"></div>
                    <span class="sb-result-name">{{ item.name }}</span>
                </div>
                <span class="sb-result-amount">{{ formatCurrency(item.amount) }}</span>
            </div>

            <!-- Total Summary -->
            <div class="sb-result-summary">
                <span class="sb-result-summary-text">
                    Tổng: <span class="sb-result-summary-amount">{{ formatCurrency(total) }}</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    results: {
        type: Array,
        default: () => [],
    },
    total: {
        type: Number,
        default: 0,
    },
    title: {
        type: String,
        default: '',
    },
    participants: {
        type: Array,
        default: () => [],
    },
});

const formatCurrency = inject('formatCurrency');
</script>
