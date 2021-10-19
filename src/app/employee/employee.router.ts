import { CalendarComponent } from './calendar/calendar.component';
import { LeaveComponent } from './leave/leave.component';
// import { ErrorComponent } from './common/error/error.component';
// import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { AuthGuard } from '../security/auth.guard';
// import { AdminViewComponent } from './admin/admin-view/admin-view.component';
// import { HomeComponent } from './common/home/home.component';
// import { LoginComponent } from './security/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RegisterComponent } from './admin/addEmployee/register.component';

const routes: Routes = [
  {path:'employee',component:EmployeeViewComponent,canActivate:[AuthGuard]},
  {path:'leave',component:LeaveComponent,canActivate:[AuthGuard]},
  {path:'calendar',component:CalendarComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
