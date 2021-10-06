import { ApiService } from './../../security/api.service';
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
adminHome:any;
adminView:any
  ngOnInit(): void {
    this.adminHome=this.dataService.setData()
    this.adminView=this.dataService.setData()
    console.log(this.adminView);
  }

}
