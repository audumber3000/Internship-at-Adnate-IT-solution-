import { Component, OnInit } from '@angular/core';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-polar-area',
  template: `
    <div>
      <canvas
        baseChart
        [datasets]="chartData"
        [labels]="chartLabels"
        [options]="chartOptions"
        [legend]="chartLegend"
        [chartType]="chartType"
      >
      </canvas>
    </div>
  `,
})
export class PolarAreaComponent implements OnInit {
  public chartOptions = {
    legend: {
      position: 'bottom',
    },
    scale: {
      gridLines: {
        color: 'rgb(204, 204, 204)',
        borderDash: [3, 3],
      },
      ticks: {
        fontColor: 'rgb(204, 204, 204)',
      },
    },
  };
  public chartLabels = ['Red', 'Green', 'Yellow', 'Grey', 'Blue'];
  public chartType = 'polarArea';
  public chartLegend = true;
  public chartData = [
    {
      data: [11, 16, 7, 3, 14],
      backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
      label: 'My dataset',
      borderColor: 'rgba(255,255,255,0.54)',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
