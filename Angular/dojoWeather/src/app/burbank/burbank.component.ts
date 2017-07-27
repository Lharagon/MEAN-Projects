import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  city: any = {};

  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this._httpService.getCity('burbank')
      .then(
        (data) => {
          this.city = data;
        })
      .catch(
          ()=>{console.log('Something went horribly wrong')}
        )
    }

  }
