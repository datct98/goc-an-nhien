<template>
    <div class="dashboard-container">
        <div class="luan-giai-tu-vi">
            <slot name="luan-giai-tu-vi"></slot>
        </div>
        <div class="divider"></div>
        <div class="result">
            <slot name="result"></slot>
        </div>
    </div>
</template>

<style setup></style>

<style scoped>
.dashboard-container {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    background: rgba(83, 70, 70, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 20px;
}

.divider {
    width: 2px;
    /* Line thickness */
    height: 30px;
    /* Line height */
    background-color: white;
}

.luan-giai-tu-vi,
.result {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>