import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private router: Router) { }
  url = 'http://localhost:2000/'
  getData() {
    return this.http.get<any>(this.url + 'all')
  }
  getAdminData() {
    return this.http.get<any>(this.url + 'adminUser')
  }
  getGeneralData() {
    return this.http.get<any>(this.url + 'generalUser')
  }
  signupUser(user: any) {
    return this.http.post<any>(this.url + 'signup', user)
  }
  loginUser(user: any) {
    return this.http.post<any>(this.url + 'segrigate', user)
  }
  delete(id: any) {
    return this.http.delete<any>(this.url + 'delete/' + id)
  }
  update(data: any, id: any) {
    return this.http.put<any>(this.url + 'update/' + id, data)
  }
  loggedIn() {
    return !!localStorage.getItem('token')
  }
  setToken() {
    return localStorage.getItem('token')
  }
  logoutUser() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
  getSearch(data: any) {
    return this.http.get(this.url + 'search/' + data)
  }
  forgetPassword(email:any){
    return this.http.post<any>(this.url+'forgetpassword',{email})
  }
  leaverequest(data:any,id:any){
    return this.http.post(this.url+'leaverequest/'+id,data)
  }
}
