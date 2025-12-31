<template>
  <div>
    <Tabs value="0">
      <TabList>
        <Tab value="0">
          <a class="flex items-center gap-2 text-inherit">
            <i class="pi pi-pencil" />
            <span>Sửa nhân sự</span>
          </a>
        </Tab>
        <Tab value="1">
          <a class="flex items-center gap-2 text-inherit text-common">
            <i class="pi pi-user" />
            <span>Phân quyền nhân sự</span>
          </a>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="m-0">
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
        </TabPanel>
        <TabPanel value="1">
          <span class="m-0"> </span>
        </TabPanel>
      </TabPanels>
    </Tabs>

    <div class="flex gap-2 pt-8 justify-end">
      <Button
        @click="editUser"
        class="w-full"
        label="Sửa kịch bản"
        severity="info"
        raised
      />
      <Button
        @click="cancel"
        class="w-full"
        label="cancel"
        severity="secondary"
        raised
      />
    </div>

  </div>
</template>

<script lang="ts" setup>
const { $api, $common } = useNuxtApp();
const scriptName = ref("");
const emit = defineEmits(["cancel", "save"]);
const dialogRef = inject("dialogRef");

const password = ref("");
const email = ref("");
const role = ref("");
const departmentId = ref("");

var params = {
  id: 0,
};

onMounted(() => {
  if (dialogRef) {
    params = dialogRef.value.data;
  }
});

const editUser = () => {
  if (scriptName.value == "") {
    $common.showError("Xin hãy nhập đầy đủ thông tin");
    return;
  }
  $api
    .sendPutApi(`users/${params.id}`, {
      password: password.value,
      email: email.value,
      role: role.value,
      departmentId: departmentId.value,
    })
    .then((res) => {
      if (res != null && res.data.code === 1000) {
        $common.showSuccess("Thay đổi thông tin user thành công");
        emit("save", { status: true });
        if (dialogRef) {
          dialogRef.value.close();
        }
      }
    })
    .catch((err) => {
      $common.showError("Sửa thông tin user thất bại");
    })
    .finally(() => {
      scriptName.value = "";
    });
};

const cancel = () => {
  emit("cancel", { user: "primetime" });
};
</script>
