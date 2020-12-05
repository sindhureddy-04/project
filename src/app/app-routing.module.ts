import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CactiveGuard} from './cactive.guard';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IdComponent } from './id/id.component';
import { NameComponent } from './name/name.component';
import { UserIdComponent } from './user-id/user-id.component';
import { StatusComponent } from './status/status.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './reset/reset.component';


const routes: Routes = [
  {
    path:"",
    redirectTo:'register',
    pathMatch:'full',
  },
 {
    path:'login',
    component: LoginComponent,
  
  },
  {
    path:'Dashboard',
    component: DashboardComponent , canActivate:[CactiveGuard]
  },
  {
    path:'Dashboard/:Id',
    component: IdComponent, 
  },
  {
    path:'register',
    component: RegisterComponent, 
  },
  {
    path:'forgot',
    component: ForgotComponent, 
  },
  {
    path:'reset',
    component: ResetComponent, 
  },
  
  {
    path: '**',
    component: PagenotfoundComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
