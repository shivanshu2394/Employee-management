import { ApiService } from '../../security/auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './../../security/dataModel.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

//   constructor(private api:ApiService,private http:HttpClient) { }
// data:any
// auth:any=this.api
//   ngOnInit(): void {
//     this.api.getData().subscribe((res:any)=>{
//       // console.log(res);
//       this.data=res
//     })
//   }
//   selected=null
  
//   url='./assets/xps-Qrjx2nTBHVo-unsplash.jpg'
//   upload(){
// // this.http.post('')
//   }
//   onFIleSelected(event:any){
//     // if(val.target.files){
//     //   var reader=new FileReader()
//     //   reader.readAsDataURL(val.target.files[0])
//     //   reader.onload=(event:any)=>{
//     //     localStorage.setItem('url',event.target.result)
//     //     console.log(localStorage.getItem('url'));
//     //     // this.url=JSON.parse(localStorage.getItem('url'))
//     //     this.url=event.target.result;
//     //     // console.log(this.url);
        
//     //   }
//     // }
//     console.log(event.target.files[0].name);
    
//     if (event.target.files && event.target.files[0]) {
//       this.url=`./assets/${event.target.files[0].name}`
//       var reader = new FileReader();
//       reader.onload = (event: any) => {
//           // this.url = event.target.result;
//           console.log(this.url);
          
//       }
//       reader.readAsDataURL(event.target.files[0]);
//   }
//   }

constructor(private adminService:ApiService,private dataService:DataService) { }
data:any
auth=this.adminService
adminData:any
adminUserDetail:any;
  ngOnInit(): void {

      // this.adminService.getData().subscribe((res:any)=>{
      //   // console.log(res);
      //   this.data=res
      // })
      this.adminService.getAdminData().subscribe((res:any)=>{
        this.adminData=res 
      })
      this.adminService.getGeneralData().subscribe((res)=>{
        this.data=res;
      })
      this.adminUserDetail=this.dataService.setData()
      console.log(this.adminUserDetail.first_name);
      
  }
p:any;
q:any

}
