<template>
    <div class="register-form">
        <div class="w-full text-center mb-2">
            <span class="text-4xl" style="color: #5d4037">Đăng ký</span>
        </div>
        <div class="form-row">
            <label class="form-label" id="label-fullname">Mật danh</label>
            <div class="form-input">
                <input type="text" v-model="fullName" placeholder="Enter your full name" class="custom-input"
                    id="input-fullname" aria-labelledby="label-fullname" />
            </div>
        </div>

        <div class="form-row">
            <label class="form-label" id="label-email">Email</label>
            <div class="form-input">
                <input type="email" v-model="email" placeholder="Enter your email" class="custom-input" id="input-email"
                    aria-labelledby="label-email" />
            </div>
        </div>

        <div class="form-row">
            <label class="form-label" id="label-password">Password</label>
            <div class="form-input">
                <input type="password" v-model="password" placeholder="Enter your password" class="custom-input"
                    id="input-password" aria-labelledby="label-password" />
            </div>
        </div>

        <div class="form-row">
            <label class="form-label" id="label-confirm-password">Confirm</label>
            <div class="form-input">
                <input type="password" v-model="confirmPassword" placeholder="Confirm your password"
                    class="custom-input" id="input-confirm-password" aria-labelledby="label-confirm-password" />
            </div>
        </div>

        <div v-if="errorMessage" class="error-message" id="register-error">{{ errorMessage }}</div>

        <div class="button-group">
            <button class="btn-secondary" @click="handleCancel" id="btn-cancel">Cancel</button>
            <button class="btn-primary" @click="handleRegister" :disabled="isLoading" id="btn-submit">
                {{ isLoading ? 'Registering...' : 'Submit' }}
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { authService } from '~/services/authService';

const router = useRouter();

const fullName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const isLoading = ref(false);

const handleRegister = async () => {
    if (!fullName.value || !email.value || !password.value || !confirmPassword.value) {
        errorMessage.value = 'Please fill in all fields';
        return;
    }
    if (password.value !== confirmPassword.value) {
        errorMessage.value = 'Passwords do not match';
        return;
    }

    isLoading.value = true;
    errorMessage.value = '';

    try {
        const token = await authService.register(fullName.value, email.value, password.value);
        console.log('✅ Registration successful!', token);
        localStorage.setItem('jwt_token', token);
        router.push('/login');
    } catch (err) {
        console.error('❌ Registration failed:', err);
        errorMessage.value = err.response?.data?.message || 'Registration failed. Please try again.';
    } finally {
        isLoading.value = false;
    }
};

const handleCancel = () => {
    router.push('/login');
};
</script>

<style scoped>
* {
    font-family: DancingScript, cursive;
}

.register-form {
    width: 100%;
    max-width: 400px;
    padding: 15px;
    box-sizing: border-box;
}

.form-row {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    width: 100%;
}

.form-label {
    flex: 0 0 30%;
    color: #5d4037;
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    padding-right: 10px;
}

.form-input {
    flex: 0 0 70%;
}

.custom-input {
    width: 100%;
    padding: 8px 20px;
    border: 2px solid #ccb593;
    border-radius: 50px;
    background-color: #fffaf0;
    font-size: 18px;
    color: #5d4037;
    outline: none;
    box-sizing: border-box;
    transition: all 0.3s ease;
}

.custom-input::placeholder {
    color: #8d6e63;
    opacity: 0.6;
}

.custom-input:focus {
    border-color: #cbad8d;
    box-shadow: 0 0 5px rgba(203, 173, 141, 0.5);
}

.error-message {
    color: #c62828;
    font-size: 15px;
    text-align: center;
    margin-bottom: 10px;
    font-style: normal;
}

.button-group {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 15px;
}

.btn-primary {
    padding: 8px 24px;
    font-size: 18px;
    font-weight: 600;
    color: #6b4b2a;
    background: linear-gradient(to bottom, #fff2cc, #f2d59b);
    border: 2px solid #c8a86a;
    border-radius: 999px;
    box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.8), 0 3px 6px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn-primary:hover {
    background: linear-gradient(to bottom, #ffe8b0, #eac67a);
    transform: translateY(-1px);
}

.btn-primary:active {
    transform: translateY(1px);
}

.btn-primary:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.btn-secondary {
    padding: 8px 18px;
    font-size: 16px;
    color: #5d4037;
    background: transparent;
    border: 1.5px solid #d7c0a3;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn-secondary:hover {
    background-color: #f5ecd5;
}

@media (max-width: 480px) {
    .form-row {
        flex-direction: column;
        align-items: flex-start;
    }

    .form-label {
        flex: 0 0 100%;
        margin-bottom: 4px;
        padding-left: 15px;
    }

    .form-input {
        flex: 0 0 100%;
        width: 100%;
    }

    .button-group {
        justify-content: center;
        width: 100%;
    }
}
</style>
