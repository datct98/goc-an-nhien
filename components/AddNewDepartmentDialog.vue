<template>
  <div class="p-2">
    <div class="flex gap-2">
      <div class="flex flex-col gap-2 w-1/2">
        <label for="name">Tên phòng ban</label>
        <InputText v-model="deptName" autocomplete="off" id="name" aria-describedby="name-help" />
      </div>
      <div class="flex flex-col gap-2 w-1/2">
        <label for="note">Ghi chú</label>
        <InputText v-model="note" autocomplete="off" id="note" aria-describedby="note-help" />
      </div>
    </div>
    <div class="flex gap-2 pt-8 justify-end">
      <Button @click="createNewDepartment" class="w-full" label="Tạo phòng ban" severity="info" raised />
      <Button @click="cancel" class="w-full" label="cancel" severity="secondary" raised />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMyMainStore } from '~/stores/mainStore';

const { $api, $common } = useNuxtApp();
const deptName = ref("");
const note = ref("");
const emit = defineEmits(['cancel', 'save']);
const main = useMyMainStore();


const getListDepartment = async () => {
  await $api.sendGetApi("menu").then((res) => {
    main.dptList = res.result.departments;
  });
}

const createNewDepartment = () => {
  if(deptName.value == "" || deptName.value == null) {
    $common.showError("Xin hãy nhập đầy đủ thông tin");
    return;
  }
  $api.sendPostApi("dpt", {
    name: deptName.value,
    note: note.value
  }).then((res) => {
    if(res.data.code === 1000) {
      $common.showSuccess("Tạo phòng ban thành công");
      getListDepartment();
      emit('save', {status: true});
    }
  }).catch((err) => {
    $common.showError("Tạo phòng ban thất bại")
  }).finally(() => {
    deptName.value = "";
    note.value = "";
  })
}

const cancel = () => {
  emit("cancel", {user: 'primetime'});
}
</script>

<style></style>
