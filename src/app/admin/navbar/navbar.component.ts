import { Component, OnInit } from '@angular/core';
import { DataService } from './../../security/dataModel.service';
import { ApiService } from '../../security/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  adminUserDetail:any
  navbarName=this.cookieService.
  constructor(private adminService:ApiService,private dataService:DataService,private cookieService:CookieService) { 
  }
  auth=this.adminService
  ngOnInit(): void {
    this.adminUserDetail=this.dataService.setData()
  }
}
