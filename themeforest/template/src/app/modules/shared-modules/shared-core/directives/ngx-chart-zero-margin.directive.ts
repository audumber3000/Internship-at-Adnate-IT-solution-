import { Directive, Self } from '@angular/core';
import { EasydevPieGridComponent } from '../components/easydev-pie-grid/easydev-pie-grid.component';

@Directive({
  selector: '[appNgxChartZeroMargin]',
})
export class NgxChartZeroMarginDirective {
  constructor(@Self() chart: EasydevPieGridComponent) {
    chart.margin = [0, 0, 0, 0];
  }
}
