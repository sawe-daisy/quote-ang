import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'available quotes';
  quotes = [
    new Quote('Albert Einstein', 'dee', 'A.B', 'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.', new Date(2019, 9, 21)),
    new Quote('Oscar Wilde', 'dee', 'O.W', 'Be yourself; everyone else is already taken.', new Date(2020, 1, 1)),
    new Quote('Frank Zappa',  'dee',  'F.Z', 'So many books, so little time.', new Date(2020, 1, 1)),
    new Quote('Marcus Cicero', 'dee', 'M.C', 'A room without books is like a body without a soul.', new Date(2020, 4, 1)),
    new Quote('Mae West', 'dee', 'M.W', 'You only live once, but if you do it right, once is enough.', new Date(2020, 3, 1)),
    new Quote('Mahatma Gandhi', 'dee',  'M.G', 'Be the change that you wish to see in the world.', new Date(2020, 2, 1)),
  ];
  num1: number;
  num2: number;
  i: number;
  constructor() { }

  ngOnInit(): void{
  }
  thumbup(i){
    this.quotes[i].thumbup++;
  }
  thumbdown(i){
    this.quotes[i].thumbdown++;
  }
  deleteVote(i) {
    this.quotes.splice(i, 1);
  }
  addQuote(newQuote){
    this.quotes.push(newQuote);
  }
  highVotes() {
    this.num1 = 0;
    this.num2 = 0;
    for (this.i = 0; this.i < this.quotes.length; this.i++){
    this.num2 = this.quotes[this.i].thumbup;
    if (this.num2 > this.num1) {
    this.num1 = this.num2;
    }
    return this.num1;
    }
  }
}
