<template>
  <div class="haircut-calendar">
    <!-- Header -->
    <div class="calendar-header">
      <button @click="prevMonth" class="nav-btn" aria-label="Previous Month">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </button>
      <h2 class="month-year">{{ monthYearLabel }}</h2>
      <button @click="nextMonth" class="nav-btn" aria-label="Next Month">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </button>
    </div>

    <!-- Calendar Body -->
    <div class="calendar-grid">
      <!-- Weekday Labels -->
      <div v-for="day in weekDays" :key="day" class="weekday-label">
        {{ day }}
      </div>

      <!-- Day Cells -->
      <div v-for="(cell, index) in calendarDays" :key="index" class="day-cell" :class="{ 'empty-cell': !cell.date }">
        <template v-if="cell.date">
          <span class="day-number">{{ cell.date }}</span>
          <div class="status-icon">
            <font-awesome-icon :icon="getStatusInfo(cell.status).icon" :class="getStatusInfo(cell.status).colorClass"
              :title="getStatusInfo(cell.status).label" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const viewDate = ref(new Date());

const weekDays = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

const monthYearLabel = computed(() => {
  const month = viewDate.value.getMonth() + 1;
  const year = viewDate.value.getFullYear();
  return `Tháng ${month} năm ${year}`;
});

const prevMonth = () => {
  viewDate.value = new Date(viewDate.value.getFullYear(), viewDate.value.getMonth() - 1, 1);
};

const nextMonth = () => {
  viewDate.value = new Date(viewDate.value.getFullYear(), viewDate.value.getMonth() + 1, 1);
};

const calendarDays = computed(() => {
  const year = viewDate.value.getFullYear();
  const month = viewDate.value.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];

  // Padding for start of month (empty cells)
  for (let i = 0; i < firstDayOfMonth; i++) {
    cells.push({ date: null });
  }

  // Actual days of the month
  for (let d = 1; d <= daysInMonth; d++) {
    // Basic status logic: deterministic pseudo-random distribution
    const statusVal = (d + month + year) % 7;
    let status = 2; // Neutral
    if (statusVal === 0 || statusVal === 3) status = 0; // Good
    else if (statusVal === 1 || statusVal === 5) status = 1; // Not recommended

    cells.push({
      date: d,
      status: status
    });
  }

  return cells;
});

const getStatusInfo = (status) => {
  switch (status) {
    case 0:
      return { icon: ['fas', 'circle-check'], label: 'Ngày tốt', colorClass: 'status-green' };
    case 1:
      return { icon: ['fas', 'circle-xmark'], label: 'Không nên', colorClass: 'status-red' };
    default:
      return { icon: ['fas', 'circle-question'], label: 'Cân nhắc', colorClass: 'status-yellow' };
  }
};
</script>

<style scoped>
.haircut-calendar {
  color: white;
  border: 1px solid white;
  padding: 15px;
  background: transparent;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 12px;
  backdrop-filter: blur(5px);
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.month-year {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
  text-transform: capitalize;
}

.nav-btn {
  background: transparent;
  border: 1px solid white;
  color: white;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background: white;
  color: black;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 12px;
}

.weekday-label {
  text-align: center;
  font-weight: 700;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  font-size: 0.9rem;
  opacity: 0.8;
}

.day-cell {
  aspect-ratio: 1/1;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  transition: transform 0.2s;
  position: relative;
  cursor: pointer;
}

.day-cell:not(.empty-cell):hover {
  background: rgba(255, 255, 255, 0.1);
  transform: scale(1.02);
}

.empty-cell {
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.day-number {
  position: absolute;
  top: 5px;
  left: 8px;
  font-size: 1.1rem;
  font-weight: 500;
}

.status-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
}

.status-green {
  color: #4ade80;
}

.status-red {
  color: #f87171;
}

.status-yellow {
  color: #fbbf24;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .haircut-calendar {
    padding: 15px;
  }

  .month-year {
    font-size: 1.4rem;
  }

  .calendar-grid {
    gap: 6px;
  }

  .day-cell {
    padding: 4px;
  }

  .day-number {
    font-size: 0.9rem;
  }

  .status-icon {
    font-size: 1.5rem;
  }
}
</style>
