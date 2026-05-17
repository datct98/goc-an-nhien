<template>
    <div class="background">
        <DateMonthYearPicker v-model="myDate" />
    </div>
</template>

<script setup>
const myNumber = ref(25);
const myDate = ref({
    day: 15,
    month: 8,
    year: 1998
});

</script>

<style>
.background {
    width: 100vw;
    height: 100vh;
    background-color: black;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
</style>