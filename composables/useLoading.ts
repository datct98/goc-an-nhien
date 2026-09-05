export const useLoading = () => {
    // lưu biến toàn cục
    const isLoading = useState<boolean>('global_loading', () => false)

    const showLoading = () => {
        isLoading.value = true;
        console.log("showLoading");
    }
    const hideLoading = () => {
        isLoading.value = false
        console.log("hideLoading");
    }

    return { isLoading, showLoading, hideLoading }
}