export const useConfig = () => {
    const isGiaiNghiepMode = useState<boolean>('is_giai_nghiep_mode', () => false)

    return { isGiaiNghiepMode }
}
