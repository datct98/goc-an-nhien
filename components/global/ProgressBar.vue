<template>
    <div class="w-full flex justify-center absolute">
        <div class="progressbar">
            <div class="progressbar-full-fill"></div>
        </div>
    </div>
</template>

<style scoped>
.progressbar {
    background-image: url('/layout/progressbar.png');
    background-size: cover;
    background-repeat: no-repeat;
    width: 80%;
    height: 80px;
}

.progressbar-full-fill {
    position: relative;
    top: 50%;
    left: 10%;
    width: 100px;
    height: 13px;
    background-color: burlywood;
    background-image: url('/layout/progress.PNG');
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 25px;
}
</style>