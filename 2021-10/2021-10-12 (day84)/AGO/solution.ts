function canThreePartsEqualSum(arr: number[]): boolean {
  const sum = arr.reduce((a, b) => a + b);

  if (sum % 3 !== 0) return false;

  const partion = sum / 3;
  let part = 0;
  let sets = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    part += arr[i];
    if (part === partion) {
      sets++;
      part = 0;
      if (sets === 2) return true;
    }
  }
  return false;
};