import { addNoise } from './helperFunctions';

const makeData = (N, noise, coefficient, exponent, xMax) => {
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
      xx = ((i + 1) / N) ** -1;
    } else if (exponent === -2) {
      xx = ((i + 1) / N) ** -0.5;
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
        x: Math.round(xMax * point.x * 10) / 10,
        y: Math.round(coefficient * point.y * 10) / 10,
      }));
  dataObject.sqData = baseWithNoiseSet
    .map((point) => (
      {
        x: (Math.round(xMax * point.x * 10) / 10) ** 2,
        y: Math.round(coefficient * point.y * 10) / 10,
      }));
  dataObject.invData = baseWithNoiseSet
    .map((point) => (
      {
        x: (Math.round(xMax * point.x * 10) / 10) ** -1,
        y: Math.round(coefficient * point.y * 10) / 10,
      }));
  dataObject.invSqData = baseWithNoiseSet
    .map((point) => (
      {
        x: (Math.round(xMax * point.x * 10) / 10) ** -2,
        y: Math.round(coefficient * point.y * 10) / 10,
      }));
  return dataObject;
};

export default makeData;
