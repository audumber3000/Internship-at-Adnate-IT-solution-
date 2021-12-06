import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { EmailsListComponent } from './components/emails-list/emails-list.component';
import { EmailDetailedComponent } from './components/email-detailed/email-detailed.component';
import { MailComposeComponent } from './components/mail-compose/mail-compose.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inbox',
  },
  {
    path: '',
    component: MailAppComponent,
    children: [
      {
        path: 'inbox',
        component: EmailsListComponent,
      },
      {
        path: 'email/:id',
        component: EmailDetailedComponent,
      },
      {
        path: 'compose',
        component: MailComposeComponent,
      },
    ],
    data: { animation: 'MailApp' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MailAppRoutingModule {}
