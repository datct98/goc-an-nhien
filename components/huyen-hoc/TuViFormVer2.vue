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
                <DateChooseComponent v-model="selectedDate" @updateZodiac="handleZodiacChange" />
            </div>
            <div>
                <p class="text-2xl text-center py-4">Chọn giờ sinh</p>
                <TimeChooseComponent v-model="selectedTime" />
            </div>
        </main>
        <footer class="flex justify-end">
            <button class="btn-submit" @click="luanGiaiTuViV2()">Luận giải tử vi</button>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import TimeChooseComponent from './TimeChooseComponent.vue';
import DateChooseComponent from './DateChooseComponent.vue';
import UploadFace from './UploadFace.vue';
import InputTuViForm from './InputTuViForm.vue';

const emit = defineEmits(['luanGiaiTuVi'])
const { $common } = useNuxtApp();

const props = defineProps({
    data: {
        type: Object,
        required: true,
        default: {
            username: "",
            day: 12,
            month: 12,
            year: 2000,
            gender: 1,
            selectedTimeIndice: null,
            mode: '',
            selectYear: 2000,
            selectMonth: 2
        }
    }
});

const timeIndices = [
    { index: 0, name: "Tý 23:00-01:00", time: "23:00-01:00" },
    { index: 1, name: "Sửu 01:00-03:00", time: "01:00-03:00" },
    { index: 2, name: "Dần 03:00-05:00", time: "03:00-05:00" },
    { index: 3, name: "Mão 05:00-07:00", time: "05:00-07:00" },
    { index: 4, name: "Thìn 07:00-09:00", time: "07:00-09:00" },
    { index: 5, name: "Tỵ 09:00-11:00", time: "09:00-11:00" },
    { index: 6, name: "Ngọ 11:00-13:00", time: "11:00-13:00" },
    { index: 7, name: "Mùi 13:00-15:00", time: "13:00-15:00" },
    { index: 8, name: "Thân 15:00-17:00", time: "15:00-17:00" },
    { index: 9, name: "Dậu 17:00-19:00", time: "17:00-19:00" },
    { index: 10, name: "Tuất 19:00-21:00", time: "19:00-21:00" },
    { index: 11, name: "Hợi 21:00-23:00", time: "21:00-23:00" },
];


/**
 * Checks if a given time is within a specified range (e.g., "23:00-01:00").
 * Handles ranges crossing midnight.
 * 
 * @param {string} time - The time to test, e.g., "6:00" or "06:00"
 * @param {string} range - The time range, e.g., "23:00-01:00"
 * @returns {boolean}
 */
function isTimeInRange(time, range) {
    // Helper to convert "HH:MM" into total minutes from midnight (0 to 1439)
    const toMinutes = (timeStr) => {
        const [hours, minutes] = timeStr.split(':').map(Number);
        return hours * 60 + (minutes || 0);
    };

    const [startStr, endStr] = range.split('-');

    const targetMin = toMinutes(time);
    const startMin = toMinutes(startStr);
    const endMin = toMinutes(endStr);

    // Standard range during the same day (e.g., 09:00 - 17:00)
    if (startMin <= endMin) {
        return targetMin >= startMin && targetMin <= endMin;
    }

    // Overnight range crossing midnight (e.g., 23:00 - 01:00)
    return targetMin >= startMin || targetMin <= endMin;
}

const selectedTime = ref('12:00:00');
const selectedDate = ref('2000-01-01');
const faceImg = ref(null);
const userData = ref({
    name: '',
    birthPlace: '',
    gender: 'male'
});

const handleZodiacChange = (zodiac) => {
    userData.value.sign = zodiac;
}

const luanGiaiTuViV2 = () => {
    // 1. Validate date selection
    if (!selectedDate.value) {
        console.error('Validation Error: Date is required.');
        return;
    }

    const dateParts = selectedDate.value.split('-');

    // Ensure the date follows YYYY-MM-DD format correctly
    if (dateParts.length !== 3) {
        $common.showError('Validation Error: Invalid date format.');
        return;
    }

    const [yearStr, monthStr, dayStr] = dateParts;
    const year = parseInt(yearStr, 10);
    const month = parseInt(monthStr, 10);
    const day = parseInt(dayStr, 10);

    // Check valid year/month/day ranges
    if (
        isNaN(year) || year < 1970 || year > 2100 ||
        isNaN(month) || month < 1 || month > 12 ||
        isNaN(day) || day < 1 || day > 31
    ) {
        $common.showError('Validation Error: Year, month, or day values are out of range.');
        return;
    }

    // 2. Validate user name
    const username = userData.value?.name?.trim();
    if (!username) {
        $common.showError('Validation Error: Username is required..');
        return;
    }

    // 3. Validate gender
    const gender = userData.value?.gender;
    if (gender === undefined || gender === null || gender === '') {
        $common.showError('Validation Error: Gender is required.');
        return;
    }

    // 4. Validate selected time index
    var selectedTimeIndice = null;
    if (
        selectedTime.value === undefined ||
        selectedTime.value === null
    ) {
        $common.showError('Validation Error: Time index must be a valid selection.');
        return;
    }

    for (let i of timeIndices) {
        if (isTimeInRange(selectedTime.value, i.time)) {
            selectedTimeIndice = i;
            break;
        }
    }

    // ✅ All data passed validation — emit event
    emit('luanGiaiTuVi', {
        username,
        day: dayStr,     // Keeps padded string format "01"
        month: monthStr, // Keeps padded string format "01"
        year: yearStr,   // Keeps string format "2000"
        gender,
        selectedTimeIndice,
        mode: props.data.mode,
        sign: userData.value.sign
    });
};

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