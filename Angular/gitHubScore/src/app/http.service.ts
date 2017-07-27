import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  private gitHubUrl = 'https://api.github.com/users/';
  constructor(private _http: Http) { }
  getUserFromHttp(user) {
    console.log('came in here', user)
    return this._http.get('https://api.github.com/users/'+ user).map(data=>data.json()).toPromise()
  }
}
