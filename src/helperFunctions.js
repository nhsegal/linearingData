const produceXLabel = (str, pow) => {
  if (pow === 1 || pow === '1') {
    return str;
  }
  if (pow === 2 || pow === '2') {
    return `${str}\u{00B2}`;
  }
  if (pow === -1 || pow === '-1') {
    return `${str}\u{207B}\u{00B9}`;
  }
  if (pow === -2 || pow === '-2') {
    return `${str}\u{207B}\u{00B2}`;
  }
  console.error('unexpected exponent');
  return true;
};

const produceXUnits = (str, pow) => {
  if (pow === 1 || pow === '1') {
    return str;
  }
  if (pow === 2 || pow === '2') {
    if (!str.includes('/')) return `${str}\u{00B2}`;
    const frac = str.split('/');
    return `${frac[0]}\u{00B2}/${frac[1]}\u{00B2}`;
  }
  if (pow === -1 || pow === '-1') {
    if (!str.includes('/')) return `${str}\u{207B}\u{00B9}`;
    const frac = str.split('/');
    return `${frac[1]}/${frac[0]}`;
  }
  if (pow === -2 || pow === '-2') {
    if (!str.includes('/')) return `${str}\u{207B}\u{00B2}`;
    const frac = str.split('/');
    return `${frac[1]}\u{00B2}/${frac[0]}\u{00B2}`;
  }
  console.error('unexpected exponent');
  return true;
};

export { produceXLabel, produceXUnits };
