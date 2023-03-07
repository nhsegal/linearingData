import { addNoise } from './helperFunctions';

const makeData = (N, noise, coefficient, exponent, xMax, xPrecision, yPrecision) => {
  const dataObject = {
    rawData: [],
    sqData: [],
    invData: [],
    invSqData: [],
  };

  const baseSet = [];

  let xx;
  let yy;
  // Based on the exponent alter the sampling of x
  for (let i = 0; i < N; i += 1) {
    if (exponent === 1) {
      xx = (i + 1) / N;
    } else if (exponent === 2) {
      xx = Math.sqrt((i + 1) / N);
    } else if (exponent === -1) {
      xx = ((1 / N) ** 0.5) * ((i + 1) / N) ** -0.5;
    } else if (exponent === -2) {
      xx = ((1 / N) ** 0.5) * ((i + 1) / N) ** -0.5;
    }
    yy = xx ** exponent;
    // baseSet scaled to one in each direction
    baseSet.push({
      x: xx,
      y: yy,
    });
  }

  const baseWithNoiseSet = addNoise(baseSet, noise, exponent);
  dataObject.rawData = baseWithNoiseSet
    .map((point) => (
      {
        x: Math.round((xMax * point.x) / xPrecision) * xPrecision,
        y: Math.round((coefficient * point.y) / yPrecision) * yPrecision,
      }));
  dataObject.sqData = dataObject.rawData
    .map((point) => (
      {
        x: point.x ** 2,
        y: point.y,
      }));
  dataObject.invData = dataObject.rawData
    .map((point) => (
      {
        x: point.x ** -1,
        y: point.y,
      }));
  dataObject.invSqData = dataObject.rawData
    .map((point) => (
      {
        x: point.x ** -2,
        y: point.y,
      }));
  return dataObject;
};

export default makeData;
