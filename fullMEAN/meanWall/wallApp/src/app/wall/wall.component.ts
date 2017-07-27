import { Component, OnInit } from '@angular/core';
import { MessageService } from './../message.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  currentUser: any = {};
  message: any = {content: ''};
  messageList: string[] = [];

  constructor(private _messageService: MessageService, private _route: ActivatedRoute, private _router: Router) {
    this.getCurrentUser();
  }

  ngOnInit () {
    this.getCurrentUser();
    this.getCurrentMessageList();
  }

  getCurrentUser(){
    this._messageService.getCurrentUser().
      then(
        (data) => {
          this.currentUser = data;
      })
      .catch(
        ()=>{ console.log('Could not get current user')}
      );
  }

  getCurrentMessageList(){
    this._messageService.getCurrentMessageList()
      .then(
        (data) => {
        this.messageList = data.reverse();
      })
      .catch(
        () => { console.log("There was a ploblem retriving the message List")}
      )
  }

  postMessage() {
    console.log('The message is', this.message)
    this._messageService.postMessage({ author: this.currentUser.username, content: this.message.content})
    .then(
      (data)=>{
        this.messageList = data.reverse();
      })
    .catch(
      () => { console.log("There was a problem retriving the messages")}
    )}

  postComment(messageId, formData) {
    console.log("This is was is in formData ", formData.value);
    this._messageService.postComment({ author: this.currentUser.username, content: formData.value.comment}, messageId)
    .then(
      (data)=>{
        this.messageList = data.reverse();
      })
    .catch(
      () => { console.log("There was a problem retriving the comments")}
    )}

  logOut() {
    console.log("Leaving...")
    this._messageService.LogOut();
    this._router.navigate(['/']);

  }

}
