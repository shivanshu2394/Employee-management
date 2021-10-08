import { ToastrService } from 'ngx-toastr';
import { ApiService } from './../../security/api.service';
import { User } from './../../security/User';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  registerUser = new User()
  firstName: boolean = false
  lastName: boolean = false
  email: boolean = false
  password: boolean = false
  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router, private toaster: ToastrService) { }

  ngOnInit(): void {
  }
  user: any = this.fb.group({
    image: ['', Validators.required],
    first_name: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z ]*')]],
    last_name: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z ]*')]],
    email: ['', [Validators.required, Validators.email]],
    role: ['general', Validators.required],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
  })
  url = ''
  onFIleSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.url = `./assets/${event.target.files[0].name}`
    }
  }
  
  signup() {
    if (this.user.get("first_name")?.invalid) {
      this.firstName = true
      // this.span?.nativeElement.style.color='red'
    }
    if (this.user.get("last_name")?.invalid) {
      this.lastName = true
    }
    if (this.user.get("email")?.invalid) {
      this.email = true
    }
    if (this.user.get("password")?.invalid) {
      this.password = true
    }

    this.user.get('image').setValue(this.url)
    this.apiService.signupUser(this.user.value).subscribe((res: any) => {
      this.toaster.success('You have successfully created the account')
      this.router.navigate(['/login'])
    },
      (err: any) => {
        // console.log(err.error.msg);
        this.toaster.error(err.error.msg)
      })
  }
  valid(key:any){
    if(key==='first_name'&&this.user.get('first_name')?.valid)
    {
      this.firstName=false
    }
    if(key==='last_name'&&this.user.get('last_name')?.valid)
    {
      this.lastName=false
    }
    if(key==='email'&&this.user.get('email')?.valid)
    {
      this.email=false
    }
    if(key==='password'&&this.user.get('password')?.valid)
    {
      this.password=false
    }
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 20,
    navText: ['', ''],
    autoplay: true,
    autoplayTimeout: 4000,
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
