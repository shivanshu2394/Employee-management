import { ApiService } from './api.service';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable ,Injector} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenIntersepterService implements HttpInterceptor {

  constructor(private injector:Injector) { }
  intercept(req:any,next:any){let authService=this.injector.get(ApiService)
    let tokenizerequest=req.clone({
      setHeaders:{
        Authorization:`Bearer ${authService.setToken()}`
      }
    })
    return next.handle(tokenizerequest) 
  }
}
