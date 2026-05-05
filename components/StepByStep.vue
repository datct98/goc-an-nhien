<template>
    <!-- Step Indicator -->
    <div class="sb-steps mt-10">
        <template v-for="step in numOfStep" :key="step">
            <div class="sb-step-dot" :class="{ active: currentStep === step, completed: currentStep > step }">
            </div>
            <div v-if="step < numOfStep" class="sb-step-line" :class="{ active: currentStep > step }"></div>
        </template>
    </div>
</template>

<script setup>

const props = defineProps({
    currentStep: {
        type: Number,
        required: true
    },
    numOfStep: {
        type: Number,
        default: 3
    }
});
</script>

<style scoped>
.sb-steps {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    margin-bottom: 24px;
    padding-top: 4px;
}

.sb-step-dot {
    width: 15px;
    height: 15px;
    font-size: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.12);
    border: 1.5px solid rgba(255, 255, 255, 0.18);
    transition: all 0.35s ease;
    flex-shrink: 0;
}

.sb-step-dot.active {
    background: #9637d4;
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.6);
}

.sb-step-dot.completed {
    background: #9637d4;
}

.sb-step-line {
    height: 2px;
    width: 80px;
    background: rgba(255, 255, 255, 0.1);
    flex-shrink: 0;
}
</style>