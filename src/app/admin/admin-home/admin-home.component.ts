import { DataService } from './../../security/dataModel.service';
import { ApiService } from '../../security/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private adminService: ApiService, private dataService: DataService) { }
  allGeneralUser: any
  auth = this.adminService
  allAdminUser: any
  adminViewData: any
  ngOnInit(): void {
    this.adminService.getAdminData().subscribe((res: any) => {
      this.allAdminUser = res
    })
    this.adminService.getGeneralData().subscribe((res) => {
      this.allGeneralUser = res;
    })
  }
  p: any;
  q: any
}
