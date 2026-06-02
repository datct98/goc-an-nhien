<template>
    <div v-if="!isEdit" :class="className">
        <SmokeUp v-if="isSmokeUp" />
        <Image v-if="isShowImage" :src="src" :alt="src" :width="width" />
    </div>
    <div v-else class="edit" :class="className" @click="showPopup = true">
        <Image :src="src" :alt="src" :width="width" />

        <!-- Popup Section moved inside the root div for stability -->
        <Teleport to="body">
            <Transition name="fade">
                <div v-if="showPopup" class="popup-overlay" @click.self="showPopup = false">
                    <div class="popup-content">
                        <button class="close-btn" @click="showPopup = false" aria-label="Close">&times;</button>
                        <div class="popup-body">
                            <h3>Cấu hình Decor</h3>
                            <!-- Tab for shopping -->
                            <div class="shop-tabs">
                                <Tabs value="0">
                                    <TabList>
                                        <Tab value="0">Tượng phật</Tab>
                                        <Tab value="1">Bàn ghế</Tab>
                                        <Tab value="2">Nến</Tab>
                                        <Tab value="3">Bát hương</Tab>
                                    </TabList>
                                    <TabPanels>
                                        <TabPanel value="0">
                                            <div class="shop-content">
                                                <ItemCard :imagePath="trumpPhat" rank="legendary" :isBuy="false"
                                                    title="Tượng vàng Trump ngồi thiền" subtitle="Remix khi gõ mõ" />
                                            </div>
                                        </TabPanel>
                                        <TabPanel value="1">
                                            <p>Nội dung tab 2</p>
                                        </TabPanel>
                                        <TabPanel value="2">
                                            <p>Nội dung tab 3</p>
                                        </TabPanel>
                                        <TabPanel value="3">
                                            <p>Nội dung tab 4</p>
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </div>
                        </div>
                        <div class="popup-actions">
                            <button class="btn primary" @click="handleConfirm">Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import SmokeUp from '../effects/SmokeUp.vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

import trumpPhat from '../../assets/icon/shop/trumpPhat.png';

const showPopup = ref(false);

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
    },
    isShowImage: {
        type: Boolean,
        default: true
    },
});

const handleConfirm = () => {
    // Logic for confirmation can be added here
    showPopup.value = false;
};
</script>

<style scoped>
.edit {
    box-sizing: border-box;
    border: 2px solid #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
    border-radius: 4px;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.edit:hover {
    transform: scale(1.02);
}

.shop-content {
    /* margin-top: 20px;
    width: 100%;
    height: calc(100% - 80px); */

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    max-width: 100%;
    margin: auto;
    padding: 20px;
}

/* Popup Styles */
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.popup-content {
    color: white;
    padding: 2rem;
    border-radius: 16px;
    position: relative;
    width: 90%;
    max-width: 1200px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    animation: popupFadeIn 0.3s ease-out;
}

@keyframes popupFadeIn {
    from {
        transform: scale(0.9);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}

.close-btn {
    position: absolute;
    top: 1rem;
    right: 1.2rem;
    background: none;
    border: none;
    color: #9ca3af;
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.2s;
}

.close-btn:hover {
    color: white;
}

.popup-body h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
    color: #cb967d;
}

.popup-body p {
    color: #d1d5db;
    font-size: 0.95rem;
    margin-bottom: 2rem;
}

.popup-actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
}

.btn {
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
}

.btn.secondary {
    background: transparent;
    border: 1px solid #4b5563;
    color: #d1d5db;
}

.btn.secondary:hover {
    background: rgba(255, 255, 255, 0.05);
}

.btn.primary {
    background: #6c3b24;
    border: none;
    color: white;
}

.btn.primary:hover {
    background: #b67456;
}

/* Transition */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>