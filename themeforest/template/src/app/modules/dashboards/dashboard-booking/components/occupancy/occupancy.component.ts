import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { barChart, lineChartSeries } from './combo-chart-data';

@Component({
  selector: 'app-occupancy',
  templateUrl: './occupancy.component.html',
  styleUrls: ['./occupancy.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OccupancyComponent implements OnInit {
  // Combo Chart
  barChart: any[] = barChart;
  lineChartSeries: any[] = lineChartSeries;
  lineChartScheme = {
    name: 'coolthree',
    selectable: true,
    group: 'Ordinal',
    domain: ['#48b5ff', '#b8e986'],
  };

  comboBarScheme = {
    name: 'singleLightBlue',
    selectable: true,
    group: 'Ordinal',
    domain: ['#f2f4f7'],
  };

  animations = true;
  tooltipDisabled = true;
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;
  showGridLines = false;

  showRightYAxisLabel = false;
  yAxisLabelRight = '';

  constructor() {}

  ngOnInit() {}

  onSelect(event) {}

  yAxisTickFormatting(tick) {
    return tick + '%';
  }
}
