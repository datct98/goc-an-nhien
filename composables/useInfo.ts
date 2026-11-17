export const useInfo = () => {
    const name = useState<string>('user_name', () => 'Thích Phật Tử')
    const level = useState<number>('user_level', () => 0)
    const current = useState<number>('user_current_experience', () => 0)
    const target = useState<number>('user_target_experience', () => 3)

    const increaseExperience = (amount = 1) => {
        current.value += amount

        while (current.value >= target.value) {
            current.value -= target.value
            level.value += 1
            target.value += 1
        }
    }

    return { name, level, current, target, increaseExperience }
}
