export const useInfo = () => {
    const name = useState<string>('user_name', () => 'Thích Phật Tử')
    const level = useState<number>('user_level', () => 0)

    return { name, level }
}
