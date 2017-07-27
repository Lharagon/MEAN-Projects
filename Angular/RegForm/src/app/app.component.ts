import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switch: boolean = true;
  user = new User();
  users = [];

  onSubmit(){
    this.users.push(this.user);
    this.user = new User();
    console.log(this.users);
    this.switch = false;
  }

  // passConf =
}
