import { Component, OnInit } from '@angular/core';
import { NewEmployeeData } from '../../security/newEmployeeData.service';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../security/auth.service';
import { User } from '../../security/User';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

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
    this.user.get('image').setValue(this.url)
    this.adminService.signupUser(this.user.value).subscribe((res:any)=>{
      this.newEmployeeService.getData(res)
      this.toaster.success('Employee added successfully')
      this.router.navigate(['/home']) 
    },
    (err:any)=>{
      this.toaster.error(err.error.msg)
    })
  }

}
