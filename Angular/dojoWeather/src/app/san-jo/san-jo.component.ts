import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-san-jo',
  templateUrl: './san-jo.component.html',
  styleUrls: ['./san-jo.component.css']
})
export class SanJoComponent implements OnInit {
  city: any = {};

  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this._httpService.getCity('sanjose')
      .then(
        (data) => {
          this.city = data;
        })
      .catch(
          ()=>{console.log('Something went horribly wrong')}
        )
    }

  }
