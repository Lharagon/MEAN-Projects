import { Component, OnInit } from '@angular/core';
import { AnonymousService } from './../anonymous.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  notes = [{note: 'This is the only note that matters.'}];
  note: string = '';
  constructor(private _anonymousService: AnonymousService) { }
  onSubmit() {
    this._anonymousService.createNote(this.note)
    .then((data) => this.notes = data)
    .catch(err => {console.log(err)})
  }
  ngOnInit() {}

}
