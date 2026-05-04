<template>
  <div v-if="isMobileView" class="container-huyenhoc-mobile">
    <div class="bg-filter">
      <div class="xem-chi-tay-page">
        <button class="btn-back-huyenhoc" @click="goBack">
          <i class="pi pi-arrow-left"></i>
        </button>
        <PalmistrySlide />
      </div>
    </div>
  </div>
  <div v-else class="container-huyenHoc">
    <div class="left-task-bar"></div>
  </div>
</template>

<script setup>
import PalmistrySlide from "~/components/PalmistrySlide.vue";

const router = useRouter();
const { isMobileView } = useDevice();

const goBack = () => router.push('/huyenHoc');
</script>
<style scoped src="../index.css"></style>
<style scoped>
.xem-chi-tay-page {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 40px;
}
.btn-back-huyenhoc {
  position: absolute; top: 16px; left: 16px; z-index: 10;
  background: rgba(212, 175, 55, 0.15); border: 1px solid rgba(212, 175, 55, 0.3);
  color: #d4af37; width: 36px; height: 36px; border-radius: 10px;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
}
</style>
