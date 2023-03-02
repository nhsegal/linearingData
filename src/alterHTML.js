const alterHTML = (exp, dataObject) => {
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
      dataObject.xName = 'Side Length';
      dataObject.xSymbol = '\u{1D459}';
      dataObject.yName = 'Mass';
      dataObject.ySymbol = '\u{1D45a}';
      dataObject.xUnits = 'cm';
      dataObject.yUnits = 'g';
      dataObject.title = 'Shape';
      /*
      dataObject.xName = 'Impact Speed';
      dataObject.xSymbol = '\u{1D459}'; // Change
      dataObject.yName = 'Depth';
      dataObject.ySymbol = '\u{1D45a}'; // Change
      dataObject.xUnits = 'm/s';
      dataObject.yUnits = 'mm';
      dataObject.title = 'Penetration';
      */
      break;
    case -1:
      dataObject.xName = 'Length';
      dataObject.xSymbol = '\u{1D459}';
      dataObject.yName = 'Height';
      dataObject.ySymbol = '\u{210E}';
      dataObject.xUnits = 'cm';
      dataObject.yUnits = 'cm';
      dataObject.title = 'Paragraph';

      /*
      dataObject.xName = 'Pressure';
      dataObject.xSymbol = '\u{1D459}'; // change
      dataObject.yName = 'Volume';
      dataObject.ySymbol = '\u{210E}'; // change
      dataObject.xUnits = 'kPa';
      dataObject.yUnits = 'mL';
      dataObject.title = 'Gas';
    */
      break;
    case -2:
      dataObject.xName = 'Distance';
      dataObject.xSymbol = '\u{1D451}';
      dataObject.yName = 'Intensity';
      dataObject.ySymbol = '\u{1D43C}';
      dataObject.xUnits = 'm';
      dataObject.yUnits = 'W/m\u00B2';
      dataObject.title = 'Light';

      /*
      dataObject.xName = 'Radius';
      dataObject.xSymbol = '\u{1D451}'; // change
      dataObject.yName = 'Height';
      dataObject.ySymbol = '\u{1D43C}'; // change
      dataObject.xUnits = 'cm';
      dataObject.yUnits = 'cm';
      dataObject.title = 'Equal Volume Cups';
*/
      break;
    default:
      console.log('error?');
  }
  rawDataOption.textContent = `${dataObject.xName}`;
  sqDataOption.textContent = `${dataObject.xName}\u{00B2}`;
  invDataOption.textContent = `${dataObject.xName}\u{207B}\u{00B9}`;
  invSqDataOption.textContent = `${dataObject.xName}\u{207B}\u{00B2}`;
  indepVar.textContent = `${dataObject.xSymbol}`;
  depVar.textContent = `${dataObject.ySymbol}`;
  fup2.textContent = `${dataObject.yUnits}`;
  fdn2.textContent = `${dataObject.xUnits}`;
};

export default alterHTML;
