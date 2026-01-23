<template>
  <div class="default-container">
    <!-- Body -->
    <div class="w-full">
      <ClientOnly fallback-tag="span" fallback="Loading comments...">
        <slot></slot>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.default-container {
  background: #edd5ad;
  background-size: cover;
  z-index: -999;
}
</style>
