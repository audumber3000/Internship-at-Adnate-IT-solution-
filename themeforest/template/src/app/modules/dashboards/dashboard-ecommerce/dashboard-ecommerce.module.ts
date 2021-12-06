import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardEcommerceRoutingModule } from './dashboard-ecommerce-routing.module';
import { DashboardEcommerceComponent } from './components/dashboard-ecommerce/dashboard-ecommerce.component';
import { SharedCoreModule } from '../../shared-modules/shared-core/shared-core.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MaterialImportsModule } from '../../shared-modules/material-imports/material-imports.module';
import { ProgressbarModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditOrdersComponent } from './components/edit-orders/edit-orders.component';
import { AngularDropdownModule } from 'angular-dropdown';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [DashboardEcommerceComponent, EditOrdersComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardEcommerceRoutingModule,
    SharedCoreModule,
    NgxChartsModule,
    MaterialImportsModule,
    ProgressbarModule.forRoot(),
    CarouselModule.forRoot(),
    AngularDropdownModule,
    TranslateModule.forChild({}),
  ],
})
export class DashboardEcommerceModule {}
