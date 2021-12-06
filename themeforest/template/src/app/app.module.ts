import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LandingModule } from './modules/landing/landing.module';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconRegistry } from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LockScreenComponent } from './components/lock-screen/lock-screen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './components/log-in/log-in.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { LogInPhotoComponent } from './components/log-in-photo/log-in-photo.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterPhotoComponent } from './components/register-photo/register-photo.component';
import { MaterialImportsModule } from './modules/shared-modules/material-imports/material-imports.module';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '../environments/environment';

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `${environment.deployAssetsPath}/assets/i18n/`, '.json');
}

export function hljsLanguages() {
  return [{ name: 'typescript', func: typescript }, { name: 'scss', func: scss }, { name: 'xml', func: xml }];
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LockScreenComponent,
    LogInComponent,
    LogInPhotoComponent,
    RegisterComponent,
    RegisterPhotoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LandingModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    MaterialImportsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: hljsLanguages,
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
