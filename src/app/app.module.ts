import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {LoginService} from './login.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardService} from './dashboard.service';
import { IdComponent } from './id/id.component';
import { NameComponent } from './name/name.component';
import { UserIdComponent } from './user-id/user-id.component';
import { StatusComponent } from './status/status.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import {RegisterService} from './register.service';
import {AuthenticationService} from './authentication.service';
//import {IdService} from './id.service';
import {ForgotService} from './forgot.service';
import { ResetComponent } from './reset/reset.component';
import {ResetService} from './reset.service';
import { LogComponent } from './log/log.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,PagenotfoundComponent, DashboardComponent, IdComponent,NameComponent,UserIdComponent,StatusComponent,
    RegisterComponent,
    ForgotComponent,
    ResetComponent,
    LogComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [LoginService, DashboardService, ResetService, RegisterService, ForgotService, AuthenticationService
   // IdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
