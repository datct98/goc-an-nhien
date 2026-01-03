<template>
    <!-- Main body frame -->
    <div class="default-container">
        <div class="flex flex-col w-full justify-center items-center">
            <div class="bang-chao-mung">
            </div>
            <div class="on-the-table">
                <div class="left-side-altar">
                    <div class="binhHoa">
                        <Image src="/binh_hoa_1.png" alt="binhhoa_1" width="150" height="150" />
                    </div>
                    <div class="radio">
                        <Image src="/radio.png" alt="radio" width="80" height="80" />
                    </div>
                </div>
                <div class="middle-side-altar">
                    <div class="phatContainer">
                        <Image class="phat" src="/phat.png" alt="phat" width="250" height="250" />
                    </div>
                    <div class="bathuongContainer">
                        <Image class="bathuong" src="/bathuong.png" alt="bathuong" width="100" height="100" />
                    </div>
                </div>
                <div class="right-side-altar">
                    <div class="binhHoa">
                        <Image src="/binh_hoa_2.png" alt="binhhoa_1" width="150" height="150" />
                    </div>
                </div>
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

.bang-chao-mung {
    border: 1px solid green;
    width: 800px;
    height: 100px;
}

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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
}

.radio {
    position: absolute;
    cursor: pointer;
    z-index: 2;
    bottom: -5px;
}

.binhHoa {
    position: absolute;
    bottom: 25px;
}

.left-side-altar .binhHoa {
    left: 45px;
}

.right-side-altar .binhHoa {
    right: 45px;
}

.radio:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
}

.left-side-altar,
.right-side-altar {
    width: 25%;
    height: 345px;
    position: relative;
}

.middle-side-altar {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: end;
}


</style>