import { SearchModel } from './../../security/searchModel';
import { DataService } from '../../security/dataModel.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from './User';
import { ApiService } from '../../security/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  constructor(private fb: FormBuilder, private employeeService: ApiService, private activatedRoute: ActivatedRoute, private toaster: ToastrService, private dataService: DataService) { }
  data: any;
  user: any = {};
  auth = this.employeeService
  formValue = this.fb.group({
    image:[this.user.image,[Validators.required]],
    first_name: [this.user.first_name,[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    last_name: [this.user.first_name,[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    email: [this.user.first_name,[Validators.required,Validators.email]]
  })

  url=''
  ngOnInit(): void {
    this.employeeService.getGeneralData().subscribe((res: any) => {
      this.data = res
    })

    this.user = this.dataService.setData()
    // console.log(this.user);
    this.url=this.user.image
  }
  onEdit(data: any) {
    this.formValue.get('image')?.setValue(this.user.image)
    this.formValue.get('first_name')?.setValue(this.user.first_name)
    this.formValue.get('last_name')?.setValue(this.user.last_name)
    this.formValue.get('email')?.setValue(this.user.email)
  }
  onFIleSelected(event:any){
    if (event.target.files && event.target.files[0]) {
      this.url=`./assets/${event.target.files[0].name}`
    this.formValue.get('image')?.setValue(this.url)
    }
  }

  onUpdate() {
    this.employeeService.update(this.formValue.value, this.user._id).subscribe((res: any) => {
      this.user.image = this.formValue.get('image')?.value
      this.user.first_name = this.formValue.get('first_name')?.value
      this.user.last_name = this.formValue.get('last_name')?.value
      this.user.email = this.formValue.get('email')?.value
    })
    this.employeeService.getGeneralData().subscribe((res: any) => {
      this.data = res

    })
    this.toaster.success('User updated successfully')
  }
  p: any;
  searchResult: any = []
  searchResultType = false
  showErrorMsg = false
  errorInSearch: any
  msg=''
  inputForm=this.fb.group({
    search:['']
  })
  searchbox() {
    var data=this.inputForm.get('search')?.value
    console.log(data);
    
    this.employeeService.getSearch(data).subscribe((res: any) => {
      this.searchResult = res;
      this.searchResultType = true
      if(this.searchResult.length===0){
        this.toaster.error('no user found in database')
      }

      this.employeeService.getGeneralData().subscribe((res: any) => {
        this.data = res
        this.showErrorMsg=false
      })
    }
      , (error: any) => {
        this.errorInSearch=error.status
        console.log(this.errorInSearch);
        if(this.errorInSearch===404)
        {
          this.showErrorMsg=true
      this.searchResultType = false

          let a=document.getElementById('msg')
          this.toaster.error('nothing to show')
        }
      }
    )
    this.employeeService.getGeneralData().subscribe((res: any) => {
      this.data = res
    })
  }
 inp(){
   this.searchResultType = false
   this.searchResult=[]
 }
 holidays=[
  {
    date:'01/06/2021',
    name:'May day'
  },
  {
    date:'15/08/2021',
    name:'Independence day'
  },
  {
    date:'15/10/2021',
    name:'Dushera'
  },
  {
    date:'04/11/2021',
    name:'Diwali'
  },{
    date:'05/11/2021',
    name:'Diwali'
  },
  {
    date:'19/10/2021',
    name:'Guru Nanak Dev'
  },
  {
    date:'25/12/2021',
    name:'Christmas'
  }
]

}
