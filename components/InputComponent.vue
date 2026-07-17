<template>
    <div class="login-form">
        <div class="input-group">
            <div class="input-wrapper">
                <font-awesome-icon :icon="['fas', 'envelope']" class="input-icon-left" />
                <input type="text" v-model="email" placeholder="Nhập email của bạn" class="custom-input"
                    @keyup.enter="handleLogin" autocomplete="off" />
            </div>
        </div>
        <div class="input-group">
            <div class="input-wrapper">
                <font-awesome-icon :icon="['fas', 'lock']" class="input-icon-left" />
                <input :type="showPassword ? 'text' : 'password'" v-model="password" placeholder="Nhập mật khẩu"
                    class="custom-input has-right-icon" @keyup.enter="handleLogin" />
                <font-awesome-icon :icon="['fas', showPassword ? 'eye-slash' : 'eye']" class="input-icon-right"
                    @click="togglePasswordVisibility" />
            </div>
        </div>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        <div class="button-group">
            <button class="btn-secondary" @click="goToRegister">Đăng ký</button>
            <button class="btn-primary" @click="handleLogin" :disabled="isLoading">
                Đăng nhập
            </button>
            <button class="btn-secondary">Quên pass</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '~/composables/useAuth';

const router = useRouter();
const { login, isLoading } = useAuth();

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const showPassword = ref(false);

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};

const goToRegister = () => {
    console.log("goToRegister ---> ")
    router.push('/register');
};

const handleLogin = async () => {
    // Validate
    if (!email.value || !password.value) {
        errorMessage.value = 'Vui lòng nhập email và mật khẩu';
        return;
    }

    try {
        errorMessage.value = '';
        await login(email.value, password.value);

        console.log('✅ Đăng nhập thành công!');
        // Redirect to home after login
        router.push('/home');
    } catch (err) {
        console.error('❌ Login failed:', err);
        errorMessage.value = err.response?.data?.message || 'Đăng nhập thất bại. Vui lòng kiểm tra email và mật khẩu.';
    }
};
</script>

<style scoped>
/* Style cho các ô Input */
.input-group {
    margin-bottom: 12px;
}

.input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
}

.input-icon-left {
    position: absolute;
    left: 20px;
    color: #a1887f;
    font-size: 16px;
    pointer-events: none;
}

.input-icon-right {
    position: absolute;
    right: 20px;
    color: #a1887f;
    font-size: 16px;
    cursor: pointer;
    transition: color 0.2s ease, transform 0.2s ease;
}

.input-icon-right:hover {
    color: #5d4037;
    transform: scale(1.15);
}

.input-icon-right:active {
    transform: scale(0.9);
}

.custom-input {
    width: 100%;
    padding: 10px 20px 10px 48px;
    border: 2px solid #ccb593;
    border-radius: 50px;
    background-color: #fdfbf7;
    /* Màu trắng sữa / be rất nhạt */
    font-size: 16px;
    color: #5d4037;
    outline: none;
    box-sizing: border-box;
    transition: all 0.3s ease;
}

.custom-input.has-right-icon {
    padding-right: 48px;
}

.custom-input::placeholder {
    color: #a1887f;
    opacity: 0.7;
}

.custom-input:focus {
    border-color: #bcaaa4;
    background-color: #ffffff;
    box-shadow: 0 0 8px rgba(188, 170, 164, 0.4);
}

/* Error message */
.error-message {
    color: #c62828;
    font-size: 15px;
    text-align: center;
    margin-bottom: 5px;
    font-style: normal;
}

/* Style cho nhóm nút bấm */
.button-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Nút Đăng nhập chính */
.btn-primary {
    padding: 10px 26px;
    font-size: 18px;
    font-weight: 600;
    color: #6b4b2a;

    background: linear-gradient(to bottom,
            #fff2cc,
            #f2d59b);

    border: 2px solid #c8a86a;
    border-radius: 999px;

    box-shadow:
        inset 0 2px 0 rgba(255, 255, 255, 0.8),
        0 3px 6px rgba(0, 0, 0, 0.1);

    cursor: pointer;
    transition: all 0.2s ease;
}

.btn-primary:hover {
    background: linear-gradient(to bottom,
            #ffe8b0,
            #eac67a);
}

.btn-primary:active {
    transform: translateY(1px);
    box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.6),
        0 2px 4px rgba(0, 0, 0, 0.2);
}

.btn-primary:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

/* Nút Đăng ký và Quên mật khẩu */
.btn-secondary {
    background: transparent;
    border: 1.5px solid #d7c0a3;
    border-radius: 20px;
    padding: 5px 15px;
    font-size: 18px;
    font-weight: 500;
    color: #5d4037;
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn-secondary:hover {
    background-color: #f5ecd5;
}

.login-form {
    width: 100%;
    max-width: 400px;
    padding: 15px;
    box-sizing: border-box;
}
</style>