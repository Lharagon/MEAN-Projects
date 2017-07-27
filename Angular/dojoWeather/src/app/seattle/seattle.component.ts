import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  city: any = {};

  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this._httpService.getCity('seattle')
      .then(
        (data) => {
          this.city = data;
        })
      .catch(
          ()=>{console.log('Something went horribly wrong')}
        )
    }

  }
