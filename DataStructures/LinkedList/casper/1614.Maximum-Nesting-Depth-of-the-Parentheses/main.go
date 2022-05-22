package main

func maxDepth(s string) int {
    currentDepth, maximuxDepth := 0, 0
    for _, c := range s {
        if c == '(' {
            currentDepth += 1
            maximuxDepth = max(maximuxDepth, currentDepth)

        } else if c == ')' {
            currentDepth -= 1
        }
    }
    return maximuxDepth
}

func max(a int, b int) int {
    if a > b {
        return a
    }
    return b
}

func main() {
    s := "(1+(2*3)+((8)/4))+1"
    println(maxDepth(s))
}
