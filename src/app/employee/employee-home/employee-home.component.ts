import { ApiService } from '../../security/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {

  constructor(private api:ApiService) { }
  data:any
  auth=this.api
    ngOnInit(): void {
  
        this.api.getData().subscribe((res:any)=>{
          // console.log(res);
          this.data=res
        })
    }

}
