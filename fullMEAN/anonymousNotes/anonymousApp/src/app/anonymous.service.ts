import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class AnonymousService {

  constructor(private _http: Http) { }

  createNote(newNote) {
    return this._http.post('/api/add', newNote ).map(data=>data.json()).toPromise();
  }

}
