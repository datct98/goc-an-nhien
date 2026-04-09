<template>
    <div class="zen-shop">
        <!-- POINTS BAR -->
        <div class="zs-points">
            <div class="zs-point-badge zs-peace">
                <span class="zs-point-icon">🪷</span>
                <div class="zs-point-info">
                    <span class="zs-point-label">CÔNG ĐỨC</span>
                    <span class="zs-point-value">{{ stats.merit.toLocaleString() }}</span>
                </div>
            </div>
            <div class="zs-point-badge zs-soul">
                <span class="zs-point-icon">☸️</span>
                <div class="zs-point-info">
                    <span class="zs-point-label">NGHIỆP TIÊU</span>
                    <span class="zs-point-value">{{ stats.karma.toLocaleString() }}</span>
                </div>
            </div>
            <div class="zs-point-badge zs-merit">
                <span class="zs-point-icon">🧘</span>
                <div class="zs-point-info">
                    <span class="zs-point-label">TÂM TỊNH</span>
                    <span class="zs-point-value">{{ stats.peace.toLocaleString() }}</span>
                </div>
            </div>
        </div>

        <!-- CATEGORY TABS -->
        <div class="zs-tabs">
            <button v-for="cat in categories" :key="cat.id" class="zs-tab"
                :class="{ active: activeCategory === cat.id }" @click="activeCategory = cat.id">
                <span class="zs-tab-icon">{{ cat.icon }}</span>
                <span class="zs-tab-label">{{ cat.name }}</span>
            </button>
        </div>

        <!-- ITEMS GRID -->
        <div class="zs-items">
            <div v-for="item in filteredItems" :key="item.id" class="zs-card" :class="'rarity-' + item.rarity">
                <div class="zs-card-img">
                    <span class="zs-item-emoji">{{ item.icon }}</span>
                    <span v-if="item.rarity === 'legendary'" class="zs-badge-hot">HOT</span>
                </div>
                <div class="zs-card-body">
                    <h3 class="zs-card-name">{{ item.name }}</h3>
                    <div class="zs-card-price">
                        <span class="zs-price-icon">{{ getCurrencyIcon(item.currency) }}</span>
                        <span class="zs-price-amount">{{ item.price }}</span>
                        <span class="zs-price-type">{{ getCurrencyName(item.currency) }}</span>
                    </div>
                    <button class="zs-btn-redeem" :disabled="!canAfford(item)"
                        @click="redeemItem(item)">
                        {{ canAfford(item) ? 'ĐỔI' : 'KHÔNG ĐỦ' }}
                    </button>
                </div>
            </div>
        </div>

        <!-- BOTTOM BAR -->
        <div class="zs-bottom">
            <button class="zs-back" @click="$router.push('/home')">◀ BACK</button>
            <span class="zs-title">🐉 ZEN SHOP</span>
            <span class="zs-spacer"></span>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const { stats } = useGameStats()

const activeCategory = ref('all')

const categories = [
    { id: 'all', name: 'Tất cả', icon: '✨' },
    { id: 'decor', name: 'Trang trí', icon: '🏮' },
    { id: 'linh_vat', name: 'Linh vật', icon: '🐉' },
    { id: 'consumable', name: 'Tiêu hao', icon: '🧪' },
]

const items = ref([
    { id: 1, name: 'Chuỗi Tràng Hạt', icon: '📿', price: 50, currency: 'merit', category: 'decor', rarity: 'common' },
    { id: 2, name: 'Đèn Hoa Sen', icon: '🪷', price: 80, currency: 'peace', category: 'decor', rarity: 'common' },
    { id: 3, name: 'Chuông Đồng', icon: '🔔', price: 60, currency: 'karma', category: 'decor', rarity: 'common' },
    { id: 4, name: 'Vòng Ngọc Bích', icon: '💚', price: 120, currency: 'merit', category: 'linh_vat', rarity: 'rare' },
    { id: 5, name: 'Bánh Xe Pháp', icon: '☸️', price: 150, currency: 'karma', category: 'linh_vat', rarity: 'rare' },
    { id: 6, name: 'Tượng Quan Âm', icon: '🙏', price: 200, currency: 'peace', category: 'linh_vat', rarity: 'rare' },
    { id: 7, name: 'Sen Pha Lê', icon: '💎', price: 300, currency: 'merit', category: 'linh_vat', rarity: 'legendary' },
    { id: 8, name: 'Nước Cam Lồ', icon: '🧪', price: 30, currency: 'peace', category: 'consumable', rarity: 'common' },
    { id: 9, name: 'Hương Trầm', icon: '🕯️', price: 20, currency: 'karma', category: 'consumable', rarity: 'common' },
])

const filteredItems = computed(() => {
    if (activeCategory.value === 'all') return items.value
    return items.value.filter(i => i.category === activeCategory.value)
})

const getCurrencyIcon = (c) => c === 'merit' ? '🪷' : c === 'peace' ? '🧘' : '☸️'
const getCurrencyName = (c) => c === 'merit' ? 'Công Đức' : c === 'peace' ? 'Tâm Tịnh' : 'Nghiệp Tiêu'

const canAfford = (item) => {
    if (item.currency === 'merit') return stats.value.merit >= item.price
    if (item.currency === 'peace') return stats.value.peace >= item.price
    return stats.value.karma >= item.price
}

const redeemItem = (item) => {
    if (!canAfford(item)) return
    // Trừ điểm
    if (item.currency === 'merit') stats.value.merit -= item.price
    else if (item.currency === 'peace') stats.value.peace -= item.price
    else stats.value.karma -= item.price
    alert(`✅ Đã đổi "${item.name}" thành công!`)
}
</script>

<style scoped src="./LinhVatShop.css"></style>
