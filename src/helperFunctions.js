const produceXLabel = (str, pow, forHTML = false) => {
  if (pow === 1 || pow === '1') {
    return str;
  }
  if (pow === 2 || pow === '2') {
    if (forHTML) {
      return `${str}<sup>2</sup>`;
    }
    return `${str}\u{00B2}`;
  }
  if (pow === -1 || pow === '-1') {
    if (forHTML) {
      return `${str}<sup>-1</sup>`;
    }
    return `${str}\u{207B}\u{00B9}`;
  }
  if (pow === -2 || pow === '-2') {
    if (forHTML) {
      return `${str}<sup>-2</sup>`;
    }
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
  return 'unexpected exp';
};

const addNoise = (
  dataSet,
  noiseAmp,
  power,
) => {
  const noisySet = dataSet.map(
    (point) => {
      const noisyPoint = {};
      // get the min values to ensure that no point is made negative
      const minX = dataSet.reduce((a, b) => {
        if (a.x < b.x) {
          return a;
        } return b;
      }).x;
      const minY = dataSet.reduce((a, b) => {
        if (a.y < b.y) {
          return a;
        } return b;
      }).y;
      let noiseX;
      let noiseY;
      // white noise for linear
      if (power === 1) {
        noiseX = noiseAmp * (Math.random() - 0.5);
        noiseY = noiseAmp * (Math.random() - 0.5);

        // add a litle more noise at the higher end for 2
      } else if (power === 2) {
        noiseX = noiseAmp
         * (Math.random() - 0.5) + noiseAmp * point.x * (Math.random() - 0.5);
        noiseY = noiseAmp
        * (Math.random() - 0.5) + noiseAmp * point.y * (Math.random() - 0.5);
      } else if (power === -1) {
        noiseX = noiseAmp
         * (Math.random() - 0.5) + 1.0 * noiseAmp * (1 - point.x) * (Math.random() - 0.5);
        noiseY = noiseAmp
        * (Math.random() - 0.5) + 1.0 * noiseAmp * (1 - point.y) * (Math.random() - 0.5);
      } else if (power === -2) {
        noiseX = noiseAmp
         * (Math.random() - 0.5) + 0.7 * noiseAmp * (1 - point.x) * (Math.random() - 0.5);
        noiseY = noiseAmp
        * (Math.random() - 0.5) + 0.7 * noiseAmp * (1 - point.y) * (Math.random() - 0.5);
      }
      // if any coordinate is negative
      if (point.x + noiseX <= 0) {
        noiseX = -minX / 2;
      }
      if (point.y + noiseY <= 0) {
        noiseY = -minY / 2;
      }
      // 1 - Math.floor(Math.log10(minX));

      noisyPoint.x = (point.x + noiseX).toFixed(3);
      noisyPoint.y = (point.y + noiseY).toFixed(3);
      return noisyPoint;
    },
  );

  return noisySet;
};

export { produceXLabel, produceXUnits, addNoise };
