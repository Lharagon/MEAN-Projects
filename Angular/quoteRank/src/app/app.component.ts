import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: any = [];
  // quoteModel = {
    quote: string = '';
    author: string = '';
    rating: number = 0;
  // }


  addQuote () {
    this.quotes.push({'quote': this.quote, 'author': this.author, 'rating': 0});
    this.quote = '';
    this.author = '';
    console.log(this.quotes);
  }

  voteDown (index) {
    if (this.quotes[index].rating > 0) {
      this.quotes[index].rating -= 1;
    }

  }
  voteUp (index) {
    this.quotes[index].rating += 1;
  }

  removeQuote(index) {
    this.quotes.splice(index, 1);
  }
}
