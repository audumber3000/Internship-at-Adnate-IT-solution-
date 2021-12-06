import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartJsComponent } from './components/chart-js/chart-js.component';

const routes: Routes = [
  { path: '', redirectTo: '/ng2_charts', pathMatch: 'full' },
  { path: 'ng2_charts', component: ChartJsComponent, data: { animation: 'ChartJs' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}
