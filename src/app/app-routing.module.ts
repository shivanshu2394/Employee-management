import { HolidayDetailsComponent } from './common/holiday-details/holiday-details.component';
import { ForgetPasswordComponent } from './security/forget-password/forget-password.component';
import { SignupComponent } from './common/signup/signup.component';

import { LoginComponent } from './security/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './common/location/location.component';
import { HomeComponent } from './common/home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'holidayDetails',component:HolidayDetailsComponent},
  {path:'learn',component:HomeComponent},
  {path:'location',component:LocationComponent},
  {path:'forgetpassword',component:ForgetPasswordComponent},
  {path:'signupg',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
