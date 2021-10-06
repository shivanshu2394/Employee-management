import { NewEmployeeData } from './../../security/newEmployeeData.service';
import { DataService } from './../../security/dataModel.service';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../security/api.service';
import { User } from '../../security/User';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  url=''
  registerUser=new User()
  constructor(private fb:FormBuilder,private adminService:ApiService,private router:Router,private toaster:ToastrService,private newEmployeeService:NewEmployeeData) { }
  
  ngOnInit(): void {
  }
  user:any=this.fb.group({
    image:['',Validators.required],
    first_name:['',Validators.required],
    last_name:['',Validators.required],
    email:['',Validators.required],
    role:['admin',Validators.required],
    password:['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]],
  })
  onFIleSelected(event:any){
    if (event.target.files && event.target.files[0]) {
      this.url=`./assets/${event.target.files[0].name}`      
    }
  }
  signup(){
    // console.log(this.user.value);
    this.user.get('image').setValue(this.url)
    this.adminService.signupUser(this.user.value).subscribe((res:any)=>{
      this.newEmployeeService.getData(res)
      this.toaster.success('Employee added successfully')
      this.router.navigate(['/home']) 
    },
    (err:any)=>{
      // console.log(err.error.msg);
      this.toaster.error(err.error.msg)
    })
  }

}
