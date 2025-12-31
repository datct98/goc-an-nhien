<template>
  <div class="p-2">
    <div class="flex gap-2">
      <div class="flex flex-col w-full">
        <label for="name">Tên công việc</label>
        <InputText v-model="jobName" autocomplete="off" id="name" aria-describedby="name-help" />
      </div>
    </div>
    <div class="flex gap-2 pt-8 justify-end">
      <Button @click="createNewJob" class="w-full" label="Tạo kịch bản" severity="info" raised />
      <Button @click="cancel" class="w-full" label="cancel" severity="secondary" raised />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { $api, $common } = useNuxtApp();
const jobName = ref("");
const emit = defineEmits(['cancel', 'save']);
const dialogRef = inject("dialogRef");


var params = {
  id: 0,
};

onMounted(() => {
  if (dialogRef) {
    params = dialogRef.value.data;
  }
});

const createNewJob = () => {
  if(jobName.value == "") {
    $common.showError("Xin hãy nhập đầy đủ thông tin");
    return;
  }
  $api.sendPostApi("works", {
    name: jobName.value,
    scriptId: params.id,
  }).then(res => {
    if(res.data.code === 1000) {
      $common.showSuccess("Tạo công việc thành công");
    }
  }).catch(e => {
    $common.showError("Tạo công việc thất bại")
  }).finally(() => {
    jobName.value = ""
  })
}

const cancel = () => {
  emit("cancel", {user: 'primetime'});
}

</script>
