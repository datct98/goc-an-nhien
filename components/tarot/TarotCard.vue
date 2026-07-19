<template>
    <div class="card" :class="{ 'is-flipped': isSet }" @click="toggleCard">
        <div class="card-inner">
            <div class="front-card">
                <div class="num">
                    III
                </div>
                <div>
                    Image...
                </div>
                <div class="name">
                    Empress
                </div>
            </div>
            <div class="back-card">
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 150px;
    height: 250px;
    border: 1px solid #ccc;
    border-radius: 10px;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px; */
    color: white;
    overflow: hidden;
    perspective: 1000px;
    /* Gives the flip 3D depth */
    cursor: pointer;
}

.card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    transform-style: preserve-3d;
    /* Allows child elements to exist in 3D space */
}

.card.is-flipped .card-inner {
    transform: rotateY(180deg);
}

.front-card,
.back-card {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    /* Hides the side facing away from the screen */
}

.front-card {
    background-color: #ffffff;
    color: #1e293b;
}

.back-card {
    transform: rotateY(180deg);
    background-color: #1e293b;
    background-image: url("~/assets/card/back.jpg");
    background-size: cover;
}
</style>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    isCardSet: {
        type: Boolean,
        default: true
    },
    canCardFlip: {
        type: Boolean,
        default: false
    }
});

const isSet = ref(true);
const canFlip = ref(false);

onMounted(() => {
    isSet.value = props.isCardSet;
    canFlip.value = props.canCardFlip;
    console.log("isSet : ", isSet.value);
    console.log("canFlip : ", canFlip.value);
})


const toggleCard = () => {
    if (canFlip.value) {
        isSet.value = !isSet.value
    }
}

</script>