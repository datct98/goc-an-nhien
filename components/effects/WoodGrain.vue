<template>
  <div class="wood-grain-wrapper" :style="{ zIndex: zIndex }">
    <div class="wood-surface">
      <div class="grain-overlay"></div>
      <div class="knots-overlay"></div>
      <div class="vignette"></div>
    </div>
    <canvas ref="antCanvas" class="ant-canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

const props = defineProps({
  zIndex: {
    type: Number,
    default: 0
  },
  antCount: {
    type: Number,
    default: 4
  },
  antSpeedScale: {
    type: Number,
    default: 1
  }
});

const antCanvas = ref(null);
let ctx = null;
let ants = [];
let animationFrame = null;
let width = 0;
let height = 0;

class Ant {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.init(true);
  }

  init(firstTime = false) {
    this.x = Math.random() * this.w;
    if (firstTime) {
      this.y = Math.random() * this.h;
    } else {
      this.y = Math.random() > 0.5 ? -20 : this.h + 20;
    }

    this.speed = (0.3 + Math.random() * 0.7) * props.antSpeedScale;
    this.direction = Math.random() > 0.5 ? 1 : -1;
    this.size = 1.0 + Math.random() * 1.2;
    this.wiggle = Math.random() * Math.PI * 2;
    this.wiggleSpeed = 0.04 + Math.random() * 0.08;
    this.pauseCounter = 0;
    this.isPaused = false;

    // Slight side movement
    this.driftX = (Math.random() - 0.5) * 0.1;
  }

  update() {
    if (this.isPaused) {
      this.pauseCounter--;
      if (this.pauseCounter <= 0) {
        this.isPaused = false;
      }
      return;
    }

    // Occasional pause logic
    if (Math.random() < 0.003) {
      this.isPaused = true;
      this.pauseCounter = 30 + Math.random() * 60;
    }

    this.y += this.speed * this.direction;
    this.wiggle += this.wiggleSpeed;
    this.x += Math.sin(this.wiggle) * 0.2 + this.driftX;

    if (this.y > this.h + 50 || this.y < -50) {
      this.init();
    }

    // Keep within horizontal bounds
    if (this.x < 0) this.x = this.w;
    if (this.x > this.w) this.x = 0;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);

    // Rotate to face direction
    const moveAngle = this.direction === 1 ? Math.PI : 0;
    ctx.rotate(moveAngle + Math.sin(this.wiggle) * 0.15);

    // Ant Color - Dark reddish brown/black
    ctx.fillStyle = '#121212';

    // Abdomen (Tail)
    ctx.beginPath();
    ctx.ellipse(0, 1.4 * this.size, 0.7 * this.size, 1.1 * this.size, 0, 0, Math.PI * 2);
    ctx.fill();

    // Thorax (Middle)
    ctx.beginPath();
    ctx.ellipse(0, 0, 0.5 * this.size, 0.7 * this.size, 0, 0, Math.PI * 2);
    ctx.fill();

    // Head
    ctx.beginPath();
    ctx.ellipse(0, -1.1 * this.size, 0.4 * this.size, 0.5 * this.size, 0, 0, Math.PI * 2);
    ctx.fill();

    // Tiny legs
    ctx.strokeStyle = 'rgba(18, 18, 18, 0.8)';
    ctx.lineWidth = 2;
    const legWiggle = Math.sin(this.wiggle * 4) * 0.3;

    for (let i = -1; i <= 1; i++) {
      const yOffset = i * 0.5 * this.size;
      // Left legs
      ctx.beginPath();
      ctx.moveTo(-0.4 * this.size, yOffset);
      ctx.lineTo(-1.2 * this.size, yOffset + legWiggle * (i + 2));
      ctx.stroke();

      // Right legs
      ctx.beginPath();
      ctx.moveTo(0.4 * this.size, yOffset);
      ctx.lineTo(1.2 * this.size, yOffset - legWiggle * (i + 2));
      ctx.stroke();
    }

    ctx.restore();
  }
}

const resize = () => {
  if (!antCanvas.value) return;
  const parent = antCanvas.value.parentElement;
  if (!parent) return;

  width = parent.clientWidth;
  height = parent.clientHeight;
  antCanvas.value.width = width;
  antCanvas.value.height = height;

  ants.forEach(ant => {
    ant.w = width;
    ant.h = height;
  });
};

const animate = () => {
  if (!ctx) return;
  ctx.clearRect(0, 0, width, height);

  ants.forEach(ant => {
    ant.update();
    ant.draw(ctx);
  });

  animationFrame = requestAnimationFrame(animate);
};

onMounted(async () => {
  await nextTick();
  ctx = antCanvas.value.getContext('2d');
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < props.antCount; i++) {
    ants.push(new Ant(width, height));
  }

  animate();
});

onUnmounted(() => {
  window.removeEventListener('resize', resize);
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
});
</script>

<style scoped>
.wood-grain-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
  z-index: 0;
}

.wood-surface {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #3e2723;
  /* Deep Mahogani / Dark Wood */
  background-image: linear-gradient(to right, #3e2723 0%, #4e342e 50%, #3e2723 100%);
}

/* Base wood texture using SVG noise */
.grain-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.35;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005 0.2' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  background-size: 512px 100%;
}

/* Secondary grain for more complexity */
.knots-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='woodFilter'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.01 0.05' numOctaves='2' stitchTiles='stitch'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='20'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23woodFilter)'/%3E%3C/svg%3E");
}

/* Subtle darkening at edges for depth */
.vignette {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, transparent 40%, rgba(0, 0, 0, 0.3) 100%);
}

.ant-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  image-rendering: pixelated;
  /* Sharp ants */
}
</style>
