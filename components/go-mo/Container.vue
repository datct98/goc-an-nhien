<template>
    <div :class="className"
        :style="{ backgroundImage: `url(${backgroundUrl})`, backgroundSize: 'cover', width: width, height: height }">
        <slot></slot>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    backgroundUrl: {
        type: String,
        default: ""
    },
    className: {
        type: String,
        default: ""
    },
    width: {
        type: String,
        default: '100px'
    },
    height: {
        type: String,
        default: '50px'
    }
});

</script>