<template>
    <div class="avatar" :style="{ width }">
        <img class="avatar__image" :src="imgSrc" alt="Avatar" />
        <img class="avatar__frame" :src="frameSrc" alt="" aria-hidden="true" />
    </div>
</template>

<script setup>
defineProps({
    frameSrc: {
        type: String,
        default: '/layout/frame.png',
    },
    imgSrc: {
        type: String,
        default: '/layout/avatar.png',
    },
    width: {
        type: String,
        default: '80px',
    },
})
</script>

<style scoped>
.avatar {
    position: relative;
    flex: 0 0 auto;
    aspect-ratio: 925 / 812;
}

.avatar__image {
    position: absolute;
    top: 48%;
    left: 50%;
    width: 72%;
    aspect-ratio: 683 / 673;
    height: auto;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    object-fit: cover;
}

.avatar__frame {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
}

.avatar__frame {
    object-fit: fill;
    pointer-events: none;
}
</style>
