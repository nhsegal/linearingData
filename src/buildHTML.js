const left = document.querySelector('.left');
const body = document.querySelector('body');

const makeHeader = () => {
  const mainHeading = document.createElement('h1');
  mainHeading.textContent = 'Fit the Data';
  const modalButton = document.createElement('button');
  const modal = document.querySelector('#modal');
  modalButton.id = 'modal-button';
  modalButton.type = 'button';
  modalButton.textContent = 'Questions and Answers';
  modalButton.onclick = () => modal.classList.add('visible');
  const closeModalX = document.querySelector('#close');
  closeModalX.onclick = () => {
    modal.classList.remove('visible');
  };

  body.prepend(mainHeading);
  body.prepend(modalButton);
};

const makeHorizontalAxesControls = () => {
  const header = document.createElement('h2');
  header.textContent = 'Select the horizontal axes:';

  const rawDataOption = document.createElement('input');
  rawDataOption.type = 'radio';
  rawDataOption.name = 'x-axis';
  rawDataOption.value = 1;
  rawDataOption.id = 'raw_data_option';
  rawDataOption.checked = true;
  const rawDataOptionLabel = document.createElement('label');
  rawDataOptionLabel.setAttribute('for', 'raw_data_option');

  rawDataOptionLabel.innerHTML = 'placeholder <br>';

  const sqdDataOption = document.createElement('input');
  sqdDataOption.type = 'radio';
  sqdDataOption.name = 'x-axis';
  sqdDataOption.value = 2;
  sqdDataOption.id = 'sqd_data_option';
  const sqdDataOptionLabel = document.createElement('label');
  sqdDataOptionLabel.setAttribute('for', 'sqd_data_option');
  sqdDataOptionLabel.innerHTML = 'placeholder <br>';

  const invDataOption = document.createElement('input');
  invDataOption.type = 'radio';
  invDataOption.name = 'x-axis';
  invDataOption.value = -1;
  invDataOption.id = 'inv_data_option';
  const invDataOptionLabel = document.createElement('label');
  invDataOptionLabel.setAttribute('for', 'inv_data_option');
  invDataOptionLabel.innerHTML = 'placeholder <br>';

  const invSqdDataOption = document.createElement('input');
  invSqdDataOption.type = 'radio';
  invSqdDataOption.name = 'x-axis';
  invSqdDataOption.value = -2;
  invSqdDataOption.id = 'invsqd_data_option';
  const invSqdDataOptionLabel = document.createElement('label');
  invSqdDataOptionLabel.setAttribute('for', 'invsqd_data_option');
  invSqdDataOptionLabel.innerHTML = 'placeholder <br>';

  left.append(
    header,
    rawDataOption,
    rawDataOptionLabel,
    sqdDataOption,
    sqdDataOptionLabel,
    invDataOption,
    invDataOptionLabel,
    invSqdDataOption,
    invSqdDataOptionLabel,
  );
  // addELsToAxesControls(chart);
};

const makeSlopeSlider = (chart) => {
  const header = document.createElement('h2');
  header.textContent = 'Adjust the slope of the trendline:';
  left.append(header);
  const slopeSlider = document.createElement('input');
  slopeSlider.id = 'slope_slider';
  slopeSlider.type = 'range';
  slopeSlider.min = 0;
  const maxY = chart.data.datasets[0].data.reduce((a, b) => (a.y > b.y ? a : b)).y;
  slopeSlider.max = maxY * 3;
  slopeSlider.defaultValue = 0;
  slopeSlider.step = slopeSlider.max / 300;
  slopeSlider.classList.add('slider');
  left.appendChild(slopeSlider);
};

const renderUnitsFraction = (top, bot, ctn) => {
  ctn.classList.add('fraction');
  const fup = document.createElement('span');
  fup.id = 'fup';
  fup.classList.add('fup');
  fup.innerHTML = top;
  const fdn = document.createElement('span');
  fdn.id = 'fdn';
  fdn.classList.add('fdn');
  fdn.innerHTML = bot;
  ctn.append(fup, fdn);
  return ctn;
};

const renderTrendlineEquation = () => {
  const header = document.createElement('h2');
  header.textContent = 'Trendline equation:';
  const mathVersionLabel = document.createElement('div');
  mathVersionLabel.classList.add('eq-label');
  mathVersionLabel.textContent = 'Math Class Version';
  const mathVersionCtn = document.createElement('div');
  mathVersionCtn.classList.add('trendline-container-math');
  const mathTrendlineY = document.createElement('div');
  mathTrendlineY.classList.add('trendline');
  mathTrendlineY.id = 'trendline-equation-y-math';
  mathTrendlineY.textContent = 'y=';

  const mathTrendlineSlope = document.createElement('div');
  mathTrendlineSlope.classList.add('trendline');
  mathTrendlineSlope.id = 'trendline-equation-slope-math';
  mathTrendlineSlope.textContent = '8';

  const mathTrendlineX = document.createElement('div');
  mathTrendlineX.classList.add('trendline');
  mathTrendlineX.id = 'trendline-equation-x-math';
  mathTrendlineX.textContent = 'x';
  mathVersionCtn.append(mathTrendlineY, mathTrendlineSlope, mathTrendlineX);

  left.append(header, mathVersionLabel, mathVersionCtn);

  const physicsVersionLabel = document.createElement('div');
  physicsVersionLabel.classList.add('eq-label');
  physicsVersionLabel.textContent = 'Physics Class Version';
  const physicsVersionCtn = document.createElement('div');
  physicsVersionCtn.classList.add('trendline-container-physics');
  const physicsTrendlineY = document.createElement('div');
  physicsTrendlineY.classList.add('trendline');
  physicsTrendlineY.id = 'trendline-equation-y-physics';
  physicsTrendlineY.textContent = 'y=';

  const physicsTrendlineSlope = document.createElement('div');
  physicsTrendlineSlope.classList.add('trendline');
  physicsTrendlineSlope.id = 'trendline-equation-slope-physics';
  physicsTrendlineSlope.textContent = '8';

  const physicsTrendlineSlopeUnits = document.createElement('div');
  physicsTrendlineSlopeUnits.classList.add('trendline');

  const physicsTrendlineX = document.createElement('div');
  physicsTrendlineX.classList.add('trendline');
  physicsTrendlineX.id = 'trendline-equation-x-math';
  physicsTrendlineX.textContent = 'x';
  physicsVersionCtn.append(
    physicsTrendlineY,
    renderUnitsFraction('kg', 'd<sup>2</sup>', physicsTrendlineSlopeUnits),
    physicsTrendlineSlope,
    physicsTrendlineX,
  );

  left.append(physicsVersionLabel, physicsVersionCtn);
};

const makeLeftside = (chart) => {
  const newDatasetButton = document.createElement('button');
  newDatasetButton.type = 'button';
  newDatasetButton.id = 'newDataSet';
  newDatasetButton.textContent = 'New Data Set';
  // newDatasetButton.onclick = resetFn;
  left.append(newDatasetButton);
  makeHorizontalAxesControls(chart);
  makeSlopeSlider(chart);
  renderTrendlineEquation();
};

export { makeHeader, makeLeftside };
