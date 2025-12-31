<template>
  <div>
    <!-- Tạo trạng thái -->
    <div class="flex gap-2 w-full">
      <div>
        <InputText
          id="name"
          aria-describedby="name-help"
          placeholder="Tên trạng thái"
        />
      </div>
      <div>
        <Select
          v-model="selectedColor"
          :options="colors"
          optionLabel="name"
          placeholder="Chọn màu sắc"
          class="w-full"
        >
          <!-- Value sau khi chọn giá trị ở select -->
          <template #value="slotProps">
            <div v-if="slotProps.value" class="flex items-center">
              <span
                :class="`bg-${slotProps.value.code}-100 text-${slotProps.value.code}-700 border text-xs font-semibold me-2 px-2 py-0.5 rounded`"
              >
                {{ slotProps.value.name }}
              </span>
            </div>
            <span v-else>
              {{ slotProps.placeholder }}
            </span>
          </template>
          <!-- Option sau khi sổ dropdown -->
          <template #option="slotProps">
            <div class="flex items-center">
              <span
                :class="`bg-${slotProps.option.code}-100 text-${slotProps.option.code}-700 border text-xs font-semibold me-2 px-2 py-0.5 rounded`"
              >
                {{ slotProps.option.name }}
              </span>
            </div>
          </template>
        </Select>
      </div>
      <div>
        <Button
          class="h-10"
          label="Thêm trạng thái"
          style="font-size: 14px; font-weight: 400"
          severity="info"
        />
      </div>
    </div>
    <!-- Danh sách trạng thái-->
    <div class="py-4">
      <CrudTable
        title="Danh sách trạng thái"
        :isShowSearcgNavBar="false"
        :isLoading="isLoading"
        colsNumber="6"
        :config="{ search: true }"
        :headers="table.head"
      >
        <tr
          v-for="(row, rowIndex) in dataTable"
          :key="rowIndex"
          class="bg-white border-b phone:whitespace-nowrap"
        >
          <td class="p-4">{{ row.id }}</td>
          <td class="p-4">
            <span class="bg-red-200"></span>
            <span
              :class="`bg-${row.color}-100 text-${row.color}-700 border text-xs font-semibold me-2 px-2 py-0.5 rounded`"
            >
              {{ row.name }}
            </span>
          </td>
          <td class="p-4">
            <Button
              icon="pi pi-pencil"
              severity="info"
              text
              rounded
              v-tooltip="'Sửa trạng thái'"
            />
          </td>
        </tr>
      </CrudTable>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { $api, $common } = useNuxtApp();
const scriptName = ref("");
const dialogRef = inject("dialogRef");
const isLoading = ref(false);

const selectedColor = ref("");
const colors = ref([
  { name: "Xanh nước biển", code: "blue" },
  { name: "Đỏ", code: "red" },
  { name: "Xanh lá cây", code: "green" },
  { name: "Cam", code: "orange" },
]);

var params = {
  id: 0,
};

onMounted(() => {
  if (dialogRef) {
    params = dialogRef.value.data;
  }
});

const table = {
  head: ["Id", "Trạng Thái", ""],
};

const dataTable = ref([
  {
    id: "test",
    name: "inprogress",
    color: "blue",
  },
  {
    id: "success",
    name: "success",
    color: "green",
  },
  {
    id: "danger",
    name: "danger",
    color: "red",
  },
]);
</script>

<style></style>
