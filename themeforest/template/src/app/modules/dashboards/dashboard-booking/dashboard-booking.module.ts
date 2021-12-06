import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardBookingRoutingModule } from './dashboard-booking-routing.module';
import { DashboardBookingComponent } from './components/dashboard-booking/dashboard-booking.component';
import { SharedCoreModule } from '../../shared-modules/shared-core/shared-core.module';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { OccupancyComponent } from './components/occupancy/occupancy.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ComboChartComponent, ComboSeriesVerticalComponent } from './components/combo-chart';
import { MaterialImportsModule } from '../../shared-modules/material-imports/material-imports.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    DashboardBookingComponent,
    ReservationsComponent,
    OccupancyComponent,
    ComboChartComponent,
    ComboSeriesVerticalComponent,
  ],
  imports: [
    CommonModule,
    DashboardBookingRoutingModule,
    SharedCoreModule,
    NgxChartsModule,
    MaterialImportsModule,
    TranslateModule.forChild({}),
  ],
})
export class DashboardBookingModule {}
