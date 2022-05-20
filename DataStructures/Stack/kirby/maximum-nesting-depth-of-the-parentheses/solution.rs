use std::cmp::max;

impl Solution {
    pub fn max_depth(s: String) -> i32 {
        s.chars()
            .fold((0, 0), |(stack_len, max_depth), char| match char {
                '(' => (stack_len + 1, max(max_depth, stack_len + 1)),
                ')' => (stack_len - 1, max_depth),
                _ => (stack_len, max_depth),
            })
            .1
    }
}
