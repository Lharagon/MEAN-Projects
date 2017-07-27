import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class MessageService {

  constructor(private _http: Http) { }
  createNewUser(newUser) {
    return this._http.post('/api/addUser', newUser).map(data=>data.json()).toPromise();
  }
  getCurrentUser() {
    return this._http.get('/api/getCurrentUser').map(data=>data.json()).toPromise();
  }
  getCurrentMessageList() {
    return this._http.get('/api/getCurrentMessageList').map(data=>data.json()).toPromise();
  }
  postMessage(newMessage) {
    return this._http.post('/api/addMessage', newMessage).map(data=>data.json()).toPromise();
  }
  postComment(newComment, messId) {
    return this._http.post('/api/addComment/' + messId, newComment).map(data=>data.json()).toPromise();
  }
  LogOut() {
    return this._http.get('/api/getOut').toPromise();
  }

}
