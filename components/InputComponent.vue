<template>
    <div>
        <div class="input-group">
            <input type="text" v-model="username" placeholder="Tên đăng nhập" class="custom-input" />
        </div>
        <div class="input-group">
            <input type="password" v-model="password" placeholder="Mật khẩu" class="custom-input" />
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
const username = ref('');
const password = ref('');
</script>

<style scoped>
/* Bao quanh toàn bộ form để tạo nền giống giấy cũ */
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0e4d0;
    /* Màu nền giả lập giấy */
}

.login-box {
    background: #fdf5e6;
    padding: 40px;
    border-radius: 20px;
    width: 400px;
    text-align: center;
}

/* Style cho các ô Input */
.input-group {
    margin-bottom: 20px;
}

.custom-input {
    width: 100%;
    padding: 12px 25px;
    border: 2px solid #e8d5b5;
    border-radius: 50px;
    /* Bo tròn cực đại giống hình */
    background-color: #fffaf0;
    font-size: 18px;
    font-style: italic;
    color: #5d4037;
    outline: none;
    box-sizing: border-box;
    transition: all 0.3s ease;
}

.custom-input::placeholder {
    color: #8d6e63;
    opacity: 0.8;
}

.custom-input:focus {
    border-color: #cbad8d;
    box-shadow: 0 0 5px rgba(203, 173, 141, 0.5);
}

/* Style cho nhóm nút bấm */
.button-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
}

/* Nút Đăng nhập chính */
.btn-primary {
    background-color: #fff9eb;
    border: 2px solid #d7c0a3;
    border-radius: 30px;
    padding: 10px 30px;
    font-size: 20px;
    color: #4e342e;
    cursor: pointer;
    box-shadow: 0 4px 0 #e3d5c1;
    font-weight: bold;
}

.btn-primary:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0 #e3d5c1;
}

/* Nút Đăng ký và Quên mật khẩu */
.btn-secondary {
    background: transparent;
    border: 1.5px solid #d7c0a3;
    border-radius: 20px;
    padding: 5px 15px;
    font-size: 14px;
    color: #5d4037;
    cursor: pointer;
}

.btn-secondary:hover {
    background-color: #f5ecd5;
}
</style>