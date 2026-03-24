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

            <!-- Tab for shopping -->
            <div class="shop-tabs">
                <Tabs value="0">
                    <TabList>
                        <Tab value="0">Đồ thần thoại</Tab>
                        <Tab value="1">Đồ sử thi</Tab>
                        <Tab value="2">Đồ hiếm có</Tab>
                        <Tab value="3">Đồ thông thường</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel value="0">
                            <div class="shop-content">
                                <ItemCard :imagePath="trumpPhat" rank="legendary" title="Tượng vàng Trump ngồi thiền"
                                    subtitle="Remix khi gõ mõ" price="50000" />
                                <ItemCard :imagePath="goldenDonaldTrump" rank="legendary" title="Tượng vàng Trump"
                                    subtitle="xoá mọi khẩu nghiệp" price="50000" />
                                <ItemCard :imagePath="legendBell" rank="legendary" title="Chuông thần"
                                    subtitle="tăng x2 điểm khi gõ mõ" price="50" />
                                <ItemCard :imagePath="lotus" rank="legendary" title="Hoa sen bảo vật"
                                    subtitle="+2000 điểm tịnh tâm" price="50" />
                                <ItemCard :imagePath="prayerBead" rank="legendary" title="Chàng hạt bồ đề"
                                    subtitle="x2 trừ nghiệp khi gõ mõ" price="50" />
                                <ItemCard :imagePath="tamLinhSet" rank="legendary" title="Set đồ tâm linh"
                                    subtitle="x2 Strike merit khi gõ mõ" price="50" />
                            </div>
                        </TabPanel>
                        <TabPanel value="1">
                            <div class="shop-content">
                                <ItemCard :imagePath="jadeRing" rank="rare" title="Vòng ngọc lục bảo"
                                    subtitle="+1500 điểm tịnh tâm" price="50" />
                                <ItemCard :imagePath="tuongPhatBoTat" rank="rare" title="Tượng phật ngọc lục bảo"
                                    subtitle="-5500 điểm khẩu nghiệp" price="50" />
                            </div>
                        </TabPanel>
                        <TabPanel value="2">
                            <div class="shop-content">
                                <ItemCard :imagePath="diLacBarecet" rank="uncommon" title="Dây chuyền phật di lặc"
                                    subtitle="+15% điểm tịnh tâm" price="50" />
                            </div>
                        </TabPanel>
                        <TabPanel value="3">
                            <div class="shop-content">
                                <ItemCard :imagePath="wheel" rank="common" title="Bánh xe" subtitle="+5% điểm tịnh tâm"
                                    price="50" />
                            </div>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>

        <!-- Desktop view -->
        <div v-else>

        </div>
    </div>
</template>

<style scoped src="./index.css"></style>

<script setup>
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

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
import trumpPhat from '../../assets/icon/shop/trumpPhat.png';


</script>