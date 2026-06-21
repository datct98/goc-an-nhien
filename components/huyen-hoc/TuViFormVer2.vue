<template>
    <div class="dashboard-container">
        <header class="main-header">
            <div class="text-4xl">Nhập thông tin lá số tử vi</div>
            <div class="header-subtitle">NHÂN TƯỚNG &nbsp; • &nbsp; BÁT TỰ &nbsp; • &nbsp; KINH DỊCH &nbsp; • &nbsp;
                PHONG THỦY</div>
        </header>
        <main class="content-grid">
            <div>
                <p class="text-2xl text-center py-4">Thông tin cá nhân</p>
                <InputTuViForm v-model="userData" />
            </div>
            <div>
                <p class="text-2xl text-center py-4">Nhận diện khuôn mặt</p>
                <UploadFace v-model="faceImg" />
            </div>
            <div>
                <p class="text-2xl text-center py-4">Chọn ngày sinh</p>
                <DateChooseComponent v-model="selectedDate" />
            </div>
            <div>
                <p class="text-2xl text-center py-4">Chọn giờ sinh</p>
                <TimeChooseComponent v-model="selectedTime" />
            </div>
        </main>
        <footer class="flex justify-end">
            <button class="btn-submit">Luận giải tử vi</button>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import TimeChooseComponent from './TimeChooseComponent.vue';
import DateChooseComponent from './DateChooseComponent.vue';
import UploadFace from './UploadFace.vue';
import InputTuViForm from './InputTuViForm.vue';

const selectedTime = ref('12:00:00');
const selectedDate = ref('2000-01-01');
const faceImg = ref(null);
const userData = ref({
    name: '',
    birthPlace: '',
    gender: 'male'
});

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

.btn-submit {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.5);
    color: white;
    padding: 10px 24px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 500;
}

.btn-submit:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
</style>