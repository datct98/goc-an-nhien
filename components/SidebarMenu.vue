<template>
    <div>
        <!-- Overlay khi sidebar mở -->
        <Transition name="overlay">
            <div v-if="isOpen" class="sidebar-overlay" @click="close"></div>
        </Transition>

        <!-- Sidebar -->
        <Transition name="slide">
            <div v-if="isOpen" class="sidebar">
                <!-- Celestial Background -->
                <div class="celestial-bg">
                    <div class="moon"></div>
                    <div v-for="star in stars" :key="star.id" class="star" :style="{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                        opacity: star.opacity,
                        animationDelay: star.delay
                    }"></div>
                </div>

                <div class="sidebar-content">
                    <div class="sidebar-header">
                        <span class="sidebar-title">☸ Tính năng</span>
                        <button class="close-btn" @click="close">✕</button>
                    </div>
                    <nav class="sidebar-nav">
                        <a class="nav-item" v-for="item in menuTabList" @click="goTo(item.path, item.status)"
                            :class="{ active: item.active }">
                            <span class="nav-icon">{{ item.icon }}</span>
                            <span class="nav-label">{{ item.name }}</span>
                            <span v-if="item.status != 'done'" class="nav-badge">Sắp ra mắt</span>
                        </a>
                    </nav>
                    <div class="sidebar-footer">
                        <a class="nav-item logout" @click="handleLogout">
                            <span class="nav-icon">🚪</span>
                            <span class="nav-label">Đăng xuất</span>
                        </a>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { menuList } from './data/sideBar';
import { useRoute } from 'vue-router'

// Input -----------------------------------
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})

// Event ----------------------------------
const emit = defineEmits(['close'])
const router = useRouter();
const route = useRoute();
let menuTabList = ref(menuList);
const { $common } = useNuxtApp();

// Celestial background animation data
const stars = ref(Array.from({ length: 30 }, (_, i) => ({
    id: i,
    top: Math.random() * 100 + '%',
    left: Math.random() * 100 + '%',
    size: (Math.random() * 2 + 1) + 'px',
    delay: (Math.random() * 5) + 's',
    opacity: (Math.random() * 0.5 + 0.3)
})));

onMounted(() => {
})

// whenever route change
watch(
    () => route.fullPath,
    (newPath, oldPath) => {
        // console.log('Route changed from', oldPath, 'to', newPath)
        menuTabList.value.forEach((item) => {
            item.active = false
            if (newPath.includes(item.path)) {
                item.active = true
            } else {
                item.active = false
            }
        })
    }
)

// Function  
const close = () => {
    emit('close')
}

const goTo = (path, status) => {
    $common.navigateTo(path, status, router);
}

const handleLogout = () => {
    close()
    localStorage.removeItem('jwt_token')
    localStorage.removeItem('spiritual-stats')
    router.push('/login')
}
</script>

<style scoped>
/* Overlay */
.sidebar-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 998;
    backdrop-filter: blur(2px);
}

.overlay-enter-active,
.overlay-leave-active {
    transition: opacity 0.3s ease;
}

.overlay-enter-from,
.overlay-leave-to {
    opacity: 0;
}

/* Sidebar */
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100vh;
    background: linear-gradient(180deg, #111838 0%, #2d3b76 50%, #3b4a8e 100%);
    border-right: 1px solid rgba(212, 175, 55, 0.2);
    z-index: 999;
    display: flex;
    flex-direction: column;
    box-shadow: 4px 0 20px rgba(0, 0, 0, 0.5);
    overflow: hidden;
}

.sidebar-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.celestial-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
    overflow: hidden;
}

.moon {
    position: absolute;
    top: 35px;
    right: 70px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    box-shadow: 8px 8px 0 2px rgba(255, 255, 255, 0.85);
    transform: rotate(-25deg);
    filter: blur(0.5px);
}

.star {
    position: absolute;
    background: white;
    border-radius: 50%;
    box-shadow: 0 0 4px white;
    animation: twinkle 4s infinite ease-in-out;
}

@keyframes twinkle {

    0%,
    100% {
        opacity: 0.3;
        transform: scale(0.8);
    }

    50% {
        opacity: 0.9;
        transform: scale(1.2);
    }
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(-100%);
}

/* Header */
.sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 1.25rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-title {
    font-size: 1.2rem;
    font-weight: 700;
    color: white;
    letter-spacing: 1px;
}

.close-btn {
    background: none;
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
}

.close-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
}

/* Navigation */
.sidebar-nav {
    flex: 1;
    padding: 0.75rem 0;
    overflow-y: auto;
}

.nav-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.85rem 1.25rem;
    color: rgba(255, 255, 255, 0.85);
    cursor: pointer;
    transition: all 0.2s ease;
    text-decoration: none;
    position: relative;
}

.nav-item:hover:not(.disabled) {
    background: rgba(102, 93, 170, 0.15);
    color: white;
}

.nav-item.active {
    background: rgb(168 157 255 / 15%);
    color: white;
    border-left: 3px solid #d4af37;
}

.nav-item.disabled {
    opacity: 0.45;
    cursor: not-allowed;
}

.nav-icon {
    font-size: 1.25rem;
    width: 28px;
    text-align: center;
}

.nav-label {
    font-size: 0.95rem;
    font-weight: 500;
}

.nav-badge {
    margin-left: auto;
    font-size: 0.65rem;
    padding: 2px 8px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Footer */
.sidebar-footer {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0.5rem 0;
    margin-top: auto;
}

.nav-item.logout:hover {
    background: rgba(220, 53, 69, 0.15);
    color: #ff6b6b;
}
</style>
