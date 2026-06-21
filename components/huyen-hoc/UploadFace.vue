<script setup>
import { ref } from 'vue';

const props = defineProps({
  modelValue: {
    type: [Object, File, String],
    default: null
  }
});

const emit = defineEmits(['update:modelValue']);

const error = ref('');
const fileInput = ref(null);

const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
const maxSize = 4 * 1024 * 1024; // 4 MB

const handleFileChange = (event) => {
  const file = event.target.files[0];
  error.value = '';

  if (!file) return;

  // Validate type
  if (!allowedTypes.includes(file.type)) {
    error.value = 'Chỉ chấp nhận file định dạng .png, .jpg, .jpeg';
    emit('update:modelValue', null);
    return;
  }

  // Validate size
  if (file.size > maxSize) {
    error.value = 'Dung lượng file tối đa là 4MB';
    emit('update:modelValue', null);
    return;
  }

  // Success
  emit('update:modelValue', file);
};

const triggerUpload = () => {
  fileInput.value.click();
};
</script>

<template>
  <div class="upload-face-container">
    <div class="image-wrapper">
      <img src="/huyenHoc/men-line.png" alt="Face Outline" class="face-outline" />
    </div>

    <div class="upload-controls">
      <input type="file" ref="fileInput" class="hidden-input" accept=".png,.jpg,.jpeg" @change="handleFileChange" />

      <button class="upload-btn" @click="triggerUpload">
        {{ modelValue ? 'Thay đổi ảnh' : 'Tải lên hình ảnh' }}
      </button>

      <p v-if="error" class="error-msg">{{ error }}</p>
      <p v-if="modelValue && !error" class="success-msg">
        Đã chọn: {{ modelValue.name }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.upload-face-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  color: white;
  width: 100%;
}

.image-wrapper {
  width: 100%;
  max-width: 200px;
  display: flex;
  justify-content: center;
}

.face-outline {
  width: 100%;
  height: auto;
  opacity: 0.8;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.2));
}

.upload-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
}

.hidden-input {
  display: none;
}

.upload-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: white;
  padding: 10px 24px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}

.upload-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.upload-btn:active {
  transform: translateY(0);
}

.error-msg {
  color: #ff6b6b;
  font-size: 0.9em;
  text-align: center;
}

.success-msg {
  color: #51cf66;
  font-size: 0.9em;
  text-align: center;
  opacity: 0.8;
}
</style>
