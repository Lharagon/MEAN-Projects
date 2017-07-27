import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan',
  templateUrl: './super-saiyan.component.html',
  styleUrls: ['./super-saiyan.component.css']
})
export class SuperSaiyanComponent implements OnInit {
  @Input() Lv;
  // myLv: number = this.Lv * 90;
  constructor() { }

  ngOnInit() {
  }

}
