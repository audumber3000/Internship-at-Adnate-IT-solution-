import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tiny-bar-chart',
  templateUrl: './tiny-bar-chart.component.html',
  styleUrls: ['./tiny-bar-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TinyBarChartComponent implements OnInit {
  @Input() data;
  @Input() color;
  @Input() amount = 0;
  @Input() trendDirectionUp = true;
  view: any[];
  width;
  height;
  colorScheme: any;
  schemeType = 'ordinal';
  selectedColorScheme: string;
  dateData: any[];
  animations = true;
  barPadding = 5;
  roundEdges = false;
  showDataLabel = false;
  legendTitle = 'Legend';
  legendPosition = 'right';
  prevActiveValue = 0;

  gradient = false;
  showXAxis = false;
  showYAxis = false;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;
  xAxisLabel = 'Country';
  yAxisLabel = 'GDP Per Capita';
  timeline = false;
  showGridLines = true;

  xScaleMin;
  xScaleMax;
  yScaleMin;
  yScaleMax;

  roundDomains = false;
  tooltipDisabled = true;
  trimXAxisTicks = true;
  trimYAxisTicks = true;
  maxXAxisTickLength = 16;
  maxYAxisTickLength = 16;

  constructor() {}

  ngOnInit() {
    this.colorScheme = {
      domain: [this.color],
    };
  }

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }

  select(data) {
    console.log('Item clicked', data);
    this.amount = data.value;
    // this.activeEntries = this.data.findIndex(a => (a.name === data.name));
    this.trendDirectionUp = data.value >= this.prevActiveValue;
    this.prevActiveValue = data.value;
  }
}
