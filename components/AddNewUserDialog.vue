<template>
  <div>
    <!-- Row 1 -->
    <div class="flex gap-2 p-2">
      <div class="flex flex-col gap-2 w-1/2">
        <label for="username">Tên nhân sự</label>
        <InputText
          autocomplete="off"
          id="username"
          aria-describedby="username-help"
        />
      </div>
      <div class="flex flex-col gap-2 w-1/2">
        <label for="email">Email</label>
        <InputText id="email" aria-describedby="email-help" />
      </div>
    </div>
    <!-- Row 2 -->
    <div class="flex gap-2 p-2">
      <div class="flex flex-col gap-2 w-1/2">
        <label for="password">Password</label>
        <Password
          v-model="password"
          inputClass="w-full"
          autocomplete="off"
          :feedback="false"
          toggleMask
          class="w-full"
          id="password"
          aria-describedby="password-help"
        />
      </div>
      <div class="flex flex-col gap-2 w-1/2">
        <label for="dept">Phòng ban</label>
        <InputText id="dept" aria-describedby="dept-help" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const password = ref("");
</script>

<style></style>
