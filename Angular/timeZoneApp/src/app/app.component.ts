import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentTime: any = "";
  PSTbu = 'default';
  MSTbu = 'default';
  CSTbu = 'default';
  ESTbu = 'default';
  // currentTime = currentTime.now();
  // hours: any = this.currentTime.getHours();

  PST() {

    // this.currentTime = this.currentTime.toLocaleTimeString('pst')
    this.currentTime = new Date().toLocaleString('en-US', {timeZone: 'America/Los_Angeles'})
  }
  MST() {
    this.currentTime = new Date().toLocaleString('en-US', {timeZone: 'America/Denver'})
  }
  CST() {
    this.currentTime = new Date().toLocaleString('en-US', {timeZone: 'America/Chicago'})
  }
  EST() {
    this.currentTime = new Date().toLocaleString('en-US', {timeZone: 'America/New_York'})
  }
  Clear() {
    this.currentTime = "";
  }
}
