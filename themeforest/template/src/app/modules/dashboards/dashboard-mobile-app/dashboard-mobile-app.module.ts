import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardMobileAppRoutingModule } from './dashboard-mobile-app-routing.module';
import { DashboardMobileAppComponent } from './components/dashboard-mobile-app/dashboard-mobile-app.component';
import { SharedCoreModule } from '../../shared-modules/shared-core/shared-core.module';
import { TileClicksComponent } from './components/tile-clicks/tile-clicks.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ActiveUsersComponent } from './components/active-users/active-users.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [DashboardMobileAppComponent, TileClicksComponent, ActiveUsersComponent],
  imports: [
    CommonModule,
    DashboardMobileAppRoutingModule,
    SharedCoreModule,
    NgxChartsModule,
    TranslateModule.forChild({}),
  ],
})
export class DashboardMobileAppModule {}
