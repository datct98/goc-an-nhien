<template>
  <!-- Body -->
  <ClientOnly fallback-tag="span" fallback="Loading comments...">
    <!-- SIDEBAR MENU -->
    <template v-if="!isMobileView">
      <SidebarMenu :isOpen="sidebarOpen" @close="sidebarOpen = false" />
      <button class="goMo-menu-btn" @click="sidebarOpen = true">
        <span class="goMo-menu-line"></span>
        <span class="goMo-menu-line"></span>
        <span class="goMo-menu-line"></span>
      </button>
    </template>

    <template v-else>
      <div class="footer">
        <NavMenuMobile />
      </div>
    </template>

    <slot></slot>
    <div style="width: 100vw; height: 70px;"></div>
  </ClientOnly>
</template>

<script setup>
import SidebarMenu from '~/components/SidebarMenu.vue';
import NavMenuMobile from '~/components/NavMenuMobile.vue';
const { isMobileView } = useDevice()

console.log('Is mobile view:', isMobileView.value);

const sidebarOpen = ref(false);

</script>

<style scoped>
/* Hamburger menu button */
.goMo-menu-btn {
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 100;
  background: rgba(58, 38, 20, 0.7);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.goMo-menu-btn:hover {
  background: rgba(58, 38, 20, 0.9);
  border-color: rgba(212, 175, 55, 0.5);
}

.goMo-menu-line {
  display: block;
  width: 20px;
  height: 2px;
  background: #d4af37;
  border-radius: 2px;
}

/* Mobile Only  */
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  overflow-x: auto;
  overflow-y: hidden;

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5px;

  padding-left: 20px;
  padding-right: 20px;

  /* background: linear-gradient(to bottom,
      #4b2406,
      #2a1303); */

  background: linear-gradient(to bottom, rgba(100, 36, 6, 0.7), rgba(100, 19, 3, 0.5));

  border-top: 1px solid rgba(255, 200, 120, 0.2);
  z-index: 999;
}
</style>
