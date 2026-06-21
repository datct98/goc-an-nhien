<script setup lang="ts">
import { ref, watch } from 'vue';

interface UserData {
  name: string;
  birthPlace: string;
  gender: 'male' | 'female';
}

const props = defineProps<{
  modelValue?: UserData
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', data: UserData): void
}>();

const name = ref(props.modelValue?.name || '');
const birthPlace = ref(props.modelValue?.birthPlace || '');
const gender = ref<'male' | 'female'>(props.modelValue?.gender || 'male');

const updateModel = () => {
  emit('update:modelValue', {
    name: name.value,
    birthPlace: birthPlace.value,
    gender: gender.value
  });
};

// Watch for internal changes to emit updates
watch([name, birthPlace, gender], () => {
  updateModel();
});

const setGender = (val: 'male' | 'female') => {
  gender.value = val;
};
</script>

<template>
  <div class="input-form-container">
    <div class="form-group">
      <label for="user-name">Họ và tên</label>
      <input id="user-name" type="text" v-model="name" placeholder="Enter your name" class="text-input" />
    </div>

    <div class="form-group">
      <label for="birth-place">Nơi sinh</label>
      <input id="birth-place" type="text" v-model="birthPlace" placeholder="Enter your place of birth"
        class="text-input" />
    </div>

    <div class="form-group">
      <label>Giới tính</label>
      <div class="gender-toggle">
        <button type="button" class="gender-btn male" :class="{ active: gender === 'male' }" @click="setGender('male')">
          Male
        </button>
        <button type="button" class="gender-btn female" :class="{ active: gender === 'female' }"
          @click="setGender('female')">
          Female
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: Lora;
}

.input-form-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: white;
  width: 100%;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.text-input {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 10px 12px;
  color: white;
  outline: none;
  transition: all 0.3s ease;
}

.text-input:focus {
  border-color: rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.1);
}

.text-input::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

.gender-toggle {
  display: flex;
  gap: 10px;
}

.gender-btn {
  flex: 1;
  padding: 10px;
  background: transparent;
  border: 1px solid white;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.gender-btn.male.active {
  background: #3b82f6;
  /* Blue */
  border-color: #3b82f6;
}

.gender-btn.female.active {
  background: #ec4899;
  /* Pink */
  border-color: #ec4899;
}

.gender-btn:not(.active):hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
