import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  city: any = {};

  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this._httpService.getCity('dallas')
      .then(
        (data) => {
          console.log(data);
          this.city = data;
        })
      .catch(
          ()=>{console.log('Something went horribly wrong')}
        )
    }

  }
