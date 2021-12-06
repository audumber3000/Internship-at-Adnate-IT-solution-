import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective, Color } from 'ng2-charts';
import { interval } from 'rxjs/index';

@Component({
  selector: 'app-random-bar',
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
export class RandomBarComponent implements OnInit, OnDestroy {
  @ViewChild('BaseChartDirective', { static: false }) chart: BaseChartDirective;

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
  public chartType = 'bar';
  public chartLegend = true;
  public chartData = [
    {
      label: 'My First Dataset',
      fill: false,
      lineTension: 0.3,
      borderWidth: 2,
      pointHoverRadius: 3,
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [5, 7, 54, 32, 87, 45, 25],
    },
  ];

  public chartColors: Color[] = [
    {
      backgroundColor: '#FF6384',
      borderColor: '#FF6384',
      pointBackgroundColor: '#FF6384',
    },
  ];

  intervalEmmiter;

  constructor() {}

  ngOnInit() {
    const source$ = interval(4000);
    this.intervalEmmiter = source$.subscribe(val => this.randomize());
  }

  ngOnDestroy() {
    this.intervalEmmiter.unsubscribe();
  }

  public randomize(): void {
    for (let i = 0; i < this.chartData.length; i++) {
      for (let j = 0; j < this.chartData[i].data.length; j++) {
        this.chartData[i].data[j] = this.generateNumber(i);
      }
    }
    this.chart.update();
  }

  private generateNumber(i: number) {
    return Math.floor(Math.random() * (i < 2 ? 100 : 1000) + 1);
  }
}
