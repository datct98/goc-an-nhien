<script setup>
import { ref, computed, watch } from 'vue'
import NumberPicker from './NumberPicker.vue'

const props = defineProps({
    modelValue: {
        type: Object,
        default: () => {
            const now = new Date()
            return { day: now.getDate(), month: now.getMonth() + 1, year: now.getFullYear() }
        }
    }
})

const emit = defineEmits(['update:modelValue'])

const day = ref(props.modelValue.day || new Date().getDate())
const month = ref(props.modelValue.month || (new Date().getMonth() + 1))
const year = ref(props.modelValue.year || new Date().getFullYear())

// Tính số ngày tối đa trong tháng để tự động điều chỉnh ngày hợp lệ
// Ví dụ: Đang ở 31/01 mà chuyển sang tháng 02 thì ngày tự lùi về 28 hoặc 29.
// const maxDaysInMonth = computed(() => {
//     return new Date(year.value, month.value, 0).getDate()
// })

// Lắng nghe thay đổi tháng/năm để điều chỉnh ngày nếu vượt quá số ngày của tháng
// watch([month, year], () => {
//     if (day.value > maxDaysInMonth.value) {
//         day.value = maxDaysInMonth.value
//     }
//     emitUpdate()
// })

// watch(day, () => {
//     emitUpdate()
// })

// const emitUpdate = () => {
//     emit('update:modelValue', { day: day.value, month: month.value, year: year.value })
// }
</script>

<template>
    <div class="dmy-picker-wrapper">
        <div class="dmy-picker-glass">

            <!-- <div class="dmy-header">
                <h3>Chọn Ngày</h3>
                <p>Vuốt để thay đổi thời gian</p>
            </div> -->

            <div class="picker-group">
                <!-- Cột Ngày -->
                <div class="picker-column">
                    <span class="picker-label">Ngày</span>
                    <NumberPicker v-model="day" :min="1" :max="31" />
                </div>

                <div class="picker-separator">/</div>

                <!-- Cột Tháng -->
                <div class="picker-column">
                    <span class="picker-label">Tháng</span>
                    <NumberPicker v-model="month" :min="1" :max="12" />
                </div>

                <div class="picker-separator">/</div>

                <!-- Cột Năm -->
                <div class="picker-column year-column">
                    <span class="picker-label">Năm</span>
                    <NumberPicker v-model="year" :min="1970" :max="2100" />
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.dmy-picker-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}

.dmy-picker-glass {
    background: rgba(20, 20, 22, 0.85);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 28px;
    padding: 30px 40px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.dmy-header {
    text-align: center;
    margin-bottom: 10px;
}

.dmy-header h3 {
    margin: 0;
    color: #ffffff;
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 0.5px;
}

.dmy-header p {
    margin: 4px 0 0;
    color: #888;
    font-size: 0.85rem;
}

.picker-group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    position: relative;
}

/* Thêm hiệu ứng vệt sáng ngang làm nền nổi bật khu vực đang chọn */
.picker-group::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 42px;
    /* Đồng bộ với height của picker-highlight-box trong NumberPicker */
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.06) 50%, rgba(255, 255, 255, 0) 100%);
    border-radius: 8px;
    pointer-events: none;
    z-index: 0;
}

.picker-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    z-index: 1;
}

.picker-label {
    color: #a0a0a0;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
}

.picker-separator {
    color: rgba(255, 255, 255, 0.15);
    font-size: 2.5rem;
    font-weight: 200;
    margin-top: 25px;
    /* Để dấu gạch chéo căn giữa theo số thay vì nhãn */
    user-select: none;
}

/* Nới rộng một chút cho cột năm (vì hiển thị 4 chữ số 1970-2100) */
.year-column :deep(.picker-viewport) {
    width: 85px;
}
</style>
