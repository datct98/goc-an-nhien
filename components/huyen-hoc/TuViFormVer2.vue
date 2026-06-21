<template>
    <div class="dashboard-container">
        <header class="main-header">
            <div class="text-4xl">Nhập thông tin lá số tử vi</div>
            <div class="header-subtitle">NHÂN TƯỚNG &nbsp; • &nbsp; BÁT TỰ &nbsp; • &nbsp; KINH DỊCH &nbsp; • &nbsp;
                PHONG THỦY</div>
        </header>
        <main class="content-grid">
            <div>1</div>
            <div>2</div>
            <div>
                <p class="text-2xl text-center">Chọn ngày sinh</p>
                <DateChooseComponent v-model="selectedDate" />
            </div>
            <div>
                <p class="text-2xl text-center">Chọn giờ sinh</p>
                <TimeChooseComponent v-model="selectedTime" />
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import TimeChooseComponent from './TimeChooseComponent.vue';
import DateChooseComponent from './DateChooseComponent.vue';

const selectedTime = ref('12:00:00');
const selectedDate = ref('2000-01-01');

</script>

<style scoped>
* {
    font-family: Lora;
}

/* --- MAIN LAYOUT STRUCTURE --- */
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
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 15px;
}

.main-header {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
</style>