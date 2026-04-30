<template>
  <div>
    <h1 class="sb-header-title">Kết quả</h1>

    <!-- Total -->
    <div class="sb-result-total">
      <div class="sb-result-total-amount">{{ formatCurrency(total) }}</div>
    </div>

    <!-- Results List -->
    <div class="sb-result-list">
      <h3 class="text-2xl text-center" style="color: rgb(255 247 141)">
        Hoá đơn chia tiền
      </h3>
      <template v-for="(item, index) in results" :key="index">
        <div>
          <div class="sb-result-item">
            <div class="sb-result-item-left">
              <div class="sb-result-dot" :style="{ backgroundColor: item.color }"></div>
              <span class="sb-result-name font-semibold">{{ item.name }}</span>
            </div>
            <span class="sb-result-amount font-semibold">{{
              formatCurrency(item.amount)
            }}</span>
          </div>
          <span class="text-xs">Mỗi người phải trả : </span>
          <div class="sb-result-item-detail pb-5 mb-5">
            <div v-for="(amount, name) in item.breakdown" :key="name" class="pl-5">
              <div
                class="w-full flex justify-between"
                style="border-bottom: 1px solid rgba(255, 255, 255, 0.05)"
              >
                <span class="sb-result-name text-sm font-thin">{{ name }}</span>
                <span class="sb-result-amount text-sm font-thin">{{
                  formatCurrency(amount)
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- Total Summary -->
      <div class="pb-5">
        <h3 class="text-xl text-center pb-5" style="color: rgb(255 247 141)">
          Tổng số tiền mỗi người phải đóng
        </h3>
        <div v-for="(amount, name) in summary" :key="name" class="pl-5">
          <div
            class="w-full flex justify-between"
            style="border-bottom: 1px solid rgba(255, 255, 255, 0.05)"
          >
            <span class="sb-result-name text-sm font-thin">{{ name }}</span>
            <span class="sb-result-amount text-sm font-thin">{{
              formatCurrency(amount)
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  results: {
    type: Array,
    default: () => [],
  },
  total: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    default: "",
  },
  participants: {
    type: Array,
    default: () => [],
  },
  summary: {
    type: Object,
  },
});

const formatCurrency = inject("formatCurrency");
</script>
