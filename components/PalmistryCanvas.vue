<template>
  <div ref="containerRef" class="palm-canvas-wrap">
    <img
      ref="imgRef"
      :src="imageSrc"
      alt="Ảnh bàn tay"
      class="palm-canvas-img"
      @load="onImageLoad"
    />
    <canvas ref="canvasRef" class="palm-canvas-overlay" />
    <!-- Legend -->
    <div class="palm-legend">
      <button
        v-for="(line, i) in linesWithPoints"
        :key="i"
        class="palm-legend-item"
        :class="{ active: activeLine === i, dimmed: activeLine !== null && activeLine !== i }"
        @click="toggleLine(i)"
      >
        <span class="palm-legend-dot" :style="{ background: line.color, boxShadow: `0 0 6px ${line.color}` }" />
        <span class="palm-legend-name">{{ line.name }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PalmLine } from '~/composables/usePalmistry'

const props = defineProps<{
  imageSrc: string
  lines: PalmLine[]
}>()

const emit = defineEmits<{
  (e: 'line-click', index: number): void
}>()

const containerRef = ref<HTMLDivElement | null>(null)
const imgRef = ref<HTMLImageElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const activeLine = ref<number | null>(null)
const imageLoaded = ref(false)

// Only lines that have points data
const linesWithPoints = computed(() => props.lines.filter(l => l.points && l.points.length >= 2))

// ─── Draw ──────────────────────────────────────────────────────────────────
function drawLines(highlightIndex: number | null = null) {
  const canvas = canvasRef.value
  const img = imgRef.value
  if (!canvas || !img || !imageLoaded.value) return

  const { width, height } = img.getBoundingClientRect()
  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext('2d')
  if (!ctx) return
  ctx.clearRect(0, 0, width, height)

  linesWithPoints.value.forEach((line, idx) => {
    if (!line.points || line.points.length < 2) return

    const isActive = highlightIndex === null || highlightIndex === idx
    const alpha = isActive ? 1 : 0.18
    const lineWidth = isActive ? 3.5 : 2

    ctx.save()
    ctx.globalAlpha = alpha
    ctx.lineWidth = lineWidth
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.strokeStyle = line.color

    // Glow effect for active line
    if (isActive && highlightIndex !== null) {
      ctx.shadowColor = line.color
      ctx.shadowBlur = 14
    } else if (highlightIndex === null) {
      ctx.shadowColor = line.color
      ctx.shadowBlur = 6
    }

    // Map % coords to canvas pixels
    const pts = line.points.map(([px, py]) => ({
      x: (px / 100) * width,
      y: (py / 100) * height,
    }))

    ctx.beginPath()
    ctx.moveTo(pts[0].x, pts[0].y)

    if (pts.length === 2) {
      ctx.lineTo(pts[1].x, pts[1].y)
    } else {
      // Smooth catmull-rom through points
      for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[Math.max(i - 1, 0)]
        const p1 = pts[i]
        const p2 = pts[i + 1]
        const p3 = pts[Math.min(i + 2, pts.length - 1)]
        const cp1x = p1.x + (p2.x - p0.x) / 6
        const cp1y = p1.y + (p2.y - p0.y) / 6
        const cp2x = p2.x - (p3.x - p1.x) / 6
        const cp2y = p2.y - (p3.y - p1.y) / 6
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y)
      }
    }
    ctx.stroke()
    ctx.restore()
  })
}

// ─── Animated draw-in on load ──────────────────────────────────────────────
function animateDraw() {
  const canvas = canvasRef.value
  const img = imgRef.value
  if (!canvas || !img) return

  const { width, height } = img.getBoundingClientRect()
  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const duration = 1200 // ms total for all lines
  const perLine = duration / Math.max(linesWithPoints.value.length, 1)
  const startTime = performance.now()

  function frame(now: number) {
    const elapsed = now - startTime
    ctx!.clearRect(0, 0, width, height)

    linesWithPoints.value.forEach((line, idx) => {
      if (!line.points || line.points.length < 2) return

      const lineStart = idx * perLine
      const lineEnd = lineStart + perLine
      const t = Math.min(Math.max((elapsed - lineStart) / perLine, 0), 1)
      if (t <= 0) return

      const pts = line.points.map(([px, py]) => ({
        x: (px / 100) * width,
        y: (py / 100) * height,
      }))

      ctx!.save()
      ctx!.globalAlpha = t
      ctx!.lineWidth = 3.5
      ctx!.lineCap = 'round'
      ctx!.lineJoin = 'round'
      ctx!.strokeStyle = line.color
      ctx!.shadowColor = line.color
      ctx!.shadowBlur = 8

      // Draw portion of path up to t
      const totalPts = Math.max(Math.round(t * (pts.length - 1)), 1)
      const drawPts = pts.slice(0, totalPts + 1)

      ctx!.beginPath()
      ctx!.moveTo(drawPts[0].x, drawPts[0].y)
      for (let i = 1; i < drawPts.length; i++) {
        ctx!.lineTo(drawPts[i].x, drawPts[i].y)
      }
      ctx!.stroke()
      ctx!.restore()
    })

    if (elapsed < duration + perLine) {
      requestAnimationFrame(frame)
    } else {
      // Final static draw
      drawLines(null)
    }
  }

  requestAnimationFrame(frame)
}

// ─── Events ────────────────────────────────────────────────────────────────
function onImageLoad() {
  imageLoaded.value = true
  nextTick(() => animateDraw())
}

function toggleLine(idx: number) {
  if (activeLine.value === idx) {
    activeLine.value = null
    drawLines(null)
  } else {
    activeLine.value = idx
    drawLines(idx)
    emit('line-click', idx)
  }
}

// ─── Resize handling ───────────────────────────────────────────────────────
let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  if (containerRef.value) {
    resizeObserver = new ResizeObserver(() => {
      if (imageLoaded.value) drawLines(activeLine.value)
    })
    resizeObserver.observe(containerRef.value)
  }
})

onUnmounted(() => {
  resizeObserver?.disconnect()
})

// Re-draw when lines change (e.g. result loaded)
watch(() => props.lines, () => {
  if (imageLoaded.value) nextTick(() => animateDraw())
}, { deep: true })

watch(() => props.imageSrc, () => {
  imageLoaded.value = false
  activeLine.value = null
})
</script>

<style scoped>
.palm-canvas-wrap {
  position: relative;
  width: 100%;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(212, 175, 55, 0.25);
  background: #0a0a0f;
}

.palm-canvas-img {
  width: 100%;
  display: block;
  border-radius: 14px;
}

.palm-canvas-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-radius: 14px;
}

/* Legend */
.palm-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 10px 12px;
  background: rgba(5, 5, 15, 0.85);
  border-top: 1px solid rgba(212, 175, 55, 0.1);
}

.palm-legend-item {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  cursor: pointer;
  transition: all 0.2s ease;
}

.palm-legend-item.active {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.25);
  transform: scale(1.05);
}

.palm-legend-item.dimmed {
  opacity: 0.35;
}

.palm-legend-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.palm-legend-name {
  font-size: 0.68rem;
  color: rgba(255, 255, 255, 0.75);
  white-space: nowrap;
  font-weight: 500;
}
</style>
