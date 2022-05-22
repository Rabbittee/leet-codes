func dailyTemperatures(temperatures []int) []int {
    stack := make([]int, len(temperatures))
    res := make([]int, len(temperatures))
    stackIndex := -1
    
    for i:= 0; i < len(temperatures); i += 1 {
        for stackIndex >= 0 && temperatures[stack[stackIndex]] < temperatures[i] {
            res[stack[stackIndex]] = i - stack[stackIndex]
            stackIndex -= 1
        }
        stackIndex += 1
        stack[stackIndex] = i
    }
    return res
}