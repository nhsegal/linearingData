import modalContent from './modalContent';

const left = document.querySelector('.left');

const makeModal = () => {
  const modalContentDiv = document.createElement('div');
  modalContentDiv.innerHTML = modalContent;
  const modal = document.getElementById('modal');
  modal.append(modalContent);
};

const makeHeader = () => {
  makeModal();
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
  const body = document.querySelector('body');
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
  rawDataOptionLabel.innerHTML = '';
  const sqdDataOption = document.createElement('input');
  sqdDataOption.type = 'radio';
  sqdDataOption.name = 'x-axis';
  sqdDataOption.value = 2;
  sqdDataOption.id = 'sqd_data_option';
  const sqdDataOptionLabel = document.createElement('label');
  sqdDataOptionLabel.setAttribute('for', 'sqd_data_option');
  sqdDataOptionLabel.innerHTML = '';

  const invDataOption = document.createElement('input');
  invDataOption.type = 'radio';
  invDataOption.name = 'x-axis';
  invDataOption.value = -1;
  invDataOption.id = 'inv_data_option';
  const invDataOptionLabel = document.createElement('label');
  invDataOptionLabel.setAttribute('for', 'inv_data_option');
  invDataOptionLabel.innerHTML = '';

  const invSqdDataOption = document.createElement('input');
  invSqdDataOption.type = 'radio';
  invSqdDataOption.name = 'x-axis';
  invSqdDataOption.value = -2;
  invSqdDataOption.id = 'invsqd_data_option';
  const invSqdDataOptionLabel = document.createElement('label');
  invSqdDataOptionLabel.setAttribute('for', 'invsqd_data_option');
  invSqdDataOptionLabel.innerHTML = '';

  const spacer = document.createElement('div');
  spacer.classList.add('spacer');
  spacer.innerHTML = ' <br>';

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
    spacer,
  );
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
  slopeSlider.step = slopeSlider.max / 400;
  slopeSlider.classList.add('slider');

  left.appendChild(slopeSlider);
};

const renderUnitsFraction = (top, bot, ctn, topid, botid) => {
  ctn.classList.add('fraction');
  const fup = document.createElement('span');
  fup.id = topid;
  fup.classList.add('fup');
  fup.innerHTML = top;
  const fdn = document.createElement('span');
  fdn.id = botid;
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
  mathTrendlineY.textContent = '';

  const mathTrendlineSlope = document.createElement('div');
  mathTrendlineSlope.classList.add('trendline');
  mathTrendlineSlope.id = 'trendline-equation-slope-math';
  mathTrendlineSlope.textContent = '';

  const mathTrendlineX = document.createElement('div');
  mathTrendlineX.classList.add('trendline');
  mathTrendlineX.id = 'trendline-equation-x-math';
  mathTrendlineX.textContent = '';
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
  physicsTrendlineY.textContent = '';

  const physicsTrendlineSlope = document.createElement('div');
  physicsTrendlineSlope.classList.add('trendline');
  physicsTrendlineSlope.id = 'trendline-equation-slope-physics';
  physicsTrendlineSlope.textContent = '';

  const physicsTrendlineSlopeUnits = document.createElement('div');
  physicsTrendlineSlopeUnits.classList.add('trendline');
  const closingParent = document.createElement('div');
  closingParent.id = 'closing_paren';

  physicsTrendlineSlope.classList.add('trendline');
  const physicsTrendlineX = document.createElement('div');
  physicsTrendlineX.classList.add('trendline');
  physicsTrendlineX.id = 'trendline-equation-x-physics';
  physicsTrendlineX.textContent = '';
  physicsVersionCtn.append(
    physicsTrendlineY,
    physicsTrendlineSlope,
    renderUnitsFraction('', '', physicsTrendlineSlopeUnits, 'fup1', 'fdn1'),
    closingParent,
    physicsTrendlineX,
  );

  left.append(physicsVersionLabel, physicsVersionCtn);
};

function refreshPage() {
  window.location.reload();
}

const makeLeftside = (chart) => {
  const newDatasetButton = document.createElement('button');
  newDatasetButton.type = 'button';
  newDatasetButton.id = 'newDataSet';
  newDatasetButton.textContent = 'New Data Set';
  newDatasetButton.onclick = refreshPage;
  left.append(newDatasetButton);
  makeHorizontalAxesControls(chart);
  makeSlopeSlider(chart);
  renderTrendlineEquation();
};

const makeRightside = () => {
  const header = document.createElement('h2');
  header.textContent = 'Plot a curve:';
  const plotdiv = document.createElement('div');
  plotdiv.classList.add('plotdiv');
  plotdiv.innerHTML = 'Once you have transformed and fit your data, '
    + 'type in the coefficient and exponent '
    + 'that best describe the relationship: ';
  const right = document.querySelector('.right');

  const eqnToPlotDiv = document.createElement('div');
  eqnToPlotDiv.id = 'eq';
  const depVar = document.createElement('div');
  depVar.id = 'dep_var';
  depVar.textContent = '';

  const coefficient = document.createElement('input');
  coefficient.id = 'coefficient';
  coefficient.type = 'text';

  const plotEqSlopeUnits = document.createElement('div');
  plotEqSlopeUnits.classList.add('fraction', 'trendline');
  plotEqSlopeUnits.id = 'slope_units_eqn_to_plot';

  const indepVar = document.createElement('div');
  indepVar.id = 'indep_var';
  indepVar.textContent = '';
  const power = document.createElement('input');
  power.id = 'exp';

  eqnToPlotDiv.append(
    depVar,
    coefficient,
    renderUnitsFraction('', '', plotEqSlopeUnits, 'fup2', 'fdn2'),
    indepVar,
    power,
  );

  const plotDataButton = document.createElement('button');
  plotDataButton.type = 'button';
  plotDataButton.setAttribute('id', 'submit');
  plotDataButton.textContent = 'Submit';

  const errorDiv = document.createElement('div');
  errorDiv.id = 'error';

  right.append(header, plotdiv, eqnToPlotDiv, plotDataButton, errorDiv);
};

const makeCenter = () => {
  const center = document.querySelector('.center');
  const plottedTrendlineContainer = document.createElement('div');
  plottedTrendlineContainer.classList.add('plotted-trendline-container');
  const plottedTrendlineY = document.createElement('div');
  plottedTrendlineY.classList.add('trendline');
  plottedTrendlineY.id = 'plotted-trendline-y';

  const plottedTrendlineSlope = document.createElement('div');
  plottedTrendlineSlope.classList.add('trendline');
  plottedTrendlineSlope.id = 'plotted-trendline-slope';

  const plottedTrendlineSlopeUnits = document.createElement('div');
  plottedTrendlineSlopeUnits.classList.add('trendline');

  const plottedTrendlineX = document.createElement('div');
  plottedTrendlineX.classList.add('trendline');
  plottedTrendlineX.id = 'plotted-trendline-x';

  plottedTrendlineContainer.append(
    plottedTrendlineY,
    plottedTrendlineSlope,
    renderUnitsFraction('', '', plottedTrendlineSlopeUnits, 'fup3', 'fdn3'),
    plottedTrendlineX,
  );

  center.append(plottedTrendlineContainer);
};

export {
  makeHeader, makeLeftside, makeRightside, makeCenter,
};
