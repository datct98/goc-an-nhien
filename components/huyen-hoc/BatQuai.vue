<template>
    <div class="bat-quai" :class="{ 'is-spinning': status === 'spin' }">
        <Image class="bat-quai__inner" src="/huyenHoc/batquai/vongtroninner.png" aria-hidden="true" :width="width" />
    </div>
</template>

<script setup>
defineProps({
    status: {
        type: String,
        required: true,
        validator: (value) => ['idle', 'spin'].includes(value)
    },
    width: {
        type: Number,
        required: false,
        default: 200
    }
})
</script>

<style scoped>
.bat-quai {
    padding: 35px 30px 30px 35px;
    min-width: 200px;
    min-height: 200px;
    background-image: url('/public/huyenHoc/batquai/woodframe.png');
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bat-quai__inner {
    animation: bat-quai-spin 8s linear infinite paused;
}

.is-spinning .bat-quai__inner {
    animation-play-state: running;
}

@keyframes bat-quai-spin {
    to {
        rotate: 360deg;
    }
}
</style>
