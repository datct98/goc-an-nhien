<template>
    <div class="header mt-10">
        <h1 class="title text-center">
            <font-awesome-icon icon="fa-solid fa-star" /> &nbsp;
        </h1>
        <h1 class="title text-center">
            <span>{{ title }}</span>
        </h1>
        <p class="subtitle text-center">
            {{ sub }}
        </p>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    sub: {
        type: String,
        required: true
    },
})
</script>

<style scoped>
.header {
    margin-bottom: 32px;
}

.title {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0 0 6px 0;
    letter-spacing: 0.5px;
}

.subtitle {
    font-size: 0.9rem;
    margin: 0;
    font-style: italic;
}
</style>
