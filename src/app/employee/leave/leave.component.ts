import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { ApiService } from './../../security/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  constructor(private cookieService: CookieService, private employeeService: ApiService, private fb: FormBuilder, private toater: ToastrService) { }
  navbarName = this.cookieService.get('first_name')
  emailId = this.cookieService.get('email')
  navbarImage = this.cookieService.get('image')
  id = this.cookieService.get('_id')
  auth = this.employeeService
  comparisonStart = new Date(2021 - 10 - 13)
  comparisonEnd = new Date(2021 - 10 - 30)
  date = new Date
  form = this.fb.group({
    start: [],
    end: []
  })
  p: any
  q:any
  days_in_leave: any;
  leaves: any = []
  leaveStatusAfterAdminApproval: any = []
  afterApprovalTable: boolean = false
  ngOnInit(): void {
    this.employeeService.leaveRequestDetail(this.emailId).subscribe((res: any) => {
      this.leaves = res
      if (res.length !== 0) {
        this.afterApprovalTable = false
      }
      else {
        this.afterApprovalTable = true
      }
    })
    this.employeeService.afterApprovalLeaveStatus(this.emailId).subscribe((res: any) => {
      if (res.length !== 0) {
        this.afterApprovalTable = true
        this.leaveStatusAfterAdminApproval = res
      }
      else {
        this.afterApprovalTable = false
      }
    })
  }
  submit() {
    this.cookieService.set('start', this.form.get('start')?.value)
    this.cookieService.set('end', this.form.get('end')?.value)
    const leaveRequester: any = {
      leaveRequesterId: this.cookieService.get('_id'),
      firstName: this.cookieService.get('first_name'),
      lastName: this.cookieService.get('last_name'),
      email: this.cookieService.get('email'),
      end: this.form.get('end')?.value,
      days_in_leave: this.dateDifference() + 1,
      start: this.cookieService.get('start'),
    }
    this.employeeService.leaverequest(leaveRequester).subscribe((res: any) => { },
      (err: any) => { })
    this.toater.success('Your leave request has been submitted')
    this.employeeService.leaveRequestDetail(this.emailId).subscribe((res: any) => {
      this.leaves = res
      console.log(this.leaves);
      
    })
  }

  // getDifferenceInDays(date1: any, date2: any) {
  //   const diffInMs = Math.abs(date2 - date1);
  //   return diffInMs / (1000 * 60 * 60 * 24)+1;
  // }

  dateDifference() {

    // Copy date objects so don't modify originals
    var s = this.form.get('start')?.value
    var e = this.form.get('end')?.value
    console.log(s, e);


    // Set time to midday to avoid dalight saving and browser quirks
    s.setHours(12, 0, 0, 0);
    e.setHours(12, 0, 0, 0);

    // Get the difference in whole days
    var totalDays = Math.round((e - s) / 8.64e7);

    // Get the difference in whole weeks
    var wholeWeeks = totalDays / 7 | 0;

    // Estimate business days as number of whole weeks * 5
    var days = wholeWeeks * 5;

    // If not even number of weeks, calc remaining weekend days
    if (totalDays % 7) {
      s.setDate(s.getDate() + wholeWeeks * 7);

      while (s < e) {
        s.setDate(s.getDate() + 1);

        // If day isn't a Sunday or Saturday, add to business days
        if (s.getDay() != 0 && s.getDay() != 6) {
          ++days;
        }
      }
    }
    return days;
  }
}
