import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
data={
  image:'',
  first_name:'',
  last_name:'',
  email:''
}
  constructor() { }
  getData(value:any){
    this.data=value
  }
  setData(){  
    return this.data
  }
}
