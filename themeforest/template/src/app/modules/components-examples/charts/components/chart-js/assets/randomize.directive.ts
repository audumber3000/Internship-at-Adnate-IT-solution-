import { ChangeDetectorRef, Directive, Host, Input, OnDestroy, OnInit, Optional, Self, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { interval } from 'rxjs/index';

@Directive({
  selector: '[appRandomize]',
})
export class RandomizeDirective implements OnInit, OnDestroy {
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
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: 'My Second Dataset',
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

  intervalEmmiter;
  @Input() randomizeTarget: BaseChartDirective;

  constructor(
    @Host() @Self() @Optional() private baseChart: BaseChartDirective,
    private readonly cdr: ChangeDetectorRef,
  ) {
    this.randomize();
  }

  ngOnInit() {
    const source$ = interval(2000);
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
    this.baseChart.datasets = this.chartData;
    this.baseChart.update();
  }

  private generateNumber(i: number) {
    return Math.floor(Math.random() * (i < 2 ? 100 : 1000) + 1);
  }
}
