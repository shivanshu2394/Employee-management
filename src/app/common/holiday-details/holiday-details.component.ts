import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holiday-details',
  templateUrl: './holiday-details.component.html',
  styleUrls: ['./holiday-details.component.css']
})
export class HolidayDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
