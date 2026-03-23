<template>
    <div id="insta" class="image-container" ref="imageContainer" @mousedown="startDrag" @mousemove="drag"
        @mouseup="endDrag" @mouseleave="endDrag">
        <div class="image-list">
            <div class="menu-item" v-for="item in menuTabList" @click="goTo(item.path, item.status)"
                :class="{ active: item.active }">
                <i :class="item.iconName" style="font-size: 20px; padding-bottom: 10px; color: #fff0b7;"></i>
                <!-- <span class="icon">{{ item.icon }}</span>` -->
                <span class="label">{{ item.name }}</span>
            </div>
            <div class="menu-item"></div>
        </div>

    </div>
</template>


<script setup>
import { useRouter } from 'vue-router'
import { menuList } from './data/sideBar';
import { useRoute } from 'vue-router';

const emit = defineEmits(['close'])
const { $common } = useNuxtApp();
const router = useRouter();

let menuTabList = ref(menuList);

var isDragging = false;
var startPosition = 0;
var currentScrollLeft = 0;
var velocity = 0;
var lastTime = 0;
var animationFrameId = null;
var showScrollButton = true;

const goTo = (path, status) => {
    $common.navigateTo(path, status, router);
}

const startDrag = (event) => {
    isDragging = true;
    startPosition = event.clientX;
    // currentScrollLeft = imageContainer.value.scrollLeft;
    velocity = 0;
    lastTime = performance.now();
    cancelAnimationFrame(animationFrameId);
};
const drag = (event) => {
    if (isDragging) {
        const delta = event.clientX - startPosition;
        const currentTime = performance.now();
        const timeDelta = currentTime - lastTime;
        velocity = delta / timeDelta;
        // imageContainer.value.scrollLeft = currentScrollLeft - delta;
        lastTime = currentTime;
    }
};
const endDrag = () => {
    isDragging = false;
    // animationFrameId = requestAnimationFrame(decelerate);
};
</script>

<style scoped>
.menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 13px;
    color: #c9b6a2;

    cursor: pointer;
}

.menu-item .icon {
    font-size: 20px;
    margin-bottom: 4px;
}

.menu-item .label {
    font-size: 10px;
}

.menu-item.active {
    color: #ffd36b;
    text-shadow: 0 0 6px rgba(255, 220, 120, 0.8);
}

.menu-item.active .icon {
    color: #ffd36b;
}

.menu-item.active::before {
    content: "";
    position: absolute;
    top: -6px;
    width: 50px;
    height: 4px;

    background: #ffd36b;
    border-radius: 10px;

    box-shadow:
        0 0 6px #ffd36b,
        0 0 12px rgba(255, 210, 120, 0.8);
}

/* Infinite Scroll */
.image-container::-webkit-scrollbar {
    display: none;
}

.image-container {
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
    padding: 10px;
}

.image-container:active {
    cursor: grabbing;
}

.image-list {
    display: flex;
    gap: 20px;
    transform: translateX(0);
    transition: transform 0.3s ease-out;
    justify-items: center;
    justify-content: center;
    width: fit-content;
}
</style>