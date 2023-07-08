import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule

import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurityComponent } from './security/security.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FabricanteFormComponent } from './fabricante-form/fabricante-form.component';

import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SecurityComponent,
    LoginComponent,
    HomeComponent,
    FabricanteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
