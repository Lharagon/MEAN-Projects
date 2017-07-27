import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors: any[] = ['#00ff40', '#bf4040', '#ff9999', '#0040ff', '#ff8000', '#bf00ff', '#936c6c'];
  times: any[] = ['*','*','*','*','*','*','*','*','*']
  randomColor (): any {
  var randColor: any = Math.floor(Math.random()*this.colors.length)
  return this.colors[randColor];
  }
}
