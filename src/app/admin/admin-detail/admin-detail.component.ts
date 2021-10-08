import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../security/auth.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../../security/dataModel.service';


@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent implements OnInit {

  constructor(private dataService:DataService,private adminService:ApiService,private cookieService:CookieService) { }
auth=this.adminService
firstName=this.cookieService.get('first_name')
lastName=this.cookieService.get('last_name')
email=this.cookieService.get('email')
url=this.cookieService.get('image')
createdDate=this.cookieService.get('createdAt')
adminData:any
  ngOnInit(): void {
    this.adminData=this.dataService.setData()
    console.log(this.adminData);
  }
}
