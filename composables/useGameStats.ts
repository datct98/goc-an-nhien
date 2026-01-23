import { ref, computed, onMounted } from 'vue'

export function useGameStats() {
    const stats = ref({
        merit: 0,
        peace: 0,
        karma: 0,
        totalClicks: 0
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

    // Load merit points from API (source of truth)
    const loadMeritPoints = async () => {
        if (isSyncing) return // Tránh gọi API nhiều lần

        try {
            isSyncing = true
            isLoading.value = true

            console.log('🔄 Fetching merit points from API...')
            // const data = await meritService.getPoints()
            // Update stats from backend (source of truth)
            // stats.value.merit = data.totalPoints || data
            // stats.value.totalClicks = data.totalPoints || data

            // Save to localStorage as backup
            saveLocalStats()
        } catch (err) {
            console.error('❌ Failed to load merit points from API:', err)
            // Keep using localStorage data if API fails
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

    // Increment merit via API with optimistic update
    const incrementMerit = () => {
        try {
            error.value = null
            rateLimitMessage.value = null

            // OPTIMISTIC UPDATE: Cộng điểm ngay lập tức ở FE
            stats.value.merit++
            stats.value.totalClicks++
            saveLocalStats()

            console.log('🔔 Tapping wooden fish... (optimistic update)')

            // Gọi API ở background
            // const result = await meritService.tap()

            // console.log('✅ Tap API response:', result)

            // // Sync với backend (backend là source of truth)
            // stats.value.merit = result.totalPoints
            saveLocalStats()

            return null
        } catch (err: any) {
            // Rollback optimistic update nếu API fail
            stats.value.merit--
            stats.value.totalClicks--
            saveLocalStats()
        }
    }

    // Local-only increments (not synced to API)
    const incrementPeace = () => {
        stats.value.peace++
        saveLocalStats()
    }

    const incrementKarma = () => {
        stats.value.karma++
        saveLocalStats()
    }

    const bigGo = () => {
        let random = Math.floor(Math.random() * 100) + 1;
        let randomScore = Math.floor(Math.random() * 10) + 1;
        if (random < 30) {
            stats.value.merit += randomScore;
        } else if (random > 30 && random < 60) {
            stats.value.peace += randomScore;
        } else {
            stats.value.karma += randomScore;
        }
        saveLocalStats()
    }

    // Reset stats
    const resetStats = () => {
        stats.value = {
            merit: 0,
            peace: 0,
            karma: 0,
            totalClicks: 0
        }
        saveLocalStats()
    }

    // Computed values
    const level = computed(() => {
        // Mỗi 100 điểm = 1 cấp
        return Math.floor(stats.value.merit / 100) + 1
    })

    // Initialize on mount
    onMounted(() => {
        // Load localStorage first for instant display
        loadLocalStats()

        // Then fetch from API to sync with backend
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
