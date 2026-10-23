<template>
  <div
    class="deck"
    :class="[`deck--${status}`, { 'deck--empty': cardCount === 0 }]"
    :aria-label="`Bộ bài tarot gồm ${cardCount} lá, trạng thái ${status}`"
  >
    <div v-if="status === 'lay'" class="deck__spread">
      <TarotCard
        v-for="index in laidCount"
        :key="`laid-${index}`"
        class="deck__card deck__card--laid"
        :style="{ '--card-order': index - 1 }"
        :is-card-set="true"
        :can-card-flip="false"
      />
    </div>

    <div v-else class="deck__stack" :style="{ '--stack-size': visibleStackCount }">
      <TarotCard
        v-for="index in visibleStackCount"
        :key="`stack-${index}`"
        class="deck__card deck__card--stacked"
        :style="{ '--card-order': index - 1 }"
        :is-card-set="true"
        :can-card-flip="false"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import TarotCard from './TarotCard.vue'

const props = defineProps({
  num: {
    type: Number,
    default: 78,
    validator: (value) => Number.isInteger(value) && value >= 0
  },
  status: {
    type: String,
    default: 'idle',
    validator: (value) => ['idle', 'shuffle', 'lay'].includes(value)
  },
  numLay: {
    type: Number,
    default: 5,
    validator: (value) => Number.isInteger(value) && value >= 0
  }
})

const cardCount = computed(() => Math.max(0, Math.floor(props.num)))
const laidCount = computed(() => Math.min(cardCount.value, Math.max(0, Math.floor(props.numLay))))

// A few offset layers communicate the full deck without rendering every card.
const visibleStackCount = computed(() => Math.min(cardCount.value, 8))
</script>

<style scoped>
.deck {
  --card-width: clamp(76px, 15vw, 150px);
  width: 100%;
  min-width: 0;
}

.deck__stack {
  position: relative;
  width: var(--card-width);
  aspect-ratio: 3 / 5;
  margin: 12px auto 0;
}

.deck__card {
  width: 100%;
  height: 100%;
  border-radius: clamp(6px, 1vw, 10px);
}

.deck__card--stacked {
  position: absolute;
  inset: 0;
  transform: translate(calc(var(--card-order) * 1.5px), calc(var(--card-order) * -1.5px));
  box-shadow: 0 3px 8px rgb(15 23 42 / 18%);
}

.deck--shuffle .deck__card--stacked {
  animation: shuffle 420ms ease-in-out infinite alternate;
  animation-delay: calc(var(--card-order) * -45ms);
}

.deck__spread {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 92px), 1fr));
  gap: clamp(8px, 2vw, 20px);
  justify-items: center;
  width: 100%;
}

.deck__card--laid {
  width: min(100%, 150px);
  height: auto;
  aspect-ratio: 3 / 5;
  animation: deal-in 420ms cubic-bezier(.2, .75, .3, 1) both;
  animation-delay: calc(var(--card-order) * 70ms);
}

.deck--empty .deck__stack {
  display: none;
}

@keyframes shuffle {
  from { transform: translate(calc(var(--card-order) * 1.5px - 7px), calc(var(--card-order) * -1.5px)) rotate(-4deg); }
  to { transform: translate(calc(var(--card-order) * 1.5px + 7px), calc(var(--card-order) * -1.5px)) rotate(4deg); }
}

@keyframes deal-in {
  from { opacity: 0; transform: translateY(-18px) rotate(-4deg); }
  to { opacity: 1; transform: translateY(0) rotate(0); }
}

@media (prefers-reduced-motion: reduce) {
  .deck--shuffle .deck__card--stacked,
  .deck__card--laid {
    animation: none;
  }
}
</style>
