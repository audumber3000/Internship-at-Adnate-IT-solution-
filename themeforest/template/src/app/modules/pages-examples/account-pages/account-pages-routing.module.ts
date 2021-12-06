import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { EmailConfirmationComponent } from './components/email-confirmation/email-confirmation.component';

const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent, data: { animation: 'Profile' } },
  { path: 'email_confirmation', component: EmailConfirmationComponent, data: { animation: 'EmailConfirmation' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountPagesRoutingModule {}
