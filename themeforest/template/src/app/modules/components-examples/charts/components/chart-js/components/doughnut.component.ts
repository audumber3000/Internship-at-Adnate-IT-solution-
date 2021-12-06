import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { interval } from 'rxjs/index';

@Component({
  selector: 'app-doughnut',
  template: `
    <div>
      <canvas baseChart [datasets]="chartData" [chartType]="chartType" [labels]="chartLabels"> </canvas>
    </div>
  `,
})
export class DoughnutComponent implements OnInit, OnDestroy {
  @ViewChild('BaseChartDirective', { static: false }) chart: BaseChartDirective;
  intervalEmmiter;

  public chartLabels = ['Red', 'Blue', 'Yellow'];
  public chartType = 'doughnut';
  public chartData = [
    {
      data: [100, 115, 200],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      borderColor: 'rgba(255,255,255,0.54)',
    },
  ];
  constructor() {}

  ngOnInit() {
    const source$ = interval(4000);
    this.intervalEmmiter = source$.subscribe(val => this.randomize());
  }

  ngOnDestroy() {
    this.intervalEmmiter.unsubscribe();
  }

  private randomize(): void {
    this.chartData[0].data = [this.getRandomInt(50, 200), this.getRandomInt(100, 150), this.getRandomInt(150, 250)];
    this.chart.update();
  }

  private getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
