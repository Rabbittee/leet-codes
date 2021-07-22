use std::{cmp::max, usize};

fn longest_palindrome(s: String) -> String {
    let s = s.as_bytes();
    let len = s.len() as i32;

    let (mut start, mut end) = (0, 0);

    for i in 0..len {
        let len = max(
            expand_around_center(&s, len, i, i),
            expand_around_center(&s, len, i, i + 1),
        );

        if len > end - start + 1 {
            start = max(i - (len - 1) / 2, 0);
            end = i + (len / 2);
        }
    }

    let (start, end) = (start as usize, end as usize);
    return String::from_utf8(s[start..end + 1].to_vec()).unwrap();
}

fn expand_around_center(s: &[u8], len: i32, from: i32, end: i32) -> i32 {
    let (mut l, mut r) = (from, end);

    while l >= 0 && r < len && s[l as usize] == s[r as usize] {
        l -= 1;
        r += 1;
    }

    r - l - 1
}
