import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BaseLayoutComponent} from './layout/base-layout/base-layout.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {RequestInterceptor} from './shared/interceptors/request.interceptor';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt-PT';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-PT'},
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
