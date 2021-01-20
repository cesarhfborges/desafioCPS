import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {LOCALE_ID, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BaseLayoutComponent} from './layout/base-layout/base-layout.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RequestInterceptor} from './shared/interceptors/request.interceptor';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt-PT';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-PT'},
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
