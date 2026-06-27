<template>
    <div class="container-huyenHoc">
        <StarOverlay />
        <div v-if="isMobileView" class="container-huyenhoc-mobile">
            <div class="bg-filter">
                <div class="haircut-page-mobile">
                    <button class="btn-back-huyenhoc" @click="$router.push('/huyenHoc')">
                        <font-awesome-icon :icon="['fas', 'arrow-left']" />
                    </button>
                    <p class="title-mobile text-center text-white text-2xl font-bold mb-6 pt-10">
                        Xem ngày đi cắt tóc
                    </p>
                    <div class="calendar-container-mobile">
                        <HaircutCalendar />
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <DesktopTitle title="Xem ngày đi cắt tóc" sub="Ngày lành tháng tốt để đi làm đẹp mái tóc của mình" />
            <!-- Lich cat toc -->
            <div class="">
                <HaircutCalendar />
            </div>
        </div>
    </div>
</template>

<script setup>
import StarOverlay from '~/components/effects/StarOverlay.vue';
import HaircutCalendar from '~/components/huyen-hoc/HaircutCalendar.vue';
const { isMobileView } = useDevice();

</script>

<style src="../index.css"></style>
<style scoped>
.btn-back-huyenhoc {
    position: absolute;
    top: 16px;
    left: 16px;
    z-index: 10;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    width: 36px;
    height: 36px;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>