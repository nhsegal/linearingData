const pickExponent = () => {
  const num = Math.random();
  if (num > 0.66) {
    return 2;
  }
  if (num > 0.33) {
    return -1;
  }
  return -2;
};

export default pickExponent;
