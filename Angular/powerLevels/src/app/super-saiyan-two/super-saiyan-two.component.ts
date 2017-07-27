import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-two',
  templateUrl: './super-saiyan-two.component.html',
  styleUrls: ['./super-saiyan-two.component.css']
})
export class SuperSaiyanTwoComponent implements OnInit {
  @Input() Lv;
  // myLv = this.Lv * 150;
  constructor() { }

  ngOnInit() {
  }

}
