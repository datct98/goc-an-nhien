<template>
  <div
    class="deck"
    :class="[`deck--${status}`, { 'deck--empty': cardCount === 0 }]"
    :aria-label="`Bộ bài tarot gồm ${cardCount} lá, trạng thái ${status}`"
  >
    <div class="deck__stack" :style="{ '--stack-size': visibleStackCount }">
      <TarotCard
        v-for="index in visibleStackCount"
        :key="`stack-${index}`"
        class="deck__card deck__card--stacked"
        :style="{
          '--card-order': index - 1,
          '--shuffle-out-x': index % 2 ? '-10px' : '10px',
          '--shuffle-in-x': index % 2 ? '10px' : '-10px',
          '--shuffle-angle': index % 2 ? '-1.5deg' : '1.5deg',
          '--shuffle-angle-reverse': index % 2 ? '1.5deg' : '-1.5deg'
        }"
        :is-card-set="true"
        :can-card-flip="false"
      />
    </div>

    <div v-if="status === 'lay'" class="deck__spread">
      <TarotCard
        v-for="(card, index) in laidCards"
        :key="card.id ?? `laid-${index}`"
        class="deck__card deck__card--laid"
        :style="{ '--card-order': index }"
        :head="card.head"
        :img-src="card.imgSrc"
        :footer="card.footer"
        :is-card-set="true"
        :can-card-flip="true"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import TarotCard from './TarotCard.vue'

const props = defineProps({
  list: {
    type: Array,
    default: () => []
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

const cardCount = computed(() => props.list.length)
const laidCards = computed(() =>
  props.list.slice(0, Math.min(cardCount.value, Math.max(0, Math.floor(props.numLay))))
)

// A few offset layers communicate the remaining deck without rendering every card.
const remainingCardCount = computed(() =>
  props.status === 'lay' ? cardCount.value - laidCards.value.length : cardCount.value
)
const visibleStackCount = computed(() => Math.min(remainingCardCount.value, 8))
</script>

<style scoped>
.deck {
  width: 100%;
  min-width: 0;
}

.deck--lay {
  display: grid;
  grid-template-rows: auto auto;
  row-gap: clamp(18px, 4vw, 36px);
}

.deck__stack {
  position: relative;
  width: 25vw;
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
  animation: shuffle 1.15s cubic-bezier(.45, 0, .55, 1) infinite;
  animation-delay: calc(var(--card-order) * -55ms);
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
  animation: deal-in 650ms cubic-bezier(.2, .75, .3, 1) both;
  animation-delay: calc(var(--card-order) * 110ms);
}

.deck--empty .deck__stack {
  display: none;
}

@keyframes shuffle {
  0%, 12% {
    transform: translate(calc(var(--card-order) * 1.5px), calc(var(--card-order) * -1.5px));
  }
  28%, 42% {
    transform: translate(
      calc(var(--card-order) * 1.5px + var(--shuffle-out-x)),
      calc(var(--card-order) * -1.5px - 10px)
    ) rotate(var(--shuffle-angle));
  }
  60%, 76% {
    transform: translate(
      calc(var(--card-order) * 1.5px + var(--shuffle-in-x)),
      calc(var(--card-order) * -1.5px + 10px)
    ) rotate(var(--shuffle-angle-reverse));
  }
  100% {
    transform: translate(calc(var(--card-order) * 1.5px), calc(var(--card-order) * -1.5px));
  }
}

@keyframes deal-in {
  from { opacity: 0; transform: translateY(calc(-100% - 36px)) rotate(-4deg); }
  to { opacity: 1; transform: translateY(0) rotate(0); }
}

@media (prefers-reduced-motion: reduce) {
  .deck--shuffle .deck__card--stacked,
  .deck__card--laid {
    animation: none;
  }
}
</style>
