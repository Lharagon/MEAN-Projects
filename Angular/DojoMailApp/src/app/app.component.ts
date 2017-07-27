import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: Object[] = [
  {
    email: 'cool@supercool.com',
    important: true,
    subject: "I've fallen...",
    content: "I can't get up..."
  },
  {
    email: 'tired@sleepless.com',
    important: false,
    subject: "I'm tired",
    content: "I'll probably nap for a while"
  },
  {
    email: 'nap@sleepless.com',
    important: true,
    subject: "I'm sleeping",
    content: "Can't wake up!!!"
  }
]
}
