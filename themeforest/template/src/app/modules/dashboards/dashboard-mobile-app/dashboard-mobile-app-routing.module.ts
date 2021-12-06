import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardMobileAppComponent } from './components/dashboard-mobile-app/dashboard-mobile-app.component';

const routes: Routes = [{ path: '', component: DashboardMobileAppComponent, data: { animation: 'DashboardMobile' } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardMobileAppRoutingModule {}
