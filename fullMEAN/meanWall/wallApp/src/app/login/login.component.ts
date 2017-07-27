import { Component, OnInit } from '@angular/core';
import { MessageService } from './../message.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any = {username: ''};

  constructor(private _messageService: MessageService, private _route: ActivatedRoute, private _router: Router) {}
  registerUser() {
    this._messageService.createNewUser(this.username)
    this._router.navigate(['/messages']);
  }
  ngOnInit() {
  }

}
