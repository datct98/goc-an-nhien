<template>
  <div class="sb-container" :class="'sb-step-' + currentStep">
    <div class="sb-inner">
      <!-- Back Button -->
      <button class="sb-back-btn" @click="handleBack">
        <i class="pi pi-arrow-left"></i>
      </button>

      <!-- Step Indicator -->
      <div class="sb-steps">
        <div
          class="sb-step-dot"
          :class="{ active: currentStep === 1, completed: currentStep > 1 }"
        ></div>
        <div class="sb-step-line" :class="{ active: currentStep > 1 }"></div>
        <div
          class="sb-step-dot"
          :class="{ active: currentStep === 2, completed: currentStep > 2 }"
        ></div>
        <div class="sb-step-line" :class="{ active: currentStep > 2 }"></div>
        <div class="sb-step-dot" :class="{ active: currentStep === 3 }"></div>
      </div>

      <!-- Step Content -->
      <div class="sb-content">
        <Transition name="sb-fade" mode="out-in">
          <StepInfo
            v-if="currentStep === 1"
            key="step1"
            :title="title"
            :participants="participants"
            @update:title="title = $event"
            @add-participant="addParticipant"
            @remove-participant="removeParticipant"
          />
          <StepExpenses
            v-else-if="currentStep === 2"
            key="step2"
            :expenses="expenses"
            :participants="participants"
            @add-expense="addExpense"
            @remove-expense="removeExpense"
            @update-expense="updateExpense"
            @toggle-participant="toggleExpenseParticipant"
            @toggle-all="toggleAllParticipants"
          />
          <StepResult
            v-else
            key="step3"
            :results="finalResult"
            :total="totalAmount"
            :title="title"
            :participants="participants"
            :summary="summary"
          />
        </Transition>
      </div>

      <!-- Bottom Actions -->
      <div class="sb-bottom">
        <template v-if="currentStep === 1">
          <button
            class="sb-btn-primary"
            @click="goToStep(2)"
            :disabled="!canProceedStep1"
          >
            Tiếp tục →
          </button>
        </template>
        <template v-else-if="currentStep === 2">
          <button
            class="sb-btn-primary"
            @click="goToStep(3)"
            :disabled="!canProceedStep2"
          >
            Xem kết quả →
          </button>
        </template>
        <template v-else>
          <button class="sb-btn-secondary" @click="shareResult">Chia sẻ</button>
          <button class="sb-btn-primary" @click="resetAll">Chia tiền mới</button>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import StepInfo from "./StepInfo.vue";
import StepExpenses from "./StepExpenses.vue";
import StepResult from "./StepResult.vue";

const router = useRouter();

// State
const currentStep = ref(1);
const title = ref("");
const participants = ref([]);
const summary = ref();
const expenses = ref([]);
const finalResult = ref();
const { $api } = useNuxtApp();
const colors = ["#d4af37", "#c9a84c", "#e8c35a", "#b8963c", "#a88732", "#dbb94d"];

// Computed
const canProceedStep1 = computed(() => {
  return title.value.trim() !== "" && participants.value.length >= 2;
});

const canProceedStep2 = computed(() => {
  return (
    expenses.value.length > 0 &&
    expenses.value.every(
      (e) => e.name.trim() !== "" && e.amount > 0 && e.selectedParticipants.length > 0
    )
  );
});

const totalAmount = ref(0);

const calculatedResults = async () => {
  const totals = {};
  const body = {
    title: title.value,
    expenses: expenses.value.map((item, index) => ({
      name: item.name,
      amount: item.amount,
      participants: item.selectedParticipants,
    })),
  };
  const res = await $api.sendPostApi(
    "v1/extensions/bill-split/calculate",
    body,
    "benefit"
  );
  var result = res.data;
  totalAmount.value = result.totalAmount;
  participants.value = result.details;
  summary.value = result.summary;
  // Assign colors
  finalResult.value = participants.value.map((item, index) => ({
    name: item.expenseName,
    amount: item.amount,
    breakdown: item.breakdown,
    color: colors[index % colors.length],
  }));
};

// Methods
const addParticipant = (name) => {
  if (name.trim() && !participants.value.includes(name.trim())) {
    participants.value.push(name.trim());
  }
};

const removeParticipant = (name) => {
  participants.value = participants.value.filter((p) => p !== name);
  // Also remove from expenses
  expenses.value.forEach((e) => {
    e.selectedParticipants = e.selectedParticipants.filter((p) => p !== name);
  });
};

const addExpense = () => {
  expenses.value.push({
    id: Date.now(),
    name: "",
    amount: 0,
    selectedParticipants: [],
  });
};

const removeExpense = (index) => {
  expenses.value.splice(index, 1);
};

const updateExpense = ({ index, field, value }) => {
  if (expenses.value[index]) {
    expenses.value[index][field] = value;
  }
};

const toggleExpenseParticipant = ({ expenseIndex, participantName }) => {
  const expense = expenses.value[expenseIndex];
  if (!expense) return;
  const idx = expense.selectedParticipants.indexOf(participantName);
  if (idx > -1) {
    expense.selectedParticipants.splice(idx, 1);
  } else {
    expense.selectedParticipants.push(participantName);
  }
};

const toggleAllParticipants = (expenseIndex) => {
  const expense = expenses.value[expenseIndex];
  if (!expense) return;
  if (expense.selectedParticipants.length === participants.value.length) {
    expense.selectedParticipants = [];
  } else {
    expense.selectedParticipants = [...participants.value];
  }
};

const goToStep = (step) => {
  if (step === 3) {
    calculatedResults();
  }
  currentStep.value = step;
};

const handleBack = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  } else {
    router.push("/tien-ich");
  }
};

const shareResult = () => {
  let text = `💰 ${title.value}\n\n`;
  finalResult.value.forEach((r) => {
    text += `• ${r.name}: ${formatCurrency(r.amount)}\n`;
  });
  text += `\nTổng: ${formatCurrency(totalAmount.value)}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  }
  // Try native share
  if (navigator.share) {
    navigator.share({
      title: `Chia tiền: ${title.value}`,
      text: text,
    });
  }
};

const resetAll = () => {
  currentStep.value = 1;
  title.value = "";
  participants.value = [];
  expenses.value = [];
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat("vi-VN").format(Math.round(value)) + "đ";
};

// Expose formatCurrency for child components
provide("formatCurrency", formatCurrency);
</script>

<style src="./SplitBillMobile.css"></style>
