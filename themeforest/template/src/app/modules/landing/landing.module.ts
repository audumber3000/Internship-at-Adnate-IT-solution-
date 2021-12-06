import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { scrollConfig } from './assets/page-scroll-config';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxPageScrollCoreModule.forRoot(scrollConfig),
    NgxPageScrollModule,
    MatIconModule,
  ],
  exports: [LandingPageComponent],
})
export class LandingModule {}
