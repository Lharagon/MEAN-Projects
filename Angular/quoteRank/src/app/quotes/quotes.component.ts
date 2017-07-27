import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Input() quoteList;
  @Output() upV = new EventEmitter();
  @Output() downV = new EventEmitter();
  @Output() del = new EventEmitter();
  // @Output() a
  constructor() { }
  Up(i) {
    this.upV.emit(i);
  }
  Down(i) {
    this.downV.emit(i);
  }
  Del(i) {
    this.del.emit(i);
  }

  ngOnInit() {
  }

}
