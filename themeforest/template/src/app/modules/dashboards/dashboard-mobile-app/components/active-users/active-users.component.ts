import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss'],
})
export class ActiveUsersComponent implements OnInit {
  colorScheme = {
    domain: ['#b8e986'],
  };
  schemeType = 'ordinal';
  animations = true;
  gradient = true;
  showXAxis = false;
  showYAxis = true;
  autoScale = true;
  showGridLines = true;
  chartData: any[];

  curves = {
    Basis: shape.curveBasis,
    'Basis Closed': shape.curveBasisClosed,
    Bundle: shape.curveBundle.beta(1),
    Cardinal: shape.curveCardinal,
    'Cardinal Closed': shape.curveCardinalClosed,
    'Catmull Rom': shape.curveCatmullRom,
    'Catmull Rom Closed': shape.curveCatmullRomClosed,
    Linear: shape.curveLinear,
    'Linear Closed': shape.curveLinearClosed,
    'Monotone X': shape.curveMonotoneX,
    'Monotone Y': shape.curveMonotoneY,
    Natural: shape.curveNatural,
    Step: shape.curveStep,
    'Step After': shape.curveStepAfter,
    'Step Before': shape.curveStepBefore,
    default: shape.curveLinear,
  };

  // line interpolation
  curveType = 'Linear';
  curve: any = this.curves[this.curveType];

  constructor() {
    const series = this.generateRandomData(100, -2000, 2000, 300, 6000);
    this.chartData = [
      {
        name: '',
        series,
      },
    ];
  }

  ngOnInit() {}

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }

  select(data) {
    console.log('Item clicked', data);
  }

  getRandomArbitrary(minValue, maxValue) {
    const ratio = maxValue - minValue + minValue;
    return Math.random() * ratio;
  }

  generateRandomData(dataLength, minDeviationValue, maxDeviationValue, minRange, maxRange) {
    const rangeFactor = (maxRange - minRange) / dataLength;

    return Array.from({ length: dataLength }, (v, k) => ({
      name: k,
      value: k * rangeFactor + this.getRandomArbitrary(minDeviationValue, maxDeviationValue),
    }));
  }
}
