package main

import "fmt"

func dailyTemperatures(temperatures []int) []int {
    stack := make([]int, 0)
    result := make([]int, len(temperatures))
    for i, v := range temperatures {
        for len(stack) != 0 && temperatures[stack[len(stack)-1]] < v {
            result[stack[len(stack)-1]] = i - stack[len(stack)-1]
            stack = stack[:len(stack)-1]
        }
        stack = append(stack, i)
    }
    return result
}

func main() {
    input := []int{73, 74, 75, 71, 69, 72, 76, 73}
    fmt.Printf("%+v\n", dailyTemperatures(input))
}
