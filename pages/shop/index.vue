<template>
    <div class="shop-container">
        <!-- Mobile view -->
        <div v-if="isMobileView">
            <div class="header">
                <div class="glow-bar">
                    🌼 Merit: 108
                </div>
                <div class="glow-bar">
                    🛞 Karma: 108
                </div>
                <div class="glow-bar">
                    🧘‍♀️ Peace: 108
                </div>
            </div>

            <div class="shop-content">
                <ItemCard :imagePath="goldenDonaldTrump" rank="legendary" title="Tượng vàng Trump"
                    subtitle="xoá mọi khẩu nghiệp" price="50000 Merit" />
                <ItemCard :imagePath="legendBell" rank="legendary" title="Chuông thần" subtitle="tăng x2 điểm khi gõ mõ"
                    price="50 Merit" />
                <ItemCard :imagePath="lotus" rank="legendary" title="Hoa sen bảo vật" subtitle="+2000 điểm tịnh tâm"
                    price="50 Merit" />
                <ItemCard :imagePath="prayerBead" rank="legendary" title="Chàng hạt bồ đề"
                    subtitle="x2 trừ nghiệp khi gõ mõ" price="50 Merit" />
                <ItemCard :imagePath="tamLinhSet" rank="legendary" title="Set đồ tâm linh"
                    subtitle="x2 Strike merit khi gõ mõ" price="50 Merit" />

                <ItemCard :imagePath="jadeRing" rank="rare" title="Vòng ngọc lục bảo" subtitle="+1500 điểm tịnh tâm"
                    price="50 Merit" />
                <ItemCard :imagePath="tuongPhatBoTat" rank="rare" title="Tượng phật ngọc lục bảo"
                    subtitle="-5500 điểm khẩu nghiệp" price="50 Merit" />

                <ItemCard :imagePath="diLacBarecet" rank="uncommon" title="Dây chuyền phật di lặc"
                    subtitle="+15% điểm tịnh tâm" price="50 Merit" />

                <ItemCard :imagePath="wheel" rank="common" title="Bánh xe" subtitle="+5% điểm tịnh tâm"
                    price="50 Merit" />

            </div>

        </div>

        <!-- Desktop view -->
        <div v-else>

        </div>
    </div>
</template>

<style scoped src="./index.css"></style>

<script setup>
const { isMobileView } = useDevice()
import jadeRing from '../../assets/icon/shop/jadeRing.png';
import legendBell from '../../assets/icon/shop/legendBell.png';
import lotus from '../../assets/icon/shop/lotus.png';
import prayerBead from '../../assets/icon/shop/prayerBead.png';
import tamLinhSet from '../../assets/icon/shop/tamLinhSet.png';
import wheel from '../../assets/icon/shop/wheel.png';
import diLacBarecet from '../../assets/icon/shop/barecel.png';
import tuongPhatBoTat from '../../assets/icon/shop/tuongPhatBoTat.png';
import goldenDonaldTrump from '../../assets/icon/shop/goldenDonaldTrump.png';


</script>