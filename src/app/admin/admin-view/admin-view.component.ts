import { NewEmployeeData } from './../../security/newEmployeeData.service';
import { DataService } from './../../security/dataModel.service';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../security/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  constructor(private adminService:ApiService,private router:Router,private toaster:ToastrService,private dataService:DataService,private newEmployeeDetail:NewEmployeeData) { }
  auth:any=this.adminService
data:any
goBackPage:any
navbarData:any
newUserDetail:any;
newUser:boolean=false
date:any
  ngOnInit(): void {
    setInterval(()=>{
      let a=new Date()
      this.date=a.toTimeString()
    },1000)
    this.adminService.getData().subscribe((res:any)=>{
      this.data=res
    },
    (error:any)=>{
      if(error instanceof HttpErrorResponse){
        if(error.status===401){
          this.router.navigate(['/login'])
        }
      }
    }
    )
    this.navbarData=this.dataService.setData()
    this.newUserDetail=this.newEmployeeDetail.setData()
   
  }
delete(id:any){
  this.adminService.delete(id).subscribe((res:any)=>{
    // location.reload();
    this.adminService.getData().subscribe((res:any)=>{
      this.data=res
    },
    (error:any)=>{
      if(error instanceof HttpErrorResponse){
        if(error.status===401){
          this.router.navigate(['/login'])
        }
      }
    }
    )
  })
}
p:any
gotoAdd(){
this.router.navigate(['/signup'])
}
holidays=[
  {
    date:'01/06/2021',
    name:'May day'
  },
  {
    date:'15/08/2021',
    name:'Independence day'
  },
  {
    date:'15/10/2021',
    name:'Dushera'
  },
  {
    date:'04/11/2021',
    name:'Diwali'
  },{
    date:'05/11/2021',
    name:'Diwali'
  },
  {
    date:'19/10/2021',
    name:'Guru Nanak Dev'
  },
  {
    date:'25/12/2021',
    name:'Christmas'
  }
]

}
