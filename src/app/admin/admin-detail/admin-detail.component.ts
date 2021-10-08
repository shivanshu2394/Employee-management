import { ApiService } from '../../security/auth.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../../security/dataModel.service';


@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent implements OnInit {

  constructor(private dataService:DataService,private adminService:ApiService) { }
auth=this.adminService
adminData:any
  ngOnInit(): void {
    this.adminData=this.dataService.setData()
    console.log(this.adminData);
  }
}
