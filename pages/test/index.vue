<template>
    <div class="background">
        <NumberPicker v-model="myNumber" :min="0" :max="100" />
    </div>
</template>

<script setup>
import Bubble from '~/components/effects/Bubble.vue';
import SmokeUp from '~/components/effects/SmokeUp.vue';
import CircleSymbol from '~/components/CircleSymbol.vue';
import Coin from '~/components/Coin.vue';
import NumberPicker from '~/components/NumberPicker.vue';

const myNumber = ref(25)

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