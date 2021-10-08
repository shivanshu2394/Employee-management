import { LoginComponent } from './security/login/login.component';
import { ApiService } from './security/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  constructor(private api:ApiService){}
  auth:any=this.api
  
  
}
