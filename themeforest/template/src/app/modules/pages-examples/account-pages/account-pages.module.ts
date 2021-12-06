import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountPagesRoutingModule } from './account-pages-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { EmailConfirmationComponent } from './components/email-confirmation/email-confirmation.component';
import { MaterialImportsModule } from '../../shared-modules/material-imports/material-imports.module';
import { TabsModule } from 'ngx-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedCoreModule } from '../../shared-modules/shared-core/shared-core.module';

@NgModule({
  declarations: [ProfileComponent, EmailConfirmationComponent],
  imports: [
    CommonModule,
    AccountPagesRoutingModule,
    MaterialImportsModule,
    TabsModule.forRoot(),
    ReactiveFormsModule,
    SharedCoreModule,
  ],
})
export class AccountPagesModule {}
