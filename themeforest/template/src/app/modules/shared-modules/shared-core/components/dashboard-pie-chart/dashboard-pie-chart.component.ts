import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { transparentize } from 'polished';

@Component({
  selector: 'app-dashboard-pie-chart',
  templateUrl: './dashboard-pie-chart.component.html',
  styleUrls: ['./dashboard-pie-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardPieChartComponent implements OnInit {
  @Input() wrapperHeight = '200px';
  @Input() colors = [
    transparentize(0.1, '#4ce1b6'),
    transparentize(0.1, '#70bbfd'),
    transparentize(0.1, '#f6da6e'),
    transparentize(0.1, '#ff4861'),
  ];
  @Input() data = [
    { name: 'One', value: 12934 },
    { name: 'Two', value: 9934 },
    { name: 'Three', value: 20432 },
    { name: 'Four', value: 15432 },
  ];
  @Input() showLabels = false;

  colorScheme = {
    domain: [],
  };
  schemeType = 'ordinal';
  animations = true;
  gradient = true;

  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = false;
  showGridLines = true;
  explodeSlices = false;
  doughnut = true;
  arcWidth = 0.25;
  legendPosition = 'below';

  constructor() {}

  ngOnInit() {
    this.colorScheme.domain = this.colors;
  }

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }

  select(data) {
    console.log('Item clicked', data);
  }
}
