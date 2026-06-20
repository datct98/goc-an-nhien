<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '12:00:00'
  }
});

const emit = defineEmits(['update:modelValue']);

// Current time state
const h = ref(12);
const m = ref(0);
const s = ref(0);

// Initialize from prop
const init = () => {
  const parts = props.modelValue.split(':');
  h.value = parseInt(parts[0]) || 0;
  m.value = parseInt(parts[1]) || 0;
  s.value = parseInt(parts[2]) || 0;
};

init();

// Computed rotation angles
const hourRotation = computed(() => ((h.value % 12) + m.value / 60) * 30);
const minuteRotation = computed(() => (m.value + s.value / 60) * 6);
const secondRotation = computed(() => s.value * 6);

const isPM = computed(() => h.value >= 12);

const formattedTime = computed(() => {
  const hh = String(h.value).padStart(2, '0');
  const mm = String(m.value).padStart(2, '0');
  const ss = String(s.value).padStart(2, '0');
  return `${hh}:${mm}:${ss}`;
});

// Dragging logic
const clockRef = ref(null);
const draggingHand = ref(null);

const startDrag = (hand) => {
  draggingHand.value = hand;
};

const handleMove = (e) => {
  if (!draggingHand.value || !clockRef.value) return;

  const rect = clockRef.value.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const clientX = e.clientX || (e.touches && e.touches[0].clientX);
  const clientY = e.clientY || (e.touches && e.touches[0].clientY);

  const dx = clientX - centerX;
  const dy = clientY - centerY;

  // Calculate angle in degrees (0 at top, clockwise)
  let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
  if (angle < 0) angle += 360;

  if (draggingHand.value === 'hour') {
    let newH = Math.round(angle / 30) % 12;
    if (isPM.value) newH += 12;
    h.value = newH;
  } else if (draggingHand.value === 'minute') {
    m.value = Math.round(angle / 6) % 60;
  } else if (draggingHand.value === 'second') {
    s.value = Math.round(angle / 6) % 60;
  }

  emit('update:modelValue', formattedTime.value);
};

const stopDrag = () => {
  draggingHand.value = null;
};

const toggleAmPm = () => {
  if (h.value >= 12) {
    h.value -= 12;
  } else {
    h.value += 12;
  }
  emit('update:modelValue', formattedTime.value);
};

onMounted(() => {
  window.addEventListener('mousemove', handleMove);
  window.addEventListener('mouseup', stopDrag);
  window.addEventListener('touchmove', handleMove, { passive: false });
  window.addEventListener('touchend', stopDrag);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMove);
  window.removeEventListener('mouseup', stopDrag);
  window.removeEventListener('touchmove', handleMove);
  window.removeEventListener('touchend', stopDrag);
});
</script>

<template>
  <div class="time-choose-root">
    <div class="clock-wrapper" ref="clockRef">
      <svg viewBox="0 0 240 240" class="analog-svg">
        <!-- Dial Rim -->
        <circle cx="120" cy="120" r="110" fill="none" stroke="white" stroke-width="2" />

        <!-- Markers -->
        <g v-for="n in 60" :key="n" :transform="`rotate(${(n - 1) * 6} 120 120)`">
          <line x1="120" y1="10" x2="120" :y2="(n - 1) % 5 === 0 ? 25 : 18" stroke="white"
            :stroke-width="(n - 1) % 5 === 0 ? 3 : 1" />
        </g>

        <!-- Hour Hand -->
        <g class="hand hour-hand" :transform="`rotate(${hourRotation} 120 120)`" @mousedown.stop="startDrag('hour')"
          @touchstart.prevent.stop="startDrag('hour')">
          <line x1="120" y1="120" x2="120" y2="60" stroke="white" stroke-width="7" stroke-linecap="round" />
          <line x1="120" y1="120" x2="120" y2="55" stroke="transparent" stroke-width="20" />
        </g>

        <!-- Minute Hand -->
        <g class="hand minute-hand" :transform="`rotate(${minuteRotation} 120 120)`"
          @mousedown.stop="startDrag('minute')" @touchstart.prevent.stop="startDrag('minute')">
          <line x1="120" y1="120" x2="120" y2="35" stroke="white" stroke-width="4" stroke-linecap="round" />
          <line x1="120" y1="120" x2="120" y2="30" stroke="transparent" stroke-width="20" />
        </g>

        <!-- Second Hand -->
        <g class="hand second-hand" :transform="`rotate(${secondRotation} 120 120)`"
          @mousedown.stop="startDrag('second')" @touchstart.prevent.stop="startDrag('second')">
          <line x1="120" y1="120" x2="120" y2="25" stroke="#f0f0f0" stroke-width="2" stroke-linecap="round" />
          <line x1="120" y1="120" x2="120" y2="20" stroke="transparent" stroke-width="20" />
        </g>

        <!-- Center Pin -->
        <circle cx="120" cy="120" r="4" fill="white" />
      </svg>
    </div>

    <!-- Readout -->
    <div class="readout-section">
      <div class="time-display">{{ formattedTime }}</div>
      <div class="ampm-toggle" @click="toggleAmPm">
        {{ isPM ? 'PM' : 'AM' }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.time-choose-root {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding: 20px;
  user-select: none;
}

.clock-wrapper {
  position: relative;
  width: 240px;
  height: 240px;
}

.analog-svg {
  width: 100%;
  height: 100%;
}

.hand {
  cursor: pointer;
  transition: stroke 0.2s;
}

.hand:hover line[stroke="white"] {
  stroke: #ddd;
}

.readout-section {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.time-display {
  color: white;
  font-size: 2.5rem;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  letter-spacing: 2px;
  font-variant-numeric: tabular-nums;
  font-weight: 300;
}

.ampm-toggle {
  color: white;
  padding: 4px 16px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: opacity 0.2s ease;
  font-weight: 500;
  opacity: 0.7;
}

.ampm-toggle:hover {
  opacity: 1;
}
</style>
