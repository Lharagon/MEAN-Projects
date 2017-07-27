import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city: any = {};
  constructor() { }
  ngOnInit(){}
  // searchCity(city) {
  //   this._httpService.getCity(city)
  //     .then(
  //       (data) => {
  //         console.log(data);
  //       })
  //     .catch(
  //         ()=>{console.log('Something went horribly wrong')}
  //       )
  //   }
  }
