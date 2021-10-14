import { CommonRoutingModule } from './common/common.router';
import { EmployeeRoutingModule } from './employee/employee.router';
import { AdminRoutingModule } from './admin/admin.router';

import { TokenIntersepterService } from './security/token-intersepter.service';
import { AuthGuard } from './security/auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';

import { LoginComponent } from './security/login/login.component';
import { HomeComponent } from './common/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AdminViewComponent } from './admin/admin-view/admin-view.component';
import { EmployeeViewComponent } from './employee/employee-view/employee-view.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { EmployeeHomeComponent } from './employee/employee-home/employee-home.component';
import { ErrorComponent } from './common/error/error.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SignupComponent } from './common/signup/signup.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ForgetPasswordComponent } from './security/forget-password/forget-password.component';
import { LocationComponent } from './common/location/location.component';
import { AgmCoreModule } from '@agm/core';
import { AdminDetailComponent } from './admin/admin-detail/admin-detail.component';
import { HolidayDetailsComponent } from './common/holiday-details/holiday-details.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { CookieService } from 'ngx-cookie-service';
import { LeaveComponent } from './employee/leave/leave.component';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { LeaveRequestsComponent } from './admin/leave-requests/leave-requests.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    AdminViewComponent,
    EmployeeViewComponent,
    AdminHomeComponent,
    EmployeeHomeComponent,
    ErrorComponent,
    SignupComponent,
    ForgetPasswordComponent,
    LocationComponent,
    AdminDetailComponent,
    HolidayDetailsComponent,
    NavbarComponent,
    AddEmployeeComponent,
    LeaveComponent,
    LeaveRequestsComponent
  ],
  imports: [
    BrowserModule,
    AdminRoutingModule,
    EmployeeRoutingModule,
    AppRoutingModule,
    CommonRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    CarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDTMUsVQXGSzfx2D1EoGxmrlge5Fti-8Cg'
    }),
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntersepterService,
      multi: true
    },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
