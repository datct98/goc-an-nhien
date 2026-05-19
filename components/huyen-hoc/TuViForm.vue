<template>
  <div>
    <p class="small-title pt-5">Nhập thông tin</p>
    <div class="input-container">
      <InputText v-model="data.username" type="text" class="input" placeholder="Nhập tên của bạn" />
    </div>
    <div>
      <!-- Date cũ -->
      <!-- <div class="flex justify-between w-full">
        <div class="w-1/3 text-center text-white">Ngày</div>
        <div class="w-1/3 text-center text-white">Tháng</div>
        <div class="w-1/3 text-center text-white">Năm</div>
      </div>
      <div class="flex flex-wrap justify-between w-full">
        <InputText placeholder="01" class="w-1/3 input-small" v-model="data.day" type="number" />
        <InputText placeholder="01" class="w-1/3 input-small" v-model="data.month" type="number" />
        <InputText placeholder="2000" class="w-1/3 input-small" v-model="data.year" type="number" />
      </div> -->
      <!-- Date mới -->
      <DateMonthYearPicker :modelValue="data" @update:modelValue="onDateChange" />
    </div>
    <p class="small-title">Nhập giới tính</p>
    <div class="gender-container">
      <div class="male" :class="{ active: data.gender == 1 }" @click="updateGender(1)">
        Nam
      </div>
      <div class="female" :class="{ active: data.gender == 0 }" @click="updateGender(0)">
        Nữ
      </div>
    </div>
    <p class="small-title pt-5">Giờ sinh</p>
    <Select v-model="data.selectedTimeIndice" class="born-date-input" overlayClass="born-date-overlay-input" checkmark
      :highlightOnSelect="false" :options="timeIndices" optionLabel="name" placeholder="Chọn giờ sinh...">
    </Select>
    <!-- Lưu niên -->
    <div v-if="data.mode === 'yearly' || data.mode === 'monthly'">
      <p class="small-title pt-5">Năm xem</p>
      <div class="input-container">
        <InputText v-model="data.selectYear" type="text" class="input" placeholder="Nhập năm xem" />
      </div>
    </div>
    <!-- Lưu nhật -->
    <div v-if="data.mode === 'monthly'">
      <p class="small-title pt-5">Tháng xem</p>
      <div class="input-container">
        <InputText v-model="data.selectMonth" type="text" class="input" placeholder="Nhập tháng xem" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: {
      username: "",
      day: 12,
      month: 12,
      year: 2000,
      gender: 1,
      selectedTimeIndice: null,
      mode: '',
      selectYear: 2000,
      selectMonth: 2
    }
  }
});

const onDateChange = (newDate) => {
  props.data.day = newDate.day;
  props.data.month = newDate.month;
  props.data.year = newDate.year;
};

const timeIndices = [
  { index: 0, name: "Tý 23:00-01:00", time: "23:00-01:00" },
  { index: 1, name: "Sửu 01:00-03:00", time: "01:00-03:00" },
  { index: 2, name: "Dần 03:00-05:00", time: "03:00-05:00" },
  { index: 3, name: "Mão 05:00-07:00", time: "05:00-07:00" },
  { index: 4, name: "Thìn 07:00-09:00", time: "07:00-09:00" },
  { index: 5, name: "Tỵ 09:00-11:00", time: "09:00-11:00" },
  { index: 6, name: "Ngọ 11:00-13:00", time: "11:00-13:00" },
  { index: 7, name: "Mùi 13:00-15:00", time: "13:00-15:00" },
  { index: 8, name: "Thân 15:00-17:00", time: "15:00-17:00" },
  { index: 9, name: "Dậu 17:00-19:00", time: "17:00-19:00" },
  { index: 10, name: "Tuất 19:00-21:00", time: "19:00-21:00" },
  { index: 11, name: "Hợi 21:00-23:00", time: "21:00-23:00" },
];

const updateGender = (value) => { props.data.gender = value };

</script>

<style scope>
.small-title {
  color: #e6ca77;
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  text-align: center;
}

.input {
  width: 100%;
  background-color: transparent !important;
  border: 1px solid #edc1fd !important;
  border-radius: 12px !important;
  box-sizing: border-box;
  /* color: #edd78f; */
  color: white;
}

.input-small {
  background-color: transparent !important;
  border: 1px solid #edc1fd !important;
  border-radius: 12px !important;
  box-sizing: border-box;
  /* color: #edd78f; */
  color: white;
}

.input::-webkit-calendar-picker-indicator {
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%);
  /* filter: invert(93%) sepia(21%) saturate(913%) hue-rotate(345deg) brightness(97%) contrast(92%); */
  cursor: pointer;
  /* display: none; */
}

.input-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 10px 0px 10px 0px;
}

.input-container>div {
  flex: 1;
  min-width: 0;
}

/* Gender */
.gender-container {
  width: 100%;
  display: flex;
  gap: 10px;
  padding-left: 20px;
  padding-right: 20px;
}

.male,
.female {
  border-radius: 15px;
  width: 100%;
  height: 40px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}

.male {
  background-color: #12263b;
  border: 1px #4f5f70 solid;
  /* box-shadow: inset 0 0 10px rgba(14, 165, 233, 0.2); */
}

.male.active {
  background-color: #6d9ccd;
  ;
  /* box-shadow: 0 0 6px rgba(0, 140, 255, 0.6), 0 0 12px rgba(0, 140, 255, 0.4); */
}

.female {
  background-color: #201e45;
  border: 1px #494470 solid;
}

.female.active {
  background-color: #cb5194;
  /* box-shadow: 0 0 6px rgb(192 0 255 / 60%), 0 0 12px rgb(255 0 239 / 40%); */
}

.born-date-input {
  width: 100%;
  background-color: transparent !important;
  border: 1px solid #edc1fd !important;
  border-radius: 12px !important;
  box-sizing: border-box;
  color: white;
  margin-bottom: 15px;
}
</style>