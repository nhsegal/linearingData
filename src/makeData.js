const makeData = (N, noise, coefficient, exponent, xMax) => {
  const dataObject = {
    rawData: [],
    sqData: [],
    invData: [],
    invSqData: [],
  };
  for (let i = 0; i < N; i += 1) {
    let xx = (xMax / 10)
    * ((10 * (1 + i)) / N + noise * (Math.round(Math.random() * 10) / 10 - 0.5));
    while (xx <= 0) {
      xx = (10 * (1 + i)) / N
        + noise * (Math.round(Math.random() * 10) / 10 - 0.5);
    }
    const yy = Math.round(
      100
          * (coefficient
            * (xx
              + (1 + 0.5 * exponent)
                * (4 / (i + 4))
                * noise
                * (Math.round(Math.random() * 10) / 10 - 0.5))
              ** exponent),
    ) / 100;

    dataObject.rawData.push({
      x: Math.round(100 * xx) / 100,
      y: Math.round(yy * 100) / 100,
    });
    dataObject.sqData.push({
      x: Math.round(100 * xx ** 2) / 100,
      y: Math.round(yy * 100) / 100,
    });
    dataObject.invData.push({
      x: Math.round(1000 * xx ** -1) / 1000,
      y: Math.round(yy * 100) / 100,
    });
    dataObject.invSqData.push({
      x: Math.round(1000 * xx ** -2) / 1000,
      y: Math.round(yy * 100) / 100,
    });
  }
  return dataObject;
};

export default makeData;
