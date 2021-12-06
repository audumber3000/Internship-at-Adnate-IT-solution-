import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardFitnessRoutingModule } from './dashboard-fitness-routing.module';
import { DashboardFitnessComponent } from './components/dashboard-fitness/dashboard-fitness.component';
import { SharedCoreModule } from '../../shared-modules/shared-core/shared-core.module';
import { MaterialImportsModule } from '../../shared-modules/material-imports/material-imports.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [DashboardFitnessComponent],
  imports: [
    CommonModule,
    DashboardFitnessRoutingModule,
    SharedCoreModule,
    MaterialImportsModule,
    NgxChartsModule,
    TranslateModule.forChild({}),
  ],
})
export class DashboardFitnessModule {}
