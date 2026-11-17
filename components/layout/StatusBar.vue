<template>
    <nav class="statusBar">
        <div class="bluebox">
            <div class="redbox" style="width:17%"></div> <!-- lamp -->
            <div class="redbox" style="width:20%">
                <Avatar />
            </div> <!-- avatar -->
            <div class="redbox info" style="width:35%">
                <div class="name">{{ name }}</div>
                <div class="experience-row">
                    <span class="level">Lv.{{ level }}</span>
                    <div class="experience-bar" role="progressbar" :aria-valuenow="current" :aria-valuemin="0"
                        :aria-valuemax="target" :aria-label="`Kinh nghiệm cấp ${level}`">
                        <div class="experience-fill" :style="{ width: `${Math.min((current / target) * 100, 100)}%` }"></div>
                    </div>
                </div>
            </div> <!-- info -->
            <div class="redbox points" style="width:25%">{{ leafPoint }}</div> <!-- point -->
        </div>
    </nav>
</template>

<script setup>
import Avatar from './Avatar.vue'
const { leafPoint } = useScore()
const { name, level, current, target } = useInfo()
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
    padding-bottom: 0px;
    font-family: fangsong;
}

.info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0;
    font-family: system-ui;
    line-height: 1;
}

.name {
    font-size: 16px;
    font-weight: 600;
    color: #401F0C;
}

.experience-row {
    display: flex;
    align-items: center;
    gap: 5px;
}

.level {
    font-size: 13px;
    font-weight: 600;
    text-shadow: 0 1px 2px #41220c;
    color: #41220c;
    min-width: 10px;
}

.experience-bar {
    width: 90px;
    height: 10px;
    overflow: hidden;
    border: 1px solid #5a2b10;
    border-radius: 5px;
    background: #6b3518;
    box-shadow: inset 0 1px 2px #3c1d0e;
}

.experience-fill {
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #d69a32, #ffe18a);
    transition: width 180ms ease;
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
