import { Component } from '@angular/core';
import { HttpService } from './http.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: string = '';
  users: any = {};
  constructor(private _httpService: HttpService) {}
  searchUser(event) {
    this._httpService.getUserFromHttp(this.user)
    .then(
      (data)=>{
        console.log(data.followers, data.public_repos);
        this.users = data;
        this.users.rating = data.followers + data.public_repos;

      })
    .catch(
      ()=>{console.log('Something went horribly wrong')}
    )
  }
}
