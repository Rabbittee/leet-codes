fn is_palindrome(x: i32) -> bool {
    let rev = x.to_string();

    rev.chars().rev().eq(rev.chars())
}
