import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterceptorDigimon } from './pages/services/interceptor.interceptor';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, // constante
      useClass: InterceptorDigimon, // cual es elinterceptor
      multi: true // para q este pendiente de todas la peticiones q hagamos
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
