import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-three',
  templateUrl: './super-saiyan-three.component.html',
  styleUrls: ['./super-saiyan-three.component.css']
})
export class SuperSaiyanThreeComponent implements OnInit {
  @Input() Lv;
  // myLv: number = this.Lv * 250;
  constructor() { }

  ngOnInit() {
  }

}
