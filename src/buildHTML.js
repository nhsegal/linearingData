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
  body.append(modalButton);
};

const makeHorizontalAxesControls = () => {
  const header = document.createElement('h2');
  header.textContent = 'Select the horizontal axes:';

  const rawDataOption = document.createElement('input');
  rawDataOption.type = 'radio';
  rawDataOption.name = 'x-axis';
  rawDataOption.value = 1;
  rawDataOption.id = 'raw-data-option';
  rawDataOption.checked = true;
  const rawDataOptionLabel = document.createElement('label');
  rawDataOptionLabel.for = 'raw-data-option';
  rawDataOptionLabel.innerHTML = 'placeholder <br>';

  const sqdDataOption = document.createElement('input');
  sqdDataOption.type = 'radio';
  sqdDataOption.name = 'x-axis';
  sqdDataOption.value = 2;
  sqdDataOption.id = 'sqd-data-option';
  const sqdDataOptionLabel = document.createElement('label');
  sqdDataOptionLabel.for = 'sqd-data-option';
  sqdDataOptionLabel.innerHTML = 'placeholder <br>';

  const invDataOption = document.createElement('input');
  invDataOption.type = 'radio';
  invDataOption.name = 'x-axis';
  invDataOption.value = -1;
  invDataOption.id = 'inv-data-option';
  const invDataOptionLabel = document.createElement('label');
  invDataOptionLabel.for = 'inv-data-option';
  invDataOptionLabel.innerHTML = 'placeholder <br>';

  const invSqdDataOption = document.createElement('input');
  invSqdDataOption.type = 'radio';
  invSqdDataOption.name = 'x-axis';
  invSqdDataOption.value = -1;
  invSqdDataOption.id = 'invsqd-data-option';
  const invSqdDataOptionLabel = document.createElement('label');
  invSqdDataOptionLabel.for = 'invsqd-data-option';
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
}

const makeSlopeSlider = () => {
  const header = document.createElement('h2');
  header.textContent = 'Adjust the slope of the trendline:';

  const slopeSlider = document.createElement('input');
  slopeSlider.type = 'range';
  slopeSlider.min = '0.05';
  slopeSlider.max = '5';
  slopeSlider.value = '0';
  slopeSlider.step = '0.05';
  slopeSlider.id = 'slope-slider';
  slopeSlider.classList.add('slider');
  slopeSlider.oninput = 'sliderFunction()';

  left.append(header, slopeSlider)
}



const makeLeftside = (resetFn) => {
  const newDatasetButton = document.createElement('button');
  newDatasetButton.type = 'button';
  newDatasetButton.id = 'newDataSet';
  newDatasetButton.textContent = 'New Data Set';
  newDatasetButton.onclick = resetFn;
  left.append(newDatasetButton);
  makeHorizontalAxesControls();
  makeSlopeSlider();
};

export { makeHeader, makeLeftside };
