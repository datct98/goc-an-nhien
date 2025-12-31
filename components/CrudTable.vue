<template>
  <div
    class="relative overflow-x-auto border rounded-xl shadow-md sm:rounded-lg"
  >
    <!-- Table Default PC -->
    <table
      id="crud_table"
      class="w-full text-sm text-left rtl:text-right text-gray-500"
    >
      <thead>
        <!-- Search Bar -->
        <tr class="bg-white" v-if="isShowSearcgNavBar">
          <td colspan="100%" class="p-4 border-b">
            <div class="flex justify-between">
              <div class="text-common text-xl font-bold py-2">
                {{ title }}
              </div>
              <IconField>
                <InputIcon class="pi pi-search" />
                <InputText placeholder="Search" />
              </IconField>
            </div>
          </td>
        </tr>
        <!-- Header Table -->
        <tr class="bg-slate-50">
          <th
            v-for="(header, index) in headers"
            :key="index"
            scope="col"
            class="p-4 text-sm font-semibold text-common"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="isLoading">
          <td colspan="100%" class="bg-white">
            <div class="w-full">
              <img
                class="w-16 m-auto"
                src="../static/img/spinner.gif"
                alt="loading..."
              />
            </div>
          </td>
        </tr>
        <template v-else>
          <slot></slot>
        </template>
      </tbody>
      <tfoot>
        <tr class="bg-white w-full">
          <td class="card" colspan="100%">
            <Paginator
              :rows="10"
              :totalRecords="120"
              :rowsPerPageOptions="[10, 20, 30]"
            ></Paginator>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script setup>

const props = defineProps({
  isShowSearcgNavBar: {
    type: Boolean,
    default: true,
  },
  selectLabel: {
    type: String,
    default: "Chọn công việc",
  },
  config: {
    type: Object,
    required: false,
  },
  headers: {
    type: Array,
    required: true,
  },
  showDropdown: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: ""
  },
  dropdownList: [],
  isLoading: false,
  selectJob: [],
});
</script>
