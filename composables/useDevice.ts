export const useDevice = () => {
    const windowWidth = ref(800)

    const checkWidth = () => {
        windowWidth.value = window.innerWidth
    }

    const isMobileView = computed(() => {
        // console.log("windowWidth.value : ", windowWidth.value);
        return windowWidth.value <= 850
    })

    onMounted(() => {
        checkWidth()
        window.addEventListener('resize', checkWidth)
    })

    onUnmounted(() => {
        window.removeEventListener('resize', checkWidth)
    })

    return {
        windowWidth,
        isMobileView
    }
}