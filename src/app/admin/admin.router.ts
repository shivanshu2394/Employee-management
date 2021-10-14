import { LeaveRequestsComponent } from './leave-requests/leave-requests.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import { ErrorComponent } from '../common/error/error.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AuthGuard } from '../security/auth.guard';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'home',component:AdminHomeComponent,canActivate:[AuthGuard]}, 
  {path:'admin',component:AdminViewComponent,canActivate:[AuthGuard]},
  {path:'signup',component:AddEmployeeComponent,canActivate:[AuthGuard]},
  {path:'employeeDetail',component:AdminDetailComponent},
  {path:'leaverequests',component:LeaveRequestsComponent,canActivate:[AuthGuard]},
  {path:'navbar',component:NavbarComponent}
//   {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
