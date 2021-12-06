import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import * as shape from 'd3-shape';
import { generateData } from '../../../../dashboards/dashboard-default/data';

@Component({
  selector: 'app-tiny-area-chart',
  templateUrl: './tiny-area-chart.component.html',
  styleUrls: ['./tiny-area-chart.component.scss'],
})
export class TinyAreaChartComponent implements OnInit {
  @Input() data = generateData(1, false);
  @Input() color = 'green';
  @Input() amount = 0;
  @Input() trendDirectionUp = true;

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
  curveType = 'Basis';
  curve: any = this.curves[this.curveType];
  interpolationTypes = [
    'Basis',
    'Bundle',
    'Cardinal',
    'Catmull Rom',
    'Linear',
    'Monotone X',
    'Monotone Y',
    'Natural',
    'Step',
    'Step After',
    'Step Before',
  ];

  chartSettings = {
    colorScheme: {
      domain: ['red'],
    },
    schemeType: 'ordinal',
    animations: true,
    showLegend: false,
    showXAxis: false,
    showYAxis: false,
    showXAxisLabel: false,
    showYAxisLabel: false,
    xAxisLabel: '',
    yAxisLabel: '',
    autoScale: false,
    showGridLines: false,
    curve: this.curve,
    roundDomains: false,
    tooltipDisabled: false,
  };
  chartData: any;

  constructor() {}

  ngOnInit() {
    this.chartSettings.colorScheme = {
      domain: [this.color],
    };
    this.chartData = this.data;
  }

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }

  select(data) {
    console.log('Item clicked', data);
  }
}
