import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './modules/landing/components/landing-page/landing-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LockScreenComponent } from './components/lock-screen/lock-screen.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { LogInPhotoComponent } from './components/log-in-photo/log-in-photo.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterPhotoComponent } from './components/register-photo/register-photo.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: '',
    loadChildren: () => import('./modules/main-layout/main-layout.module').then(m => m.MainLayoutModule),
  },
  { path: 'lock_screen', component: LockScreenComponent },
  { path: 'login', component: LogInComponent },
  { path: 'login_photo', component: LogInPhotoComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register_photo', component: RegisterPhotoComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
