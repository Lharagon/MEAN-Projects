import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // powerLevel: number;
  lvHuman;
  lvSaiyan;
  lvSuperSayain;
  lvSuperSayainII;
  lvSuperSayainIII;
  lvSuperSayainIV;



  calculate(lev) {
    this.lvHuman = lev * 1
    this.lvSaiyan = lev * 10
    this.lvSuperSayain = lev * 90
    this.lvSuperSayainII = lev * 150
    this.lvSuperSayainIII= lev * 250
    this.lvSuperSayainIV = lev * 500
  }
}
