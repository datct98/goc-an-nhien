<template>
  <fieldset class="premium-fieldset">
    <legend v-if="label" class="fieldset-label">{{ label }}</legend>
    <div class="fieldset-content">
      <slot />
    </div>
  </fieldset>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.premium-fieldset {
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  padding: 24px 20px 20px;
  background: transparent;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.premium-fieldset:hover {
  border-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
}

.fieldset-label {
  margin: 0 auto;
  padding: 0 12px;
  color: #ffffff;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.8rem;
  text-align: center;
  /* Centering across browsers */
  float: none;
  width: auto;
}

.fieldset-content {
  width: 100%;
}
</style>
