import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legends-handler',
  template: `
    <div>
      <canvas
        baseChart
        [datasets]="chartData"
        [chartType]="chartType"
        [labels]="chartLabels"
        [options]="chartOptions"
        [legend]="chartLegend"
      >
      </canvas>
    </div>
  `,
})
export class LegendsHandlerComponent implements OnInit {
  public chartLabels = ['Red', 'Blue', 'Yellow'];
  public chartType = 'pie';
  public chartLegend = true;
  public chartData = [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      borderColor: 'rgba(255,255,255,0.54)',
    },
  ];

  private legendClickHandler(e, item) {
    alert(`Item with text ${item.text} and index ${item.index} clicked`);
  }

  public chartOptions = {
    legend: {
      onClick: this.legendClickHandler,
    },
  };

  constructor() {}

  ngOnInit() {}
}
