<template>
    <nav class="statusBar">
        <div class="bluebox">
            <div class="redbox" style="width:17%"></div> <!-- lamp -->
            <div class="redbox" style="width:20%">
                <Avatar />
            </div> <!-- avatar -->
            <div class="redbox" style="width:35%"></div> <!-- info -->
            <div class="redbox points" style="width:25%">{{ leafPoint }}</div> <!-- point -->
        </div>
    </nav>
</template>

<script setup>
import Avatar from './Avatar.vue'
const { leafPoint } = useScore()
</script>

<style scoped>
.statusBar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 127px;
    z-index: 1000;
    background-image: url('/layout/statusbar3.png');
    background-size: cover;
    background-repeat: no-repeat;
    display: block;
}

.redbox {
    height: 70px;
    /* background-color: red; */
    opacity: 1;
    /* border: 1px white solid; */
}

.points {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff4bd;
    font-size: 16px;
    font-weight: 600;
    text-shadow: 0 2px 4px #41220c;
    padding-bottom: 2px;
    font-family: fangsong;
}

.bluebox {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    /* background-color: blue; */
    /* opacity: 1; */
}
</style>
