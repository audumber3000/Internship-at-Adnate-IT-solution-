import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';
import { transparentize } from 'polished';

const bounceRateArea = [
  {
    name: 'Bounce rate',
    series: [
      { name: '12.03', value: 4000 },
      { name: '13.03', value: 3000 },
      { name: '14.03', value: 2000 },
      { name: '15.03', value: 2780 },
      { name: '16.03', value: 1890 },
      { name: '17.03', value: 2390 },
      { name: '18.03', value: 3490 },
      { name: '19.03', value: 3490 },
      { name: '20.03', value: 3490 },
      { name: '21.03', value: 3490 },
    ],
  },
];

@Component({
  selector: 'app-bounce-rate',
  templateUrl: './bounce-rate.component.html',
  styleUrls: ['./bounce-rate.component.scss'],
})
export class BounceRateComponent implements OnInit {
  rangeFillOpacity = 0.15;
  roundDomains = false;
  tooltipDisabled = false;
  trimXAxisTicks = true;
  trimYAxisTicks = true;
  maxXAxisTickLength = 16;
  maxYAxisTickLength = 16;

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

  curveType = 'Basis';
  curve: any = this.curves[this.curveType];

  colorScheme = {
    domain: [transparentize(0.2, '#4ce1b6')],
  };
  schemeType = 'ordinal';
  animations = true;
  gradient = false;

  showXAxis = true;
  showYAxis = true;
  showLegend = false;
  showXAxisLabel = true;
  showYAxisLabel = false;
  showGridLines = true;

  chartData: any[];

  constructor() {
    this.chartData = bounceRateArea;
  }

  ngOnInit() {}

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }

  select(data) {
    console.log('Item clicked', data);
  }
}
