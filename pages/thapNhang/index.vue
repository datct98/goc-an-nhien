<template>
    <Dust></Dust>
    <!-- Main body frame -->
    <div v-if="isMobileView" class="default-container-mobile">

    </div>
    <div v-else class="default-container">
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
import Dust from '~/components/effects/Dust.vue';

const { isMobileView } = useDevice();


</script>


<style scoped src="./index.css"></style>
