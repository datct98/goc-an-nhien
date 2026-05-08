<template>
  <div class="palm-diagram-wrap">
    <svg viewBox="0 0 240 440" class="palm-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow-sm" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="glow-lg" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="7" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <!-- Hand skin gradient -->
        <linearGradient id="hand-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#1a1228"/>
          <stop offset="100%" stop-color="#0d0a18"/>
        </linearGradient>
      </defs>

      <!-- ── Hand outline ── -->
      <!-- Palm -->
      <path
        d="M 78,432
           C 55,428 42,406 40,380 C 38,352 40,318 40,290
           C 40,268 38,248 36,232 C 34,214 31,197 32,180
           C 33,163 40,152 52,148 C 64,144 76,150 82,162
           C 87,172 85,190 84,205
           L 86,198 C 84,182 82,158 80,130
           C 78,102 77,78 79,62 C 81,46 89,38 100,38
           C 111,38 120,46 122,62 C 124,78 121,104 120,130
           C 119,152 120,175 120,195
           L 123,188 C 122,170 122,144 123,116
           C 124,88 127,64 130,50 C 133,36 142,28 153,28
           C 164,28 172,36 174,50 C 176,64 173,88 172,116
           C 171,140 172,165 172,185
           L 175,178 C 174,162 175,138 177,112
           C 179,86 183,66 187,54 C 191,42 200,38 211,42
           C 222,46 228,58 226,76 C 224,92 216,114 213,135
           C 210,154 208,172 208,190
           C 210,205 214,228 217,260
           C 220,292 220,328 215,360
           C 210,390 198,415 178,428
           C 158,440 108,440 78,432 Z"
        fill="url(#hand-grad)"
        stroke="rgba(212,175,55,0.35)"
        stroke-width="1.5"
      />

      <!-- Fingers highlight (subtle) -->
      <!-- Index -->
      <rect x="77" y="38" width="44" height="158" rx="22" fill="rgba(255,255,255,0.03)" stroke="rgba(212,175,55,0.12)" stroke-width="1"/>
      <!-- Middle -->
      <rect x="110" y="28" width="44" height="168" rx="22" fill="rgba(255,255,255,0.03)" stroke="rgba(212,175,55,0.12)" stroke-width="1"/>
      <!-- Ring -->
      <rect x="143" y="38" width="42" height="155" rx="21" fill="rgba(255,255,255,0.03)" stroke="rgba(212,175,55,0.12)" stroke-width="1"/>
      <!-- Pinky -->
      <rect x="178" y="68" width="37" height="124" rx="18" fill="rgba(255,255,255,0.03)" stroke="rgba(212,175,55,0.12)" stroke-width="1"/>
      <!-- Thumb -->
      <ellipse cx="55" cy="185" rx="24" ry="45" transform="rotate(-15,55,185)" fill="rgba(255,255,255,0.03)" stroke="rgba(212,175,55,0.12)" stroke-width="1"/>

      <!-- ── Dim palm lines (always shown as reference) ── -->
      <g opacity="0.22" stroke-width="3" fill="none" stroke-linecap="round">
        <!-- Sinh Mệnh: web space → vòng ngón cái → cổ tay trái -->
        <path d="M 82,196 C 64,230 54,268 52,308 C 50,348 58,382 75,410" stroke="#FF4444"/>
        <!-- Trí Tuệ: gốc ngón trỏ → ngang lòng bàn tay -->
        <path d="M 84,228 Q 145,238 208,248" stroke="#4488FF"/>
        <!-- Tình Cảm: ngón út (PHẢI) → ngón trỏ (TRÁI) -->
        <path d="M 208,200 Q 148,206 86,210" stroke="#FF88AA"/>
        <!-- Sự Nghiệp: cổ tay → ngón giữa (thẳng đứng, tâm bàn tay) -->
        <path d="M 130,408 C 130,370 130,320 130,208" stroke="#44BB44"/>
        <!-- Thái Dương: dưới ngón áp út lên -->
        <path d="M 164,385 C 164,350 164,300 163,218" stroke="#FFaa00"/>
        <!-- Sức Khỏe: chéo từ trái-dưới sang phải-trên -->
        <path d="M 72,335 Q 138,285 200,238" stroke="#88DDAA"/>
      </g>

      <!-- ── Active/highlighted palm lines ── -->
      <g v-for="line in DIAGRAM_LINES" :key="line.key">
        <path
          v-if="getLine(line.key)"
          :d="line.d"
          :stroke="getColor(line.key)"
          :stroke-width="activeLine === line.key ? 5 : 4"
          :opacity="activeLine === null ? 1 : (activeLine === line.key ? 1 : 0.2)"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          filter="url(#glow-sm)"
        />
        <!-- Second pass: extra glow for active line -->
        <path
          v-if="getLine(line.key) && activeLine === line.key"
          :d="line.d"
          :stroke="getColor(line.key)"
          stroke-width="8"
          opacity="0.35"
          fill="none"
          stroke-linecap="round"
          filter="url(#glow-lg)"
        />
        <!-- Start dot -->
        <circle
          v-if="getLine(line.key)"
          :cx="line.startDot[0]" :cy="line.startDot[1]" r="4"
          :fill="getColor(line.key)"
          :opacity="activeLine === null ? 1 : (activeLine === line.key ? 1 : 0.2)"
          filter="url(#glow-sm)"
        />
      </g>

      <!-- Finger name labels (subtle) -->
      <text x="99"  y="25" class="finger-label">Trỏ</text>
      <text x="130" y="14" class="finger-label">Giữa</text>
      <text x="160" y="25" class="finger-label">Áp út</text>
      <text x="193" y="60" class="finger-label">Út</text>
    </svg>

    <!-- Legend / line selector -->
    <div class="diagram-legend">
      <button
        v-for="line in mappedLines"
        :key="line.key"
        class="legend-btn"
        :class="{
          active: activeLine === line.key,
          dimmed: activeLine !== null && activeLine !== line.key
        }"
        :style="activeLine === line.key
          ? { borderColor: line.color, boxShadow: `0 0 14px ${line.color}40` }
          : {}"
        @click="toggleLine(line.key)"
      >
        <span class="legend-dot" :style="{ background: line.color, boxShadow: `0 0 5px ${line.color}` }"/>
        <span class="legend-text">{{ line.name }}</span>
      </button>
    </div>

    <!-- Active line detail -->
    <transition name="fade-slide">
      <div v-if="activeLine && activeLineData" class="diagram-detail">
        <span class="detail-dot" :style="{ background: activeLineData.color }"/>
        <div>
          <p class="detail-name">{{ activeLineData.name }} <span>{{ activeLineData.chineseName }}</span></p>
          <p class="detail-desc">{{ activeLineData.description }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import type { PalmLine } from '~/composables/usePalmistry'

const props = defineProps<{
  lines: PalmLine[]
}>()

const emit = defineEmits<{
  (e: 'line-click', index: number): void
}>()

// ─── Diagram line definitions — tọa độ theo giải phẫu chuẩn ─────────────
// ViewBox: 0 0 240 440 | Ngón tay: y 28-196 | Lòng bàn tay: y 196-430
// Tâm ngón giữa x≈132 | Trái lòng x≈40 | Phải lòng x≈215
const DIAGRAM_LINES = [
  {
    key: 'sinh-menh',
    match: ['Sinh Mệnh', 'sinh mệnh', 'Life'],
    // Bắt đầu ở web space (kẽ ngón cái - trỏ), cong TRÁI quanh ngón cái, xuống cổ tay trái
    d: 'M 82,196 C 64,230 54,268 52,308 C 50,348 58,382 75,410',
    startDot: [82, 196],
  },
  {
    key: 'tri-tue',
    match: ['Trí Tuệ', 'trí tuệ', 'Head'],
    // Bắt đầu gần đường Sinh Mệnh, chạy ngang lòng bàn tay
    d: 'M 84,228 Q 145,238 208,248',
    startDot: [84, 228],
  },
  {
    key: 'tinh-cam',
    match: ['Tình Cảm', 'tình cảm', 'Heart'],
    // QUAN TRỌNG: Tình cảm đi từ PHẢI (dưới ngón út) → TRÁI (dưới ngón trỏ)
    d: 'M 208,200 Q 148,206 86,210',
    startDot: [208, 200],
  },
  {
    key: 'su-nghiep',
    match: ['Sự Nghiệp', 'sự nghiệp', 'Fate'],
    // Đường thẳng đứng từ cổ tay lên, chạy dọc theo trục ngón giữa
    d: 'M 130,408 C 130,360 130,300 130,208',
    startDot: [130, 408],
  },
  {
    key: 'thai-duong',
    match: ['Thái Dương', 'thái dương', 'Sun'],
    // Dưới ngón áp út (ring finger center x≈164), chạy từ thấp lên
    d: 'M 164,385 C 164,345 164,295 163,218',
    startDot: [164, 385],
  },
  {
    key: 'suc-khoe',
    match: ['Sức Khỏe', 'sức khỏe', 'Health'],
    // Đường chéo từ vùng ngón cái (trái-dưới) lên vùng ngón út (phải-trên)
    d: 'M 72,335 Q 138,285 200,238',
    startDot: [72, 335],
  },
]

// ─── Map API lines to diagram ──────────────────────────────────────────────
const mappedLines = computed(() =>
  DIAGRAM_LINES.map(dl => {
    const apiLine = props.lines.find(l =>
      dl.match.some(m => l.name.includes(m))
    )
    return {
      key: dl.key,
      name: apiLine?.name ?? dl.match[0],
      chineseName: apiLine?.chineseName ?? '',
      color: apiLine?.color ?? 'rgba(255,255,255,0.3)',
      description: apiLine?.description ?? '',
      analysis: apiLine?.analysis ?? '',
      found: !!apiLine,
    }
  }).filter(l => l.found)
)

const getLine = (key: string) => mappedLines.value.find(l => l.key === key)
const getColor = (key: string) => getLine(key)?.color ?? 'rgba(255,255,255,0.2)'

// ─── Active line ───────────────────────────────────────────────────────────
const activeLine = ref<string | null>(null)
const activeLineData = computed(() =>
  activeLine.value ? mappedLines.value.find(l => l.key === activeLine.value) : null
)

function toggleLine(key: string) {
  activeLine.value = activeLine.value === key ? null : key
  const idx = mappedLines.value.findIndex(l => l.key === key)
  if (idx !== -1) emit('line-click', idx)
}
</script>

<style scoped>
.palm-diagram-wrap {
  width: 100%;
  background: rgba(8, 6, 20, 0.7);
  border-radius: 16px;
  border: 1px solid rgba(212, 175, 55, 0.2);
  overflow: hidden;
}

.palm-svg {
  width: 100%;
  display: block;
  max-height: 360px;
}

.finger-label {
  font-size: 9px;
  fill: rgba(212, 175, 55, 0.3);
  text-anchor: middle;
  font-family: sans-serif;
}

/* Legend */
.diagram-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 10px 12px;
  border-top: 1px solid rgba(212, 175, 55, 0.1);
  background: rgba(5, 4, 14, 0.6);
}

.legend-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 11px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  cursor: pointer;
  transition: all 0.2s ease;
}

.legend-btn.active {
  background: rgba(255, 255, 255, 0.09);
  transform: scale(1.05);
}

.legend-btn.dimmed { opacity: 0.3; }

.legend-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.legend-text {
  font-size: 0.68rem;
  color: rgba(255, 255, 255, 0.75);
  white-space: nowrap;
}

/* Detail popup */
.diagram-detail {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 0 12px 12px;
  padding: 10px 12px;
  background: rgba(212, 175, 55, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(212, 175, 55, 0.12);
}

.detail-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 3px;
}

.detail-name {
  font-size: 0.82rem;
  font-weight: 700;
  color: #e6ca77;
  margin: 0 0 4px;
}

.detail-name span {
  color: rgba(255, 255, 255, 0.3);
  font-weight: 400;
  font-size: 0.72rem;
  margin-left: 4px;
}

.detail-desc {
  font-size: 0.76rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.55;
  margin: 0;
}

/* Transition */
.fade-slide-enter-active, .fade-slide-leave-active { transition: all 0.25s ease; }
.fade-slide-enter-from { opacity: 0; transform: translateY(-6px); }
.fade-slide-leave-to   { opacity: 0; transform: translateY(-6px); }
</style>
