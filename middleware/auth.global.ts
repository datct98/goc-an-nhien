export default defineNuxtRouteMiddleware((to, from) => {

    const whiteList = [
        '/login', '/login/', '/register', '/register/'
    ]

    // Bỏ qua middleware cho các trang trong whiteList (tránh redirect loop)
    if (whiteList.includes(to.path)) {
        return
    }

    // return true;

    // Chỉ chạy ở client-side (localStorage không có trên server)
    if (import.meta.client) {
        const token = localStorage.getItem('jwt_token')

        if (!token) {
            console.warn('🔒 Chưa đăng nhập, chuyển hướng về /login')
            return navigateTo('/login?isWarning=true')
        }
    }
})
