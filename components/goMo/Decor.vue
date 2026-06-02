<template>
    <div v-if="!isEdit" :class="className">
        <SmokeUp v-if="isSmokeUp" />
        <Image :src="src" :alt="src" :width="width" />
    </div>
    <div v-else class="edit" :class="className">
        <Image :src="src" :alt="src" :width="width" />
    </div>
</template>

<script setup>
import SmokeUp from '../effects/SmokeUp.vue';

const props = defineProps({
    isEdit: {
        type: Boolean,
        default: false
    },
    src: {
        type: String,
        default: ""
    },
    width: {
        type: Number,
        default: 100
    },
    className: {
        type: String,
        default: ""
    },
    isSmokeUp: {
        type: Boolean,
        default: false
    }
});

</script>

<style scoped>
.edit {
    border: 2px solid #3b82f6;
    /* Xanh dương nổi bật */
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
    /* Hiệu ứng đổ bóng phát sáng nhẹ */
    border-radius: 4px;
    /* Bo góc nhẹ cho hiện đại */
}
</style>