<template>
    <ContainerWithBackground src="/login/lg.png" aria-label="Quần đảo Góc An Nhiên" background-size="cover"
        :offset-top="0" custom-class="register-scene">
        <SakuraEffect />
        <main class="register-screen" aria-label="Đăng ký Góc An Nhiên">
            <section class="register-composition">
                <div class="register-frame">
                    <form class="register-form" @submit.prevent="handleRegister">
                        <IconField class="register-icon-field register-fullname">
                            <InputIcon class="pi pi-user" />
                            <InputText id="register-fullname" v-model.trim="fullName" class="register-input"
                                type="text" name="fullName" placeholder="Họ và tên" autocomplete="off" required />
                        </IconField>

                        <IconField class="register-icon-field register-email">
                            <InputIcon class="pi pi-envelope" />
                            <InputText id="register-email" v-model.trim="email" class="register-input"
                                type="email" name="email" placeholder="Email" autocomplete="off" required />
                        </IconField>

                        <IconField class="register-icon-field register-password">
                            <InputIcon class="pi pi-lock" />
                            <InputPassword inputId="register-password" v-model="password" class="register-password-input"
                                inputClass="register-input" name="password" placeholder="Mật khẩu"
                                autocomplete="off" :feedback="false" toggleMask required />
                        </IconField>

                        <IconField class="register-icon-field register-confirm-password">
                            <InputIcon class="pi pi-lock" />
                            <InputPassword inputId="register-confirm-password" v-model="confirmPassword"
                                class="register-password-input" inputClass="register-input" name="confirmPassword"
                                placeholder="Xác nhận mật khẩu" autocomplete="off" :feedback="false"
                                toggleMask required />
                        </IconField>

                        <div class="register-actions">
                            <p v-if="errorMessage" class="register-error" role="alert">{{ errorMessage }}</p>
                            <div class="register-buttons">
                                <button class="register-cancel" type="button" @click="handleCancel">Hủy</button>
                                <button class="register-submit" type="submit" :disabled="isLoading">
                                    {{ isLoading ? 'Đang đăng ký…' : 'Đăng ký' }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </main>
        <div class="register-monk">
            <Image src="/login/prayer.png" alt="Chú tiểu chắp tay cầu nguyện" />
        </div>
    </ContainerWithBackground>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import ContainerWithBackground from '~/components/layout/ContainerWithBackground.vue';
import InputPassword from 'primevue/password';
import SakuraEffect from '~/components/effects/SakuraEffect.vue';
import { useAuth } from '~/composables/useAuth';

definePageMeta({ layout: 'login_layout' });

const router = useRouter();
const route = useRoute();
const { $common } = useNuxtApp();
const { register } = useAuth();
const fullName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const isLoading = ref(false);

onMounted(() => {
    if (route.query.isWarning) {
        $common.showWarning('🔒 Chưa đăng nhập, chuyển hướng về /login');
    }
});

const handleRegister = async () => {
    errorMessage.value = '';
    if (password.value !== confirmPassword.value) {
        errorMessage.value = 'Mật khẩu xác nhận không khớp.';
        return;
    }

    isLoading.value = true;
    try {
        await register(fullName.value, email.value, password.value);
        await router.push('/home');
    } catch (error) {
        errorMessage.value = error?.response?.data?.message || 'Đăng ký thất bại. Vui lòng thử lại.';
    } finally {
        isLoading.value = false;
    }
};

const handleCancel = () => router.push('/login');
</script>

<style scoped src="./index.css"></style>
