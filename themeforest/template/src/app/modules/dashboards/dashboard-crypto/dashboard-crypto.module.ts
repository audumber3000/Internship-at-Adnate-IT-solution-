import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardCryptoRoutingModule } from './dashboard-crypto-routing.module';
import { DashboardCryptoComponent } from './components/dashboard-crypto/dashboard-crypto.component';
import { SharedCoreModule } from '../../shared-modules/shared-core/shared-core.module';
import { MaterialImportsModule } from '../../shared-modules/material-imports/material-imports.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { EditCurrencyComponent } from './components/edit-currency/edit-currency.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularDropdownModule } from 'angular-dropdown';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [DashboardCryptoComponent, EditCurrencyComponent],
  imports: [
    CommonModule,
    DashboardCryptoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedCoreModule,
    MaterialImportsModule,
    NgxChartsModule,
    AngularDropdownModule,
    TranslateModule.forChild({}),
  ],
})
export class DashboardCryptoModule {}
