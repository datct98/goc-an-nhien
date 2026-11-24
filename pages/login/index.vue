<template>
    <ContainerWithBackground src="/login/lg.png" aria-label="Quần đảo Góc An Nhiên" background-size="cover"
        :offset-top="0" custom-class="login-scene">
        <main class="login-screen" aria-label="Đăng nhập Góc An Nhiên">
            <section class="login-composition">
                <div class="login-frame">
                    <!-- login form -->
                    <!-- <form class="login-form" @submit.prevent="handleLogin">
                        <label class="sr-only" for="login-username">Tên đăng nhập</label>
                        <input id="login-username" v-model.trim="username" class="login-input username-input"
                            type="text" name="username" placeholder="Tên đăng nhập" autocomplete="username" required />

                        <label class="sr-only" for="login-password">Mật khẩu</label>
                        <div class="password-field">
                            <input id="login-password" v-model="password" class="login-input"
                                :type="showPassword ? 'text' : 'password'" name="password" placeholder="Mật khẩu"
                                autocomplete="current-password" required />
                            <button class="password-toggle" type="button"
                                :aria-label="showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'"
                                @click="showPassword = !showPassword">
                                {{ showPassword ? 'Ẩn' : '◉' }}
                            </button>
                        </div>

                        <div class="login-options">
                            <label class="remember-option">
                                <input v-model="rememberLogin" type="checkbox" name="remember" />
                                <span>Ghi nhớ đăng nhập</span>
                            </label>
                            <button class="forgot-link" type="button" @click="goToForgotPassword">
                                Quên mật khẩu?
                            </button>
                        </div>

                        <p v-if="errorMessage" class="login-error" role="alert">{{ errorMessage }}</p>
                        <button class="submit-button" type="submit" :disabled="isLoading">
                            {{ isLoading ? 'Đang đăng nhập…' : 'Đăng nhập' }}
                        </button>
                    </form> -->
                </div>
            </section>
        </main>
        <div class="prayer-monk">
            <Image src="/login/prayer.png" alt="Chú tiểu chắp tay cầu nguyện" />
        </div>
    </ContainerWithBackground>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import ContainerWithBackground from '~/components/layout/ContainerWithBackground.vue';
import { useAuth } from '~/composables/useAuth';

definePageMeta({ layout: 'login_layout' });

const router = useRouter();
const { login, isLoading } = useAuth();
const username = ref('');
const password = ref('');
const rememberLogin = ref(false);
const showPassword = ref(false);
const errorMessage = ref('');

onMounted(() => {
    const rememberedUsername = localStorage.getItem('remember_login');
    if (rememberedUsername) {
        username.value = rememberedUsername;
        rememberLogin.value = true;
    }
});

const handleLogin = async () => {
    errorMessage.value = '';
    try {
        await login(username.value, password.value);
        if (rememberLogin.value && process.client) {
            localStorage.setItem('remember_login', username.value);
        } else if (process.client) {
            localStorage.removeItem('remember_login');
        }
        await router.push('/home');
    } catch (error) {
        errorMessage.value = error?.response?.data?.message || 'Đăng nhập thất bại. Vui lòng kiểm tra thông tin.';
    }
};

const goToForgotPassword = () => router.push('/forgot-password');
</script>

<style scoped src="./index.css"></style>
