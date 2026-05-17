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
                    <NumberPicker :modelValue="day" @update:modelValue="(e) => day = e" :min="1" :max="31" />
                </div>

                <!-- Cột Tháng -->
                <div class="picker-column">
                    <span class="picker-label">Tháng</span>
                    <NumberPicker :modelValue="month" @update:modelValue="(e) => month = e" :min="1" :max="12" />
                </div>

                <!-- Cột Năm -->
                <div class="picker-column year-column">
                    <span class="picker-label">Năm</span>
                    <NumberPicker :modelValue="year" @update:modelValue="(e) => year = e" :min="1970" :max="2100" />
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
}

.dmy-picker-glass {
    width: 100%;
    background: transparent;
    padding: 10px;
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
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
}

.dmy-header p {
    margin: 4px 0 0;
    color: #888;
    font-size: 14px;
}

.picker-group {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 15px;
    position: relative;
}

.picker-column {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
}

.picker-label {
    color: white;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
}

.picker-separator {
    color: rgba(255, 255, 255, 0.15);
    font-size: 14px;
    font-weight: 200;
    margin-top: 25px;
    /* Để dấu gạch chéo căn giữa theo số thay vì nhãn */
    user-select: none;
}

/* Nới rộng một chút cho cột năm (vì hiển thị 4 chữ số 1970-2100) */
.year-column :deep(.picker-viewport) {
    min-width: 100px;
}
</style>
