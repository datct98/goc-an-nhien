<template>
  <div class="p-2">
    <div class="flex gap-2">
      <div class="flex flex-col w-full">
        <label for="name">Tên kịch bản</label>
        <InputText v-model="scriptName" autocomplete="off" id="name" aria-describedby="name-help" />
      </div>
    </div>
    <div class="flex gap-2 pt-8 justify-end">
      <Button @click="esditScript" class="w-full" label="Sửa kịch bản" severity="info" raised />
      <Button @click="cancel" class="w-full" label="cancel" severity="secondary" raised />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { $api, $common } = useNuxtApp();
const scriptName = ref("");
const emit = defineEmits(['cancel', 'save']);
const dialogRef = inject("dialogRef");

var params = {
  id: 0,
  name: "",
  deptId: "",
};

onMounted(() => {
  if (dialogRef) {
    params = dialogRef.value.data;
    scriptName.value = params.name;
  }
});

const esditScript = () => {
  if(scriptName.value == "") {
    $common.showError("Xin hãy nhập đầy đủ thông tin");
    return;
  }
  $api.sendPutApi(`script/${params.id}`, {
    name: scriptName.value,
    departmentId: params.deptId
  }).then((res) => {
    if (res != null && res.data.code === 1000) {
      $common.showSuccess("Sửa kịch bản thành công");
      emit("save", { status: true });
      if (dialogRef) {
        dialogRef.value.close();
      }
    }
  }).catch((err) => {
    $common.showError("Sửa kịch bản thất bại")
  }).finally(() => {
    scriptName.value = "";
  })
}

const cancel = () => {
  emit("cancel", {user: 'primetime'});
}

</script>

<style>

</style>