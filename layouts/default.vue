<template>
  <div>
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

<style scoped></style>
