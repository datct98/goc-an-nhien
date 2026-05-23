<template>
  <!-- MOBILE -->
  <div v-if="isMobileView" class="container-huyenhoc-mobile">
    <div class="bg-filter">
      <div class="xem-chi-tay-page">
        <button class="btn-back-huyenhoc" aria-label="Quay lại huyền học" @click="goBack">
          <i class="pi pi-arrow-left"></i>
        </button>
        <PalmistrySlide />
      </div>
    </div>
  </div>

  <!-- DESKTOP -->
  <div v-else class="container-chi-tay-desktop">
    <div class="bg-filter">
      <div class="chi-tay-desktop-shell">
        <button class="btn-back-chi-tay-desktop" aria-label="Quay lại huyền học" @click="goBack">
          <i class="pi pi-arrow-left"></i>
          <span>Huyền Học</span>
        </button>

        <div class="chi-tay-desktop-content">
          <PalmistrySlide />
        </div>
      </div>
    </div>
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
/* ========= MOBILE ========= */
.xem-chi-tay-page {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 40px;
}

.btn-back-huyenhoc {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 10;
  background: rgba(212, 175, 55, 0.15);
  border: 1px solid rgba(212, 175, 55, 0.3);
  color: #d4af37;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ========= DESKTOP ========= */
.container-chi-tay-desktop {
  width: 100vw;
  min-height: 100dvh;
  background-image: url("../../../public/huyenHoc/cucQuang.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}

.chi-tay-desktop-shell {
  width: 100%;
  min-height: 100dvh;
  max-width: 720px;
  margin: 0 auto;
  /* Pad-left to clear the global hamburger button */
  padding: 6rem 2rem 4rem;
  display: flex;
  flex-direction: column;
}

.btn-back-chi-tay-desktop {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(212, 175, 55, 0.12);
  border: 1px solid rgba(212, 175, 55, 0.3);
  color: #d4af37;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: opacity 0.2s ease, transform 0.2s ease;
  margin-bottom: 1rem;
}

.btn-back-chi-tay-desktop:hover,
.btn-back-chi-tay-desktop:focus-visible {
  outline: none;
  border-color: rgba(212, 175, 55, 0.6);
  transform: translateX(-2px);
}

.chi-tay-desktop-content {
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 20px;
  padding: 1rem 0.5rem 2rem;
  backdrop-filter: blur(8px);
}
</style>
