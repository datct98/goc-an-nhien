<template>
    <div>
        <h1 class="sb-header-title">Chia Tiền</h1>
        <p class="sb-header-sub">Nhập thông tin</p>

        <div class="sb-form-group">
            <label class="sb-label">Tiêu đề</label>
            <input
                class="sb-input"
                type="text"
                placeholder="VD: Du lịch biển HP"
                :value="title"
                @input="$emit('update:title', $event.target.value)"
            />

            <div style="margin-top: 20px;">
                <label class="sb-label">Người tham gia</label>
                <div class="sb-tags-wrap">
                    <span
                        v-for="person in participants"
                        :key="person"
                        class="sb-tag"
                    >
                        {{ person }}
                        <span class="sb-tag-remove" @click="$emit('remove-participant', person)">✕</span>
                    </span>
                    <span
                        v-if="!showAddInput"
                        class="sb-tag-add"
                        @click="showAddInput = true"
                    >
                        + Thêm
                    </span>
                </div>

                <!-- Add name input -->
                <div v-if="showAddInput" class="sb-add-name-row">
                    <input
                        ref="addNameRef"
                        class="sb-add-name-input"
                        type="text"
                        placeholder="Nhập tên..."
                        v-model="newName"
                        @keyup.enter="handleAddName"
                    />
                    <button class="sb-add-name-btn" @click="handleAddName">Thêm</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, nextTick, watch } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    participants: {
        type: Array,
        default: () => [],
    },
});

const emit = defineEmits(['update:title', 'add-participant', 'remove-participant']);

const showAddInput = ref(false);
const newName = ref('');
const addNameRef = ref(null);

watch(showAddInput, async (val) => {
    if (val) {
        await nextTick();
        addNameRef.value?.focus();
    }
});

const handleAddName = () => {
    if (newName.value.trim()) {
        emit('add-participant', newName.value.trim());
        newName.value = '';
        // Keep input open for adding more names
    }
};
</script>
