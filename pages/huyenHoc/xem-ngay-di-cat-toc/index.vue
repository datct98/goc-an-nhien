<template>
    <div>
        <StarOverlay />
        <div v-if="isMobileView" class="container-huyenhoc-mobile">
            <div class="bg-filter">
                <div class="haircut-page-mobile">
                    <div class="w-full flex justify-end pt-4 pr-4">
                        <button class="btn-back-huyenhoc" @click="goBack">
                            <font-awesome-icon icon="fa-solid fa-arrow-left"></font-awesome-icon>
                        </button>
                    </div>
                    <p class="title-mobile text-center text-white text-2xl font-bold mb-6 pt-10">
                        Xem ngày đi cắt tóc
                    </p>
                    <div class="calendar-container-mobile p-4">
                        <HaircutCalendar />
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="container-huyenHoc">
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
    z-index: 10;
    background: rgba(83, 119, 219, 0.15);
    border: 1px solid rgba(61, 94, 202, 0.3);
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