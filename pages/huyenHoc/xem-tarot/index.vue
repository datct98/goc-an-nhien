<template>
    <div v-if="isMobileView" class="container-huyenhoc-mobile">

    </div>
    <div v-else class="container-huyenHoc tarot-page">
        <StarOverlay />
        <DesktopTitle title="Xem tarot" sub="Thấu hiểu bản thân qua dòng chảy của số mệnh" />

        <TarotPattern class="background-pattern" />

        <div class="content-overlay">
            <!-- Content will go here later -->
        </div>
    </div>
</template>

<script setup>
import TarotPattern from '~/components/effects/TarotPattern.vue';
import StarOverlay from '~/components/effects/StarOverlay.vue';
const router = useRouter();
const { $common } = useNuxtApp();
const { isMobileView } = useDevice();
</script>

<style src="../index.css"></style>
<style lang="css" scoped>
.tarot-page {
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    /* The user asked to ignore background, but typically these celestial patterns need a dark bg to be visible if white */
    /* I will use a dark merchant color for demo, but keep pattern white */
}

.background-pattern {
    position: absolute;
    top: 65vh;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 1200px;
    z-index: 1;
    pointer-events: none;
}

.content-overlay {
    position: relative;
    z-index: 10;
    height: 100vh;
}
</style>