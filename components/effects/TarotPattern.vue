<template>
  <div class="tarot-pattern-container">
    <svg viewBox="0 0 1000 700" fill="none" xmlns="http://www.w3.org/2000/svg" class="tarot-svg">
      <!-- Outer Border Frame -->
      <g class="frame">
        <rect x="20" y="20" width="960" height="660" stroke="white" stroke-width="0.5" />
        <rect x="35" y="35" width="930" height="630" stroke="white" stroke-width="1" />

        <!-- Stars at corners -->
        <g class="corner-stars">
          <use href="#star" x="20" y="20" />
          <use href="#star" x="980" y="20" />
          <use href="#star" x="20" y="680" />
          <use href="#star" x="980" y="680" />
        </g>

        <!-- Midpoint Ornaments -->
        <g class="mid-ornaments">
          <!-- Top Mid -->
          <g transform="translate(500, 20)">
            <use href="#star-large" x="0" y="0" />
            <path d="M-100 0 L-20 0 M20 0 L100 0" stroke="white" stroke-width="0.5" />
          </g>
          <!-- Bottom Mid -->
          <g transform="translate(500, 680)">
            <use href="#star-large" x="0" y="0" />
            <path d="M-100 0 L-20 0 M20 0 L100 0" stroke="white" stroke-width="0.5" />
          </g>
          <!-- Left Mid -->
          <g transform="translate(20, 350) rotate(90)">
            <use href="#star-large" x="0" y="0" />
            <path d="M-50 0 L-20 0 M20 0 L50 0" stroke="white" stroke-width="0.5" />
          </g>
          <!-- Right Mid -->
          <g transform="translate(980, 350) rotate(90)">
            <use href="#star-large" x="0" y="0" />
            <path d="M-50 0 L-20 0 M20 0 L50 0" stroke="white" stroke-width="0.5" />
          </g>
        </g>
      </g>

      <!-- Corner Filigree -->
      <!-- <g class="corners">
        <use href="#filigree" transform="translate(50, 50)" />
        <use href="#filigree" transform="translate(950, 50) scale(-1, 1)" />
        <use href="#filigree" transform="translate(50, 650) scale(1, -1)" />
        <use href="#filigree" transform="translate(950, 650) scale(-1, -1)" />
      </g> -->

      <!-- Mandala Background Grid -->
      <!-- <g transform="translate(500, 350)" class="mandala-grid">
        <path d="M -300 0 L 0 -300 L 300 0 L 0 300 Z" stroke="white" stroke-width="0.3" stroke-dasharray="2 4" />
        <path d="M -220 0 L 0 -220 L 220 0 L 0 220 Z" stroke="white" stroke-width="0.5" />
      </g> -->

      <!-- Central Mandala -->
      <g transform="translate(500, 350)" class="mandala">
        <!-- Concentric Circles -->
        <circle r="220" stroke="white" stroke-width="0.5" stroke-dasharray="2 4" />
        <circle r="200" stroke="white" stroke-width="0.3" />
        <circle r="180" stroke="white" stroke-width="0.8" />
        <circle r="170" stroke="white" stroke-width="0.3" />
        <circle r="145" stroke="white" stroke-width="0.5" stroke-dasharray="5 5" />
        <circle r="140" stroke="white" stroke-width="1" />
        <circle r="80" stroke="white" stroke-width="0.5" />

        <!-- Large Star in Center -->
        <use href="#radial-star" scale="1.5" />

        <!-- Scattered stars on ring 200 -->
        <g v-for="i in 12" :key="'ringstar-' + i" :transform="`rotate(${i * 30})`">
          <use href="#star-tiny" x="0" y="-200" />
        </g>

        <!-- Moons and Celestial points -->
        <g transform="rotate(0)">
          <use href="#moon-full" x="0" y="-140" />
          <use href="#moon-crescent" x="0" y="-115" transform="rotate(180, 0, -115)" />
        </g>
        <g transform="rotate(90)">
          <use href="#moon-half" x="0" y="-140" />
        </g>
        <g transform="rotate(180)">
          <use href="#moon-full" x="0" y="-140" />
        </g>
        <g transform="rotate(270)">
          <use href="#moon-half" x="0" y="-140" transform="scale(-1, 1)" />
        </g>

        <!-- Vertical nodes -->
        <g transform="rotate(45)">
          <circle cx="0" cy="-220" r="1.5" fill="white" />
        </g>
        <g transform="rotate(135)">
          <circle cx="0" cy="-220" r="1.5" fill="white" />
        </g>
        <g transform="rotate(225)">
          <circle cx="0" cy="-220" r="1.5" fill="white" />
        </g>
        <g transform="rotate(315)">
          <circle cx="0" cy="-220" r="1.5" fill="white" />
        </g>

        <!-- Outer spikes / Points -->
        <!-- <g v-for="i in 8" :key="i" :transform="`rotate(${i * 45})`">
          <path d="M 0 -180 L 0 -260" stroke="white" stroke-width="0.5" stroke-dasharray="2 2" />
          <path d="M 0 -220 L 0 -260" stroke="white" stroke-width="0.8" />
          <circle cx="0" cy="-260" r="2" fill="white" />
        </g> -->
      </g>

      <!-- Horizontal Center Line with Moons -->
      <g class="horizontal-axis">
        <line x1="50" y1="350" x2="280" y2="350" stroke="white" stroke-width="0.5" stroke-dasharray="1 5" />
        <line x1="720" y1="350" x2="950" y2="350" stroke="white" stroke-width="0.5" stroke-dasharray="1 5" />

        <g transform="translate(180, 350)">
          <circle r="25" stroke="white" stroke-width="0.5" />
          <circle r="35" stroke="white" stroke-width="0.2" stroke-dasharray="2 2" />
          <use href="#moon-half" scale="0.8" rotate="90" />
          <!-- Tiny star next to it -->
          <use href="#star" x="-50" y="0" scale="0.5" />
        </g>
        <g transform="translate(820, 350)">
          <circle r="25" stroke="white" stroke-width="0.5" />
          <circle r="35" stroke="white" stroke-width="0.2" stroke-dasharray="2 2" />
          <use href="#moon-half" scale="0.8" rotate="-90" transform="scale(-1, 1)" />
          <use href="#star" x="50" y="0" scale="0.5" />
        </g>
      </g>

      <defs>
        <!-- Reusable Elements -->
        <g id="star">
          <path d="M 0 -5 L 1 -1 L 5 0 L 1 1 L 0 5 L -1 1 L -5 0 L -1 -1 Z" fill="white" />
        </g>

        <g id="star-tiny">
          <circle r="1.5" fill="white" />
          <path d="M 0 -4 L 0 4 M -4 0 L 4 0" stroke="white" stroke-width="0.3" />
        </g>

        <g id="star-large">
          <path d="M 0 -10 L 1.5 -1.5 L 10 0 L 1.5 1.5 L 0 10 L -1.5 1.5 L -10 0 L -1.5 -1.5 Z" fill="white" />
        </g>

        <g id="radial-star">
          <path v-for="i in 16" :key="i" :d="`M 0 0 L 0 ${i % 4 === 0 ? -70 : (i % 2 === 0 ? -40 : -20)}`"
            stroke="white" stroke-width="1" :transform="`rotate(${i * 22.5})`" />
          <circle r="5" fill="white" />
        </g>

        <g id="moon-full">
          <circle r="15" stroke="white" stroke-width="1" />
          <circle r="8" stroke="white" stroke-width="0.5" fill="white" fill-opacity="0.1" />
        </g>

        <g id="moon-half">
          <path d="M 0 -10 A 10 10 0 0 1 0 10 L 0 -10" fill="white" />
          <circle r="10" stroke="white" stroke-width="0.5" fill="none" />
        </g>

        <g id="moon-crescent">
          <path d="M 0 -8 A 8 8 0 1 0 0 8 A 6 6 0 1 1 0 -8" fill="white" />
        </g>

        <g id="filigree">
          <!-- Main curves -->
          <path d="M 0 0 C 40 10 60 40 80 80" stroke="white" stroke-width="1" fill="none" />
          <path d="M 0 0 C 10 40 40 60 80 80" stroke="white" stroke-width="1" fill="none" />
          <!-- Swirls -->
          <path d="M 20 10 Q 30 10 30 20 Q 30 30 20 30 Q 10 30 10 20 Q 10 15 15 15" stroke="white" stroke-width="0.5"
            fill="none" />
          <path d="M 10 20 Q 10 30 20 30 Q 30 30 30 20 Q 30 10 20 10" stroke="white" stroke-width="0.5" fill="none" />
          <circle cx="80" cy="80" r="3" stroke="white" fill="none" />
          <!-- Decorative dots -->
          <circle cx="45" cy="45" r="2" fill="white" />
          <circle cx="60" cy="60" r="1.5" fill="white" />
          <!-- Arcs -->
          <path d="M 50 10 A 40 40 0 0 1 70 30" stroke="white" stroke-width="0.3" stroke-dasharray="2 2" fill="none" />
        </g>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.tarot-pattern-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  opacity: 0.8;
}

.tarot-svg {
  width: 100%;
  height: auto;
}

.mandala {
  transform-origin: center;
}

@keyframes rotate-slow {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* Optional: add a very subtle rotation to the mandala */
/* .mandala { animation: rotate-slow 120s linear infinite; } */
</style>
