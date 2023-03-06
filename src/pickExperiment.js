const pickExperiment = () => {
  const experiment = {};
  const num = 1 + Math.floor(Math.random() * 6);
  switch (num) {
    case 1:
      experiment.exponent = 2;
      experiment.indepVar = 'Side Length';
      experiment.indepVarSymbol = '𝑙';
      experiment.indepVarUnits = 'cm';
      experiment.depVar = 'Mass';
      experiment.depVarSymbol = '𝑚';
      experiment.depVarUnits = 'g';
      experiment.indepVarRange = 30;
      experiment.coefficientRange = 5;
      experiment.title = 'Shape';
      experiment.indepVarPrecision = 0.5;
      experiment.depVarPrecision = 0.2;
      break;
    case 2:
      experiment.exponent = 2;
      experiment.indepVar = 'Impact Speed';
      experiment.indepVarSymbol = '𝑣';
      experiment.indepVarUnits = 'm/s';
      experiment.depVar = 'Depth';
      experiment.depVarSymbol = '𝑑';
      experiment.depVarUnits = 'mm';
      experiment.indepVarRange = 8;
      experiment.coefficientRange = 15;
      experiment.title = 'Crater';
      experiment.indepVarPrecision = 0.1;
      experiment.depVarPrecision = 1;
      break;
    case 3:
      experiment.exponent = -1;
      experiment.indepVar = 'Length';
      experiment.indepVarSymbol = '𝑙';
      experiment.indepVarUnits = 'cm';
      experiment.depVar = 'Height';
      experiment.depVarSymbol = 'ℎ';
      experiment.depVarUnits = 'cm';
      experiment.indepVarRange = 20;
      experiment.coefficientRange = 8;
      experiment.title = 'Paragraph';
      experiment.indepVarPrecision = 0.25;
      experiment.depVarPrecision = 0.25;
      break;
    case 4:
      experiment.exponent = -1;
      experiment.indepVar = 'Mass';
      experiment.indepVarSymbol = '𝑚';
      experiment.indepVarUnits = 'g';
      experiment.depVar = 'Max Height';
      experiment.depVarSymbol = 'ℎ';
      experiment.depVarUnits = 'cm';
      experiment.indepVarRange = 70;
      experiment.coefficientRange = 10;
      experiment.title = 'Projectile';
      experiment.indepVarPrecision = 1;
      experiment.depVarPrecision = 2;
      break;
    case 5:
      experiment.exponent = -2;
      experiment.indepVar = 'Distance';
      experiment.indepVarSymbol = '𝑑';
      experiment.indepVarUnits = 'm';
      experiment.depVar = 'Intensity';
      experiment.depVarSymbol = '𝐼';
      experiment.depVarUnits = 'W/m\u{00B2}';
      experiment.indepVarRange = 4;
      experiment.coefficientRange = 3;
      experiment.title = 'Light';
      experiment.indepVarPrecision = 0.01;
      experiment.depVarPrecision = 0.1;
      break;
    case 6:
      experiment.exponent = -2;
      experiment.indepVar = 'Radius';
      experiment.indepVarSymbol = '𝑟';
      experiment.indepVarUnits = 'cm';
      experiment.depVar = 'Terminal Speed';
      experiment.depVarSymbol = '𝑣';
      experiment.depVarUnits = 'cm/s';
      experiment.indepVarRange = 30;
      experiment.coefficientRange = 3;
      experiment.title = 'Parachute';
      experiment.indepVarPrecision = 1;
      experiment.depVarPrecision = 2;
      break;

    default:
      console.error('Some error picking experiment');
  }
  return experiment;
};

export default pickExperiment;
