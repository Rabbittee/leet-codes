function isPowerOfThree(n: number): boolean {
  if (n == 1)
    return true;
  if (n % 3 == 0 && n > 3) {
    return isPowerOfThree(n / 3);
  }
  if (n != 3)
    return false;
  else
    return true;
};