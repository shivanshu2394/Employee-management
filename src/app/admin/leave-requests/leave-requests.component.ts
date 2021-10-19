import { ApiService } from './../../security/auth.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave-requests',
  templateUrl: './leave-requests.component.html',
  styleUrls: ['./leave-requests.component.css']
})
export class LeaveRequestsComponent implements OnInit {

  constructor(private cookieService: CookieService, private toster: ToastrService, private adminService: ApiService) { }
  startingDate: any
  endingDate: any
  createdByName: any
  dataUnAvailable: boolean = false
  leaveRequester: any = []
  ngOnInit(): void {
    if (this.cookieService.check('start') || this.cookieService.check('end')) {
      this.startingDate = this.cookieService.get('start')
      this.endingDate = this.cookieService.get('end')
      this.createdByName = this.cookieService.get('leaveRequester').toUpperCase()
      this.dataUnAvailable = true
      this.adminService.allLeaveRequests().subscribe((res: any) => {
        this.leaveRequester = res
      })
    }
  }
  approve(id: any) {
    const data = {
      status_of_leave: 'approved',
      firstName: id.firstName,
      email: id.email,
      start: id.start,
      end: id.end,
    }

    this.adminService.leaveRequestStatus(id._id, data).subscribe((res: any) => { })
    this.toster.success('You have accept the leave request')
    if (this.leaveRequester.length === 0) {
      this.dataUnAvailable = false
    }
    this.adminService.leaveRequestUpdate(id._id).subscribe((res: any) => { })
    this.adminService.allLeaveRequests().subscribe((res: any) => {
      this.leaveRequester = res
    })
  }

  decline(id: any) {
    const data = {
      status_of_leave: 'declined',
      firstName: id.firstName,
      email: id.email,
      start: id.start,
      end: id.end,
    }
    this.adminService.leaveRequestStatus(id._id, data).subscribe((res: any) => { })
    this.toster.error('You have decline the request')
    if (this.leaveRequester.length === 0) {
      this.dataUnAvailable = false
    }
    this.adminService.leaveRequestUpdate(id._id).subscribe((res: any) => { })
    this.adminService.allLeaveRequests().subscribe((res: any) => {
      this.leaveRequester = res
    })
  }
}
