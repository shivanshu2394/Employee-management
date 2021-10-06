import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor() { }
date:any
  ngOnInit(): void {
    setInterval(()=>{
      let a=new Date()
      this.date=a.toTimeString()
    },1000)
  }
  lat:any;
  lng:any;
  lat1 = 21.694149325464245;
lng1 = 79.64910497235478;
LocationCHoosen=false
onChooseLocation(val:any){
  console.log(val);
  this.lat=val.coords.lat
  this.lng=val.coords.lng
  this.LocationCHoosen=true
}

}
