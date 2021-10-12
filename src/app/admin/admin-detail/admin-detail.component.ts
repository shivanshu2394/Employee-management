import { FormBuilder } from '@angular/forms';
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

  constructor(private dataService:DataService,private adminService:ApiService,private cookieService:CookieService,private fb:FormBuilder) { }
auth=this.adminService
id=this.cookieService.get('_id')
firstName=this.cookieService.get('first_name')
lastName=this.cookieService.get('last_name')
email=this.cookieService.get('email')
url=this.cookieService.get('image')
createdDate=this.cookieService.get('createdAt')
adminData:any
adminUserDetail=this.fb.group({
  first_name:[this.firstName],
  last_name:[this.lastName],
  email:[this.email],
})
  ngOnInit(): void {
  }
  update(){
    // console.log(this.adminUserDetail.value);
    this.firstName=this.adminUserDetail.get('first_name')?.value
    this.lastName=this.adminUserDetail.get('last_name')?.value
    this.email=this.adminUserDetail.get('email')?.value
    this.cookieService.set('first_name',this.adminUserDetail.get('first_name')?.value)
    this.adminService.update(this.adminUserDetail.value,this.id).subscribe((res:any)=>{})
    const ref=document.getElementById('cancel')
    ref?.click()
  }
} 