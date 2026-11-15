export const useScore = () => {
    const leafPoint = useState<number>('leaf_point', () => 0)

    const increaseLeafPoint = (amount = 1) => {
        leafPoint.value += amount
    }

    return { leafPoint, increaseLeafPoint }
}
