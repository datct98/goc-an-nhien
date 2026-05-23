import axios from 'axios';

const worryApi = axios.create({
    baseURL: import.meta.env.VITE_PRAYER_API_URL || 'http://localhost:8083/api/v1',
    timeout: 10000
});

// Attach JWT token
worryApi.interceptors.request.use(
    config => {
        const token = localStorage.getItem('jwt_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

// Handle auth errors
worryApi.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            localStorage.removeItem('jwt_token');
            window.location.reload();
        }
        return Promise.reject(error);
    }
);

export const worryService = {
    /**
     * Release worry - CHÚ Ý: Chỉ gửi metadata, KHÔNG gửi content!
     * @param {number} characterCount - Số ký tự
     * @param {string} effectType - "BURN" hoặc "DISSOLVE"
     * @param {string} visualType - "JAR" hoặc "VOID"
     */
    async release(characterCount: number, effectType: string, visualType: string) {
        console.log('🌌 Releasing worry:', { characterCount, effectType, visualType });
        const { data } = await worryApi.post('/worries/release', {
            characterCount,
            effectType,
            visualType
        });
        console.log('✅ Worry released:', data);
        return data;
    },

    /**
     * Lấy lịch sử releases (chỉ metadata, không có content)
     */
    async getHistory() {
        console.log('📖 Fetching worry history...');
        const { data } = await worryApi.get('/worries/history');
        console.log(`✅ Found ${data.length} releases`);
        return data;
    },

    /**
     * Kiểm tra quota còn lại hôm nay
     */
    async getQuota() {
        console.log('🔍 Checking quota...');
        const { data } = await worryApi.get('/worries/quota');
        console.log(`✅ Quota: ${data.remaining}/${data.max}`);
        return data;
    }
};
