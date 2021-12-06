import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardDefaultComponent } from './components/dashboard-default/dashboard-default.component';

const routes: Routes = [{ path: '', component: DashboardDefaultComponent, data: { animation: 'DashboardDefault' } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardDefaultRoutingModule {}
