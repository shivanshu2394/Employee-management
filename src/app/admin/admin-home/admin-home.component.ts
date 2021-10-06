import { DataService } from './../../security/dataModel.service';
import { ApiService } from '../../security/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private adminService:ApiService,private dataService:DataService) { }
data:any
auth=this.adminService
adminData:any
adminUserDetail:any;
adminViewData:any
  ngOnInit(): void {
      this.adminService.getAdminData().subscribe((res:any)=>{
        this.adminData=res 
      })
      this.adminService.getGeneralData().subscribe((res)=>{
        this.data=res;
      })
      this.adminUserDetail=this.dataService.setData()
      this.dataService.getData(this.adminUserDetail)
      // console.log(this.adminUserDetail.first_name);
      
  }
p:any;
q:any
}
