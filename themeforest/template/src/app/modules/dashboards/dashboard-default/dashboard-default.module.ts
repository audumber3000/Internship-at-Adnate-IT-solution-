import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardDefaultRoutingModule } from './dashboard-default-routing.module';
import { DashboardDefaultComponent } from './components/dashboard-default/dashboard-default.component';
import { SharedCoreModule } from '../../shared-modules/shared-core/shared-core.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ProgressbarModule } from 'ngx-bootstrap';
import { BounceRateComponent } from './components/bounce-rate/bounce-rate.component';
import { BudgetStatisticComponent } from './components/budget-statistic/budget-statistic.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [DashboardDefaultComponent, BounceRateComponent, BudgetStatisticComponent],
  imports: [
    CommonModule,
    DashboardDefaultRoutingModule,
    SharedCoreModule,
    NgxChartsModule,
    ProgressbarModule.forRoot(),
    TranslateModule.forChild({}),
  ],
})
export class DashboardDefaultModule {}
