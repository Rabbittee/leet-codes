func maxDepth(s string) int {
    max := 0
    stack := []byte{}
    
    for i := 0 ; i < len(s); i++ {
        if s[i] == '(' {
            stack = append(stack, s[i])
        }else if s[i] == ')' {
            stack = stack[:len(stack) - 1]
        }
        if len(stack) > max {
            max = len(stack)
        }
    }
    
    return max    
}