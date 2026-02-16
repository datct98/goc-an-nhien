import { ref, computed, onMounted } from 'vue'
import { meritService } from '~/services/meritService'

export function useGameStats() {
    const stats = ref({
        merit: 0,
        peace: 0,
        karma: 0,
        totalClicks: 0,
        level: 1
    })

    const isLoading = ref(false)
    const error = ref(null)
    const rateLimitMessage = ref(null)

    // Khóa để tránh sync đồng thời
    let isSyncing = false

    // Load merit points from localStorage first (for instant display)
    const loadLocalStats = () => {
        const saved = localStorage.getItem('spiritual-stats')
        if (saved) {
            try {
                const parsed = JSON.parse(saved)
                stats.value = { ...stats.value, ...parsed }
                console.log('📦 Loaded from localStorage:', parsed)
            } catch (err) {
                console.error('Failed to parse localStorage:', err)
            }
        }
    }

    // Load merit points from API (SOURCE OF TRUTH - gọi khi mount /goMo hoặc reload)
    const loadMeritPoints = async () => {
        if (isSyncing) return // Tránh gọi API nhiều lần

        try {
            isSyncing = true
            isLoading.value = true

            console.log('🔄 Fetching merit points from API /me...')
            const data = await meritService.getMe()

            // Update stats from backend (SOURCE OF TRUTH)
            if (data) {
                stats.value.merit = data.merit || 0
                stats.value.peace = data.peace || 0
                stats.value.karma = data.karma || 0
                stats.value.totalClicks = data.totalClicks || 0
                stats.value.level = data.level || 1
                console.log('✅ Stats loaded from API (source of truth):', stats.value)
            }

            // Lưu vào localStorage làm backup
            saveLocalStats()
        } catch (err: any) {
            console.error('❌ Failed to load from API, falling back to localStorage:', err)
            // API fail → fallback dùng localStorage
            loadLocalStats()
        } finally {
            isLoading.value = false
            isSyncing = false
        }
    }

    // Save to localStorage as backup
    const saveLocalStats = () => {
        localStorage.setItem('spiritual-stats', JSON.stringify(stats.value))
        console.log('💾 Saved to localStorage:', stats.value)
    }

    // Gửi tap xuống BE (fire-and-forget trong background)
    const sendTapToBackend = async (pointType: string) => {
        try {
            await meritService.tap({
                pointType,
                merit: stats.value.merit,
                peace: stats.value.peace,
                karma: stats.value.karma,
                totalClicks: stats.value.totalClicks
            })
        } catch (err: any) {
            if (err.response?.status === 429) {
                rateLimitMessage.value = err.response?.data?.error || 'Gõ quá nhanh!'
                console.warn('⚠️ Rate limited:', rateLimitMessage.value)
            } else {
                console.error('❌ Tap API failed:', err)
            }
        }
    }

    // Increment merit via API with optimistic update
    const incrementMerit = () => {
        error.value = null
        rateLimitMessage.value = null

        // OPTIMISTIC UPDATE: Cộng điểm ngay lập tức ở FE
        stats.value.merit++
        stats.value.totalClicks++
        saveLocalStats()

        console.log('🔔 Tapping wooden fish... (optimistic: MERIT)')

        // Gửi tap xuống BE (fire-and-forget)
        sendTapToBackend('MERIT')
    }

    // Increment peace with optimistic update + API sync
    const incrementPeace = () => {
        error.value = null
        rateLimitMessage.value = null

        stats.value.peace++
        stats.value.totalClicks++
        saveLocalStats()

        console.log('🧘 Tapping wooden fish... (optimistic: PEACE)')

        // Gửi tap xuống BE (fire-and-forget)
        sendTapToBackend('PEACE')
    }

    // Increment karma with optimistic update + API sync
    const incrementKarma = () => {
        error.value = null
        rateLimitMessage.value = null

        stats.value.karma++
        stats.value.totalClicks++
        saveLocalStats()

        console.log('✨ Tapping wooden fish... (optimistic: KARMA)')

        // Gửi tap xuống BE (fire-and-forget)
        sendTapToBackend('KARMA')
    }

    const bigGo = () => {
        let random = Math.floor(Math.random() * 100) + 1;
        let randomScore = Math.floor(Math.random() * 10) + 1;
        let pointType = 'MERIT';

        if (random < 30) {
            stats.value.merit += randomScore;
            pointType = 'MERIT';
        } else if (random > 30 && random < 60) {
            stats.value.peace += randomScore;
            pointType = 'PEACE';
        } else {
            stats.value.karma += randomScore;
            pointType = 'KARMA';
        }
        stats.value.totalClicks++
        saveLocalStats()

        // Gửi tap xuống BE (fire-and-forget)
        sendTapToBackend(pointType)
    }

    // Reset stats
    const resetStats = () => {
        stats.value = {
            merit: 0,
            peace: 0,
            karma: 0,
            totalClicks: 0,
            level: 1
        }
        saveLocalStats()
    }

    // Computed values
    const level = computed(() => {
        // Mỗi 100 điểm = 1 cấp
        const total = stats.value.merit + stats.value.peace + stats.value.karma
        return Math.floor(total / 100) + 1
    })

    // Initialize on mount — API là source of truth, localStorage chỉ là fallback
    onMounted(() => {
        // Gọi API /me để lấy thông tin merit (source of truth)
        // Nếu API fail → fallback dùng localStorage
        loadMeritPoints()
    })

    return {
        stats,
        isLoading,
        error,
        rateLimitMessage,
        incrementMerit,
        incrementPeace,
        incrementKarma,
        resetStats,
        loadMeritPoints,
        bigGo,
        level
    }
}
