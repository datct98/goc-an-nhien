<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '2000-01-01'
  }
});

const emit = defineEmits(['update:modelValue', 'updateZodiac']);

const year = ref(2000);
const month = ref(1);
const day = ref(1);

// Initialize from prop
const init = () => {
  if (props.modelValue) {
    const parts = props.modelValue.split('-');
    if (parts.length === 3) {
      year.value = parseInt(parts[0]);
      month.value = parseInt(parts[1]);
      day.value = parseInt(parts[2]);
    }
  }
};

init();

const updateModel = () => {
  const y = year.value;
  const m = String(month.value).padStart(2, '0');
  const d = String(day.value).padStart(2, '0');
  const zSign = calculatedWesternZodiac.value;
  emit('update:modelValue', `${y}-${m}-${d}`);
  emit('updateZodiac', zSign);
};

const chineseZodiacAnimals = [
  'Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ',
  'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'
];

const westernZodiacSigns = [
  { name: 'Ma Kết', start: { month: 12, day: 22 }, end: { month: 1, day: 19 } },
  { name: 'Bảo Bình', start: { month: 1, day: 20 }, end: { month: 2, day: 18 } },
  { name: 'Song Ngư', start: { month: 2, day: 19 }, end: { month: 3, day: 20 } },
  { name: 'Bạch Dương', start: { month: 3, day: 21 }, end: { month: 4, day: 19 } },
  { name: 'Kim Ngưu', start: { month: 4, day: 20 }, end: { month: 5, day: 20 } },
  { name: 'Song Tử', start: { month: 5, day: 21 }, end: { month: 6, day: 20 } },
  { name: 'Cự Giải', start: { month: 6, day: 21 }, end: { month: 7, day: 22 } },
  { name: 'Sư Tử', start: { month: 7, day: 23 }, end: { month: 8, day: 22 } },
  { name: 'Xử Nữ', start: { month: 8, day: 23 }, end: { month: 9, day: 22 } },
  { name: 'Thiên Bình', start: { month: 9, day: 23 }, end: { month: 10, day: 22 } },
  { name: 'Bọ Cạp', start: { month: 10, day: 23 }, end: { month: 11, day: 21 } },
  { name: 'Nhân Mã', start: { month: 11, day: 22 }, end: { month: 12, day: 21 } }
];

const calculatedChineseZodiac = computed(() => {
  const index = (year.value - 4) % 12;
  return chineseZodiacAnimals[index < 0 ? index + 12 : index];
});

const calculatedWesternZodiac = computed(() => {
  const m = month.value;
  const d = day.value;

  for (const sign of westernZodiacSigns) {
    if (sign.name === 'Ma Kết') {
      if ((m === 12 && d >= 22) || (m === 1 && d <= 19)) return sign.name;
    } else {
      if ((m === sign.start.month && d >= sign.start.day) ||
        (m === sign.end.month && d <= sign.end.day)) {
        return sign.name;
      }
    }
  }
  return 'Ma Kết';
});

// Ensure day doesn't exceed month limit
const maxDays = computed(() => {
  return new Date(year.value, month.value, 0).getDate();
});

const handleYearChange = () => {
  validateDay();
  updateModel();
};

const handleMonthChange = () => {
  validateDay();
  updateModel();
};

const validateDay = () => {
  if (day.value > maxDays.value) {
    day.value = maxDays.value;
  }
  updateModel();
};
</script>

<template>
  <div class="date-choose-container">
    <div class="display-section">
      <div class="date-values">
        <span class="label">Ngày:</span> <span class="value">{{ String(day).padStart(2, '0') }}</span>
        <span class="label">Tháng:</span> <span class="value">{{ String(month).padStart(2, '0') }}</span>
        <span class="label">Năm:</span> <span class="value">{{ year }}</span>
      </div>

      <div class="zodiac-info">
        <div class="zodiac-item">
          <span class="label">Con giáp:</span>
          <span class="zodiac-value highlight">{{ calculatedChineseZodiac }}</span>
        </div>
        <div class="zodiac-item">
          <span class="label">Cung hoàng đạo:</span>
          <span class="zodiac-value highlight">{{ calculatedWesternZodiac }}</span>
        </div>
      </div>
    </div>

    <div class="sliders-section">
      <div class="slider-group">
        <label for="year-slider">Năm (1970 - 2026)</label>
        <input id="year-slider" type="range" v-model.number="year" min="1970" max="2026" step="1"
          @input="handleYearChange" />
      </div>

      <div class="slider-group">
        <label for="month-slider">Tháng (01 - 12)</label>
        <input id="month-slider" type="range" v-model.number="month" min="1" max="12" step="1"
          @input="handleMonthChange" />
      </div>

      <div class="slider-group">
        <label for="day-slider">Ngày (01 - 31)</label>
        <input id="day-slider" type="range" v-model.number="day" min="1" :max="maxDays" step="1" @input="updateModel" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.date-choose-container {
  color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  user-select: none;
}

.display-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
}

.date-values {
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-size: 1.25em;
  font-weight: 500;
}

.label {
  opacity: 0.8;
  font-size: 0.9em;
}

.value {
  color: #fff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.zodiac-info {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
}

.zodiac-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.zodiac-value {
  font-size: 1.5em;
  font-weight: bold;
}

.highlight {
  background: linear-gradient(135deg, #fff 0%, #aaa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.2));
}

.sliders-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.slider-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.slider-group label {
  font-size: 0.85em;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}

input[type="range"]::-moz-range-thumb {
  width: 18px;
  height: 18px;
  background: white;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
}

input[type="range"]::-moz-range-thumb:hover {
  transform: scale(1.2);
}

@media (max-width: 600px) {
  .date-values {
    font-size: 1.1em;
    flex-wrap: wrap;
  }
}
</style>
