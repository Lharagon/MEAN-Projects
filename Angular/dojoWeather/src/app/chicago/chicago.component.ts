import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  city: any = {};

  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this._httpService.getCity('chicago')
      .then(
        (data) => {
          this.city = data;
        })
      .catch(
          ()=>{console.log('Something went horribly wrong')}
        )
    }

  }
