import { Component, OnInit } from '@angular/core';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-point-sizes',
  template: `
    <div>
      <canvas
        baseChart
        [datasets]="chartData"
        [labels]="chartLabels"
        [options]="chartOptions"
        [colors]="chartColors"
        [legend]="chartLegend"
        [chartType]="chartType"
      >
      </canvas>
    </div>
  `,
})
export class PointSizesComponent implements OnInit {
  public chartOptions = {
    legend: {
      position: 'bottom',
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: 'rgb(204, 204, 204)',
            borderDash: [3, 3],
          },
          ticks: {
            fontColor: 'rgb(204, 204, 204)',
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: 'rgb(204, 204, 204)',
            borderDash: [3, 3],
          },
          ticks: {
            fontColor: 'rgb(204, 204, 204)',
          },
        },
      ],
    },
  };
  public chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public chartType = 'line';
  public chartLegend = true;
  public chartData = [
    {
      label: 'Blue',
      fill: false,
      lineTension: 0.3,
      borderWidth: 1,
      borderDash: [5, 3],
      pointHoverRadius: 3,
      pointHoverBorderWidth: 1,
      pointRadius: 2,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: 'Red',
      fill: false,
      lineTension: 0.3,
      borderWidth: 1,
      borderDash: [3, 3],
      pointHoverRadius: 2,
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [5, 7, 54, 32, 87, 45, 25],
    },
    {
      label: 'Yellow',
      fill: false,
      lineTension: 0.3,
      borderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [25, 54, 2, 48, 78, 54, 35],
    },
    {
      label: 'Green',
      fill: false,
      lineTension: 0.3,
      borderWidth: 1,
      pointHoverRadius: 6,
      pointHoverBorderWidth: 1,
      pointRadius: 5,
      pointHitRadius: 10,
      data: [52, 47, 45, 4, 58, 7, 45],
    },
  ];

  public chartColors: Color[] = [
    {
      backgroundColor: '#36A2EB',
      borderColor: '#36A2EB',
      pointBackgroundColor: '#36A2EB',
    },
    {
      backgroundColor: '#FF6384',
      borderColor: '#FF6384',
      pointBackgroundColor: '#FF6384',
    },
    {
      backgroundColor: '#FFCE56',
      borderColor: '#FFCE56',
      pointBackgroundColor: '#FFCE56',
    },
    {
      backgroundColor: '#4BC0C0',
      borderColor: '#4BC0C0',
      pointBackgroundColor: '#4BC0C0',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
