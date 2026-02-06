<template>
    <div class="bubble">
        <slot></slot>
    </div>
</template>

<style scoped>
.bubble {
    width: 100px;
    height: 100px;
    border-radius: 50%;

    background: radial-gradient(circle at 100% 100%,
            rgba(255, 255, 255, 0.85),
            rgba(255, 235, 237, 0.35),
            rgba(215, 220, 221, 0.45));

    /* nếu background phía sau có hình → rất đẹp */
    backdrop-filter: blur(2px);

    box-shadow:
        inset -10px -10px 20px rgba(255, 255, 255, 0.5),
        inset 6px 6px 14px rgba(0, 0, 0, 0.06),
        0 6px 12px rgba(0, 0, 0, 0.08);

    animation: floatY 4s ease-in-out infinite alternate;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bubble:hover {
    cursor: pointer;
}

@keyframes floatY {
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(-25px);
    }
}
</style>
