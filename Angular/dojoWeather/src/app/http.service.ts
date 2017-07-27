import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {
  private kee = '702e725be0d20524a3179eaab01b5da5';
  private weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q='
  constructor(private _http: Http) { }
  getCity(city) {
    console.log('came in here', city)
    return this._http.get(this.weatherURL+city+'&units=imperial'+'&appid='+this.kee).map(data=>data.json()).toPromise()
    // return console.log('great')
  }
}
