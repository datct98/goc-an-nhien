<template>
    <!-- Main body frame -->
    <div class="default-container">
        <div class="main-scene">
            <div class="couplet left-couplet">
                <!-- Left Couplet Content if any -->
                <Image src="ban_tho/cau_doi.png" alt="cau_doi_trai" width="120" height="700" />
            </div>
            <div class="flex flex-col w-full justify-center items-center main-altar-area">
                <div class="bang-chao-mung">
                    <Image src="ban_tho/tuduong.png" alt="tuduong" width="800" />
                </div>
                <div class="on-the-table">
                    <div class="left-side-altar">
                        <div class="binhHoa">
                            <Image src="decor/binh_hoa_1.png" alt="binhhoa_1" width="150" height="150" />
                        </div>
                        <div class="radio">
                            <Image src="decor/radio.png" alt="radio" width="80" height="80" />
                        </div>
                    </div>
                    <div class="middle-side-altar">
                        <div class="phatContainer">
                            <Image class="phat" src="tuong/phat.png" alt="phat" width="250" height="250" />
                        </div>
                        <div class="bathuongContainer">
                            <Image class="bathuong" src="decor/bathuong.png" alt="bathuong" width="100" height="100" />
                        </div>
                    </div>
                    <div class="right-side-altar">
                        <div class="binhHoa">
                            <Image src="decor/binh_hoa_2.png" alt="binhhoa_1" width="150" height="150" />
                        </div>
                    </div>
                </div>
                <div class="altar-table">
                    <div class="left-side">
                        <div class="homcongduc">
                            <Image src="ban_tho/homcongduc.png" alt="homcongduc" width="480" />
                        </div>
                    </div>
                    <div class="middle">
                        <Image src="ban_tho/bantho.png" alt="bantho" width="800" />
                    </div>
                    <div class="right-side">
                    </div>
                </div>
            </div>
            <div class="couplet right-couplet">
                <!-- Right Couplet Content if any -->
                <Image src="ban_tho/cau_doi.png" alt="cau_doi_phai" width="120" height="700" />
            </div>
        </div>
        <div class="floor">
            <Image src="/floor.jpg" alt="floor" width="1920" />
        </div>
    </div>


</template>

<script setup>



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
    height: 350px;
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
    top: 120px;
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



.main-scene {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    width: 100%;
}

.main-altar-area {
    width: fit-content !important;
    /* Override w-full to fit the fixed width children */
}

.couplet {
    width: 120px;
    background-color: #8b0000;
    /* Dark red wood color */
    border: 3px solid #d4af37;
    /* Gold border */
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    margin-top: 20px;
    flex-shrink: 0;
}
</style>