export const useLoading = () => {
    // lưu biến toàn cục
    const isLoading = useState<boolean>('global_loading', () => false)
    const progress = useState<number>('progress_loading', () => 0)

    const showLoading = () => {
        isLoading.value = true;
        console.log("showLoading");
    }
    const hideLoading = () => {
        isLoading.value = false
        console.log("hideLoading");
    }
    const setProgress = (value: number) => {
        progress.value = value
    }

    return { isLoading, progress, showLoading, hideLoading, setProgress }
}