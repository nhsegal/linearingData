const pickExperiment = () => {
  const experiment = {};
  const num = 1 + Math.floor(Math.random() * 6);
  switch (num) {
    case 1:
      experiment.exponent = 2;
      experiment.indepVar = 'Side Length';
      experiment.indepVarSymbol = 'l';
      experiment.indepVarUnits = 'cm';
      experiment.depVar = 'Mass';
      experiment.depVarSymbol = 'm';
      experiment.depVarUnits = 'g';
      experiment.indepVarRange = 30;
      experiment.coefficientRange = 0.5;
      experiment.title = 'Shape';
      break;
    case 2:
      experiment.exponent = 2;
      experiment.indepVar = 'Impact Speed';
      experiment.indepVarSymbol = 'v';
      experiment.indepVarUnits = '<sup>m</sup>/<sub>s</sub>';
      experiment.depVar = 'Depth';
      experiment.depVarSymbol = 'd';
      experiment.depVarUnits = 'mm';
      experiment.indepVarRange = 6;
      experiment.coefficientRange = 0.9;
      experiment.title = 'Falling Ball';
      break;
    case 3:
      experiment.exponent = -1;
      experiment.indepVar = 'Length';
      experiment.indepVarSymbol = 'l';
      experiment.indepVarUnits = 'cm';
      experiment.depVar = 'Height';
      experiment.depVarSymbol = 'h';
      experiment.depVarUnits = 'cm';
      experiment.indepVarRange = 20;
      experiment.coefficientRange = 400;
      experiment.title = 'Paragraph';
      break;
    case 4:
      experiment.exponent = -1;
      experiment.indepVar = 'Mass';
      experiment.indepVarSymbol = 'm';
      experiment.indepVarUnits = 'g';
      experiment.depVar = 'Max Height';
      experiment.depVarSymbol = 'h';
      experiment.depVarUnits = 'cm';
      experiment.indepVarRange = 50;
      experiment.coefficientRange = 1;
      experiment.title = 'Projectile';
      break;
    case 5:
      experiment.exponent = -2;
      experiment.indepVar = 'Distance';
      experiment.indepVarSymbol = 'd';
      experiment.indepVarUnits = 'm';
      experiment.depVar = 'Intensity';
      experiment.depVarSymbol = 'I';
      experiment.depVarUnits = 'W/m<sup>2</sup>';
      experiment.indepVarRange = 4;
      experiment.coefficientRange = 3;
      experiment.title = 'Light';
      break;
    case 6:
      experiment.exponent = -2;
      experiment.indepVar = 'Radius';
      experiment.indepVarSymbol = 'r';
      experiment.indepVarUnits = 'cm';
      experiment.depVar = 'Terminal Speed';
      experiment.depVarSymbol = 'v';
      experiment.depVarUnits = 'cm/s';
      experiment.indepVarRange = 30;
      experiment.coefficientRange = 3;
      experiment.title = 'Parachute';
      break;

    default:
      console.error('Some error picking experiment');
  }
  return experiment;
};

export default pickExperiment;
