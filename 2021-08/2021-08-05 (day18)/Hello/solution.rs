use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut cache = HashMap::new();

        for (index, num) in nums.iter().enumerate() {
            if let Some(pre_index) = cache.get(num) {
                return vec![*pre_index, index as i32];
            }

            cache.insert(target - num, index as i32);
        }

        unreachable!()
    }
}
