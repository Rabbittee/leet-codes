var reverse = function (x) {
  const scalar = Number(String(Math.abs(x)).split("").reverse().join(""));

  if (scalar > 2 ** 31) return 0;

  return Math.sign(x) * scalar;
};
