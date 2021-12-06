import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartJsComponent } from './components/chart-js/chart-js.component';
import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsModule as ngChartsModule } from 'ng2-charts';
import { PointSizesComponent } from './components/chart-js/components/point-sizes.component';
import { RandomLineComponent } from './components/chart-js/components/random-line.component';
import { RandomBarComponent } from './components/chart-js/components/random-bar.component';
import { RandomizeDirective } from './components/chart-js/assets/randomize.directive';
import { PolarAreaComponent } from './components/chart-js/components/polar-area.component';
import { DoughnutComponent } from './components/chart-js/components/doughnut.component';
import { LegendsHandlerComponent } from './components/chart-js/components/legends-handler.component';

@NgModule({
  declarations: [
    ChartJsComponent,
    PointSizesComponent,
    RandomLineComponent,
    RandomBarComponent,
    RandomizeDirective,
    PolarAreaComponent,
    DoughnutComponent,
    LegendsHandlerComponent,
  ],
  imports: [CommonModule, ChartsRoutingModule, ngChartsModule]
})
export class ChartsModule {}
