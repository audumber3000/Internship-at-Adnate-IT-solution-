import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardBookingComponent } from './components/dashboard-booking/dashboard-booking.component';

const routes: Routes = [{ path: '', component: DashboardBookingComponent, data: { animation: 'DashboardBooking' } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardBookingRoutingModule {}
