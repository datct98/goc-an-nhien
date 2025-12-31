<template>
    <div class="default-container">
        <div class="flex flex-col w-full justify-center items-center">
            <div class="on-the-table">
                <div class="left-side-altar"></div>
                <div class="middle-side-altar">
                    <div class="phatContainer">
                        <Image class="phat" src="/phat.png" alt="phat" width="250" height="250" />
                    </div>
                    <div class="bathuongContainer">
                        <Image class="bathuong" src="/bathuong.png" alt="bathuong" width="100" height="100" />
                    </div>
                </div>
                <div class="right-side-altar"></div>
            </div>
            <div class="altar-table">
                <div class="left-side">
                    <div class="homcongduc">
                        <Image src="/homcongduc.png" alt="homcongduc" width="480" />
                    </div>
                </div>
                <div class="middle">
                    <Image src="/bantho.png" alt="bantho" width="800" />
                </div>
                <div class="right-side">
                </div>
            </div>
        </div>
        <div class="floor">
            <Image src="/floor.jpg" alt="floor" width="1920" />
        </div>

        <!-- Audio -->
        <audio autoplay muted loop ref="audio" controls>
            <source src="/audio/nhacPhat.mp3" type="audio/mpeg" />Your browser does not support the audio element.
        </audio>
    </div>


</template>

<script setup>

  const audio = ref(null)

  onMounted(() => {
    audio.value.play().catch(() => {})
  });

</script>

<style scoped>
.floor {
    position: relative;
    top: -180px;
    z-index: 0;
}

.altar-table {
    width: 100%;
    position: relative;
    top: -30px;
    z-index: 1;
    display: flex;
    flex-direction: row;
}

.altar-table .left-side,
.altar-table .right-side {
    border: 1px solid #ff0000a6;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: end;
}

/* .altar-table .left-side .homcongduc {
    position: relative;
    bottom: 0px;
} */

.on-the-table {
    border: 1px solid #4b251fa6;
    width: 800px;
    height: 300px;
    display: flex;
    flex-direction: row;
    z-index: 2;
}

.bathuongContainer,
.phatContainer {
    width: 100%;
    display: flex;
    justify-content: center;
}

.bathuong {
    position: relative;
    top: 50px;
}

.phat {
    position: relative;
    top: 137px;
}

/*altar detail */
.left-side-altar,
.right-side-altar,
.middle-side-altar {
    border: 1px solid #44ffbba6;
    height: 100%;
}

.left-side-altar,
.right-side-altar {
    width: 25%;
}

.middle-side-altar {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: end;
}

.default-container {}
</style>