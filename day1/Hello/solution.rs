use std::i32::{MAX, MIN};

impl Solution {
    pub fn reverse(x: i32) -> i32 {
        let mut x = x;
        let mut rev = 0;

        while x != 0 {
            let pop = x % 10;
            x /= 10;

            if rev > MAX / 10 || (rev == MAX / 10 && pop > 7) {
                return 0;
            }

            if rev < MIN / 10 || (rev == MIN / 10 && pop < -8) {
                return 0;
            }

            rev = rev * 10 + pop;
        }

        rev
    }
}