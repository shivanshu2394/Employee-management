import { Component, OnInit } from '@angular/core';
import { DataService } from './../../security/dataModel.service';
import { ApiService } from '../../security/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  adminUserDetail:any
  constructor(private adminService:ApiService,private dataService:DataService) { }
  auth=this.adminService

  ngOnInit(): void {
    this.adminUserDetail=this.dataService.setData()
    this.dataService.getData(this.adminUserDetail)
  }

}
