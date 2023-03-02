const alterHTML = (exp) => {
  const rawDataOption = document.querySelector('label[for="rawData"]');
  const sqDataOption = document.querySelector('label[for="sqData"]');
  const invDataOption = document.querySelector('label[for="invData"]');
  const invSqDataOption = document.querySelector('label[for="invSqData"]');
  const indepVar = document.querySelector('#indep-var');
  const depVar = document.querySelector('#dep-var');
  const fup2 = document.querySelector('#fup-2');
  const fdn2 = document.querySelector('#fdn-2');

  switch (exp) {
    case 2:
      xName = 'Side Length';
      xSymbol = '\u{1D459}';
      yName = 'Mass';
      ySymbol = '\u{1D45a}';
      xUnits = 'cm';
      yUnits = 'g';
      break;
    case -1:
      xName = 'Length';
      xSymbol = '\u{1D459}';
      yName = 'Height';
      ySymbol = '\u{210E}';
      xUnits = 'cm';
      yUnits = 'cm';
      break;
    case -2:
      xName = 'Distance';
      xSymbol = '\u{1D451}';
      yName = 'Intensity';
      ySymbol = '\u{1D43C}';
      xUnits = 'm';
      yUnits = 'W/m\u00B2';

      break;
    default:
      console.log('error?');
  }
  rawDataOption.textContent = `${xName}`;
  sqDataOption.textContent = `${xName}\u{00B2}`;
  invDataOption.textContent = `${xName}\u{207B}\u{00B9}`;
  invSqDataOption.textContent = `${xName}\u{207B}\u{00B2}`;
  indepVar.textContent = `${xSymbol}`;
  depVar.textContent = `${ySymbol}`;
  fup2.textContent = `${yUnits}`;
  fdn2.textContent = `${xUnits}`;
};

export default alterHTML;
