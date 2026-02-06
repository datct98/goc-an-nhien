<template>
    <div>
        <div class="input-group">
            <input type="text" v-model="username" placeholder="Tên đăng nhập" class="custom-input" />
        </div>
        <div class="input-group">
            <input type="password" v-model="password" placeholder="Mật khẩu" class="custom-input" />
        </div>
        <div class="button-group">
            <button class="btn-secondary">Đăng ký</button>
            <button class="btn-primary">Đăng nhập</button>
            <button class="btn-secondary">Quên pass</button>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
const username = ref('');
const password = ref('');
</script>

<style scoped>
* {
    font-family: DancingScript;
    font-style: italic;
}

/* Style cho các ô Input */
.input-group {
    margin-bottom: 5px;
}

.custom-input {
    width: 100%;
    padding: 5px 25px;
    border: 2px solid #ccb593;
    border-radius: 50px;
    background-color: #fffaf0;
    font-size: 16px;
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
}

/* Nút Đăng nhập chính */
.btn-primary {
    padding: 10px 26px;
    font-size: 16px;
    font-weight: 600;
    color: #6b4b2a;

    background: linear-gradient(to bottom,
            #fff2cc,
            #f2d59b);

    border: 2px solid #c8a86a;
    border-radius: 999px;

    box-shadow:
        inset 0 2px 0 rgba(255, 255, 255, 0.8),
        0 3px 6px rgba(0, 0, 0, 0.15);

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