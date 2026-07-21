<template>
    <div class="dashboard-container">
        <header class="main-header">
            <div class="text-4xl">Kết quả lá số tử vi</div>
            <!-- <div class="header-subtitle">NHÂN TƯỚNG &nbsp; • &nbsp; BÁT TỰ &nbsp; • &nbsp; KINH DỊCH &nbsp; • &nbsp;
                PHONG THỦY</div> -->
        </header>
        <main class="content-grid">
            <div class="luan-giai-tu-vi">
                <slot name="luan-giai-tu-vi"></slot>
            </div>
            <div class="result">
                <slot name="result"></slot>
            </div>
        </main>

    </div>
</template>

<style setup></style>

<style scoped>
.dashboard-container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: rgba(83, 70, 70, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 20px;
}

/* --- CONTENT GRID SYSTEM --- */
.content-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 15px;
}

.main-header {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
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
    justify-content: start;
    flex-direction: column;
}
</style>