impl Solution {
    pub fn daily_temperatures(temperatures: Vec<i32>) -> Vec<i32> {
        temperatures
            .iter()
            .copied()
            .enumerate()
            .fold(
                (vec![0; temperatures.len()], vec![]),
                |(mut result, mut stack), (idx, temperature)| {
                    while let Some(&top) = stack.last() {
                        if temperatures[top] >= temperature {
                            break;
                        }

                        stack.pop();
                        result[top] = (idx - top) as i32;
                    }

                    stack.push(idx);

                    (result, stack)
                },
            )
            .0
    }
}
