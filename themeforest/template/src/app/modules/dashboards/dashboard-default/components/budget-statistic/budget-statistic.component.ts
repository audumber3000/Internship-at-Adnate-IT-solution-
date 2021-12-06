import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { transparentize } from 'polished';

@Component({
  selector: 'app-budget-statistic',
  templateUrl: './budget-statistic.component.html',
  styleUrls: ['./budget-statistic.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BudgetStatisticComponent implements OnInit {
  colorScheme = {
    domain: [transparentize(0.1, '#eeeeee'), transparentize(0.1, '#4ce1b6')],
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
  showLabels = false;
  explodeSlices = false;
  doughnut = true;
  arcWidth = 0.15;

  data = [
    {
      name: 'Completed',
      value: 4937,
    },
    {
      name: 'Remaining',
      value: 7566,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
