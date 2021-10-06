import { ToastrService } from 'ngx-toastr';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private forgetpasswordApi: ApiService, private toaster: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }
  forgetPassword(val: any) {
    this.forgetpasswordApi.forgetPassword(val).subscribe((res: any) => {
      console.log(res);
      if (res) {
        this.toaster.success(res.msg);
        this.router.navigate(['/login'])
      }
    },(err:any)=>{
      this.toaster.error(err.error.msgData);
    })
  }
  backToLogin(){
    this.router.navigate(['/login'])
  }
}
