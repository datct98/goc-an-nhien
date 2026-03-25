export default defineNuxtRouteMiddleware((to, from) => {
    // Bỏ qua middleware cho trang login (tránh redirect loop)
    if (to.path === '/login' || to.path === '/login/') {
        return
    }

    // Chỉ chạy ở client-side (localStorage không có trên server)
    if (import.meta.client) {
        const token = localStorage.getItem('jwt_token')

        if (!token) {
            console.warn('🔒 Chưa đăng nhập, chuyển hướng về /login')
            return navigateTo('/login?isWarning=true')
        }
    }
})
