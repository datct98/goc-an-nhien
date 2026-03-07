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
        <div class="menu-item">
          <div class="icon">🏠</div>
          <span>Chính</span>
        </div>

        <div class="menu-item active">
          <div class="icon">🪷</div>
          <span>Cửa hàng</span>
        </div>

        <div class="menu-item">
          <div class="icon">📋</div>
          <span>Nhiệm vụ</span>
        </div>

        <div class="menu-item">
          <div class="icon">🎒</div>
          <span>Túi đồ</span>
        </div>

        <div class="menu-item">
          <div class="icon">👤</div>
          <span>Hồ sơ</span>
        </div>
      </div>
    </template>

    <slot></slot>
  </ClientOnly>
</template>

<script setup>
import SidebarMenu from '~/components/SidebarMenu.vue';
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
  height: 70px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background: linear-gradient(to bottom,
      #4b2406,
      #2a1303);

  border-top: 1px solid rgba(255, 200, 120, 0.2);
  z-index: 999;
}

.menu-item{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  font-size:13px;
  color:#c9b6a2;

  cursor:pointer;
}

.menu-item .icon{
  font-size:20px;
  margin-bottom:4px;
}

.menu-item.active{
  color:#ffd36b;
  text-shadow:0 0 6px rgba(255,220,120,0.8);
}

.menu-item.active .icon{
  color:#ffd36b;
}

.menu-item.active::before{
  content:"";
  position:absolute;
  top:-6px;
  width:50px;
  height:4px;

  background:#ffd36b;
  border-radius:10px;

  box-shadow:
    0 0 6px #ffd36b,
    0 0 12px rgba(255,210,120,0.8);
}
</style>
