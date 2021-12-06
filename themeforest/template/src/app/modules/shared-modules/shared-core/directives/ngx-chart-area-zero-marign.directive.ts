import { Directive, Self } from '@angular/core';
import { AreaChartComponent } from '@swimlane/ngx-charts';

@Directive({
  selector: '[appNgxChartAreaZeroMarign]',
})
export class NgxChartAreaZeroMarignDirective {
  constructor(@Self() chart: AreaChartComponent) {
    chart.margin = [0, 0, 0, 0];
  }
}
