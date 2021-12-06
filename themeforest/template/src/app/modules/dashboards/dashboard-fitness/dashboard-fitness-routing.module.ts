import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardFitnessComponent } from './components/dashboard-fitness/dashboard-fitness.component';

const routes: Routes = [{ path: '', component: DashboardFitnessComponent, data: { animation: 'DashboardFitness' } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardFitnessRoutingModule {}
