import { ToastrService } from 'ngx-toastr';
import { ApiService } from './../../security/api.service';
import { User } from './../../security/User';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  registerUser = new User()
  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router, private toaster: ToastrService) { }

  ngOnInit(): void {
  }
  user: any = this.fb.group({
    image:['',Validators.required],
    first_name: ['', [Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z ]*')]],
    last_name: ['', [Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z ]*')]],
    email: ['',[Validators.required,Validators.email]],
    role: ['general', Validators.required],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
  })
  url=''
  onFIleSelected(event:any){
    if (event.target.files && event.target.files[0]) {
      this.url=`./assets/${event.target.files[0].name}`
      console.log(this.url);
      
    }
  }
  signup() {
    // console.log(this.user.value);
    this.user.get('image').setValue(this.url)
    this.apiService.signupUser(this.user.value).subscribe((res: any) => {
      // console.log(res); 
      this.toaster.success('You have successfully created the account')
      this.router.navigate(['/login'])
    },
      (err: any) => {
        // console.log(err.error.msg);
        this.toaster.error(err.error.msg)
      })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 20,
    navText: ['', ''],
    autoplay:true,
    autoplayTimeout:4000,
    responsive: {
      0: {
        items: 1
      },
      900: {
        items: 2
      },
      1800: {
        items: 3
      },
      2700: {
        items: 1
      }
    },
    nav: true
  }


}
