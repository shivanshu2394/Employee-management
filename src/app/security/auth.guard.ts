import { ApiService } from './auth.service';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
constructor(private api:ApiService,private router:Router){}
canActivate():boolean{
  if(this.api.loggedIn()){
    return true;
  }else{
    this.router.navigate(['/login'])
    return false;
  }
}
 
}
