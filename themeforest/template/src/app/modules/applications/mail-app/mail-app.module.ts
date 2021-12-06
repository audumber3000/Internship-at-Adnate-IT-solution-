import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailAppRoutingModule } from './mail-app-routing.module';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailSidebarComponent } from './components/mail-sidebar/mail-sidebar.component';
import { EmailsListComponent } from './components/emails-list/emails-list.component';
import { MaterialImportsModule } from '../../shared-modules/material-imports/material-imports.module';
import { BsDropdownModule } from 'ngx-bootstrap';
import { QuillModule } from 'ngx-quill'
import { MailComposeComponent } from './components/mail-compose/mail-compose.component';
import { EmailDetailedComponent } from './components/email-detailed/email-detailed.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  declarations: [
    MailAppComponent,
    MailSidebarComponent,
    EmailsListComponent,
    MailComposeComponent,
    EmailDetailedComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MailAppRoutingModule,
    MaterialImportsModule,
    QuillModule.forRoot(),
    BsDropdownModule.forRoot(),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
})
export class MailAppModule {}
