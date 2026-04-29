<template>
    <div>
        <h1 class="sb-header-title">Khoản chi</h1>
        <p class="sb-header-sub">Thêm các khoản chi tiêu</p>

        <!-- Expense Cards -->
        <div v-for="(expense, index) in expenses" :key="expense.id" class="sb-expense-card">
            <div class="sb-expense-header">
                <div class="sb-expense-name-wrap">
                    <input
                        class="sb-expense-name"
                        type="text"
                        placeholder="Tên khoản chi"
                        :value="expense.name"
                        @input="$emit('update-expense', { index, field: 'name', value: $event.target.value })"
                    />
                    <div class="sb-expense-divider"></div>
                    <input
                        class="sb-expense-amount"
                        type="number"
                        inputmode="numeric"
                        placeholder="0đ"
                        :value="expense.amount || ''"
                        @input="$emit('update-expense', { index, field: 'amount', value: Number($event.target.value) || 0 })"
                    />
                </div>
                <button
                    v-if="expenses.length > 1"
                    class="sb-expense-delete"
                    @click="$emit('remove-expense', index)"
                >
                    <i class="pi pi-trash"></i>
                </button>
            </div>

            <!-- Participant Selection -->
            <div class="sb-expense-participants">
                <span
                    v-for="person in participants"
                    :key="person"
                    class="sb-expense-tag"
                    :class="{ selected: expense.selectedParticipants.includes(person) }"
                    @click="$emit('toggle-participant', { expenseIndex: index, participantName: person })"
                >
                    {{ person }}
                </span>
                <span
                    class="sb-expense-tag-all"
                    :class="{ selected: expense.selectedParticipants.length === participants.length }"
                    @click="$emit('toggle-all', index)"
                >
                    Tất cả
                </span>
            </div>

            <!-- Average calculation -->
            <div v-if="expense.amount > 0 && expense.selectedParticipants.length > 0" class="sb-expense-avg">
                = {{ formatCurrency(expense.amount / expense.selectedParticipants.length) }}/người
            </div>
        </div>

        <!-- Add Expense Button -->
        <button class="sb-add-expense" @click="$emit('add-expense')">
            + Thêm
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    expenses: {
        type: Array,
        default: () => [],
    },
    participants: {
        type: Array,
        default: () => [],
    },
});

defineEmits(['add-expense', 'remove-expense', 'update-expense', 'toggle-participant', 'toggle-all']);

const formatCurrency = inject('formatCurrency');
</script>
