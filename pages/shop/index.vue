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
                <ItemCard rank="common" icon="🪷" title="Lotus Lamp" subtitle="Đèn Sen Xá Lợi" price="50 Merit" />
                <ItemCard rank="rare" icon="🪷" title="Lotus Lamp" subtitle="Đèn Sen Xá Lợi" price="50 Merit" />
                <ItemCard rank="legendary" icon="🪷" title="Lotus Lamp" subtitle="Đèn Sen Xá Lợi" price="50 Merit" />
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

</script>