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
    new Quote('Albert Einstein', 'dee', 'A.B', 'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.'),
    new Quote('Oscar Wilde', 'dee', 'O.W', 'Be yourself; everyone else is already taken.'),
    new Quote('Frank Zappa',  'dee',  'F.Z', 'So many books, so little time.'),
    new Quote('Marcus Cicero', 'dee', 'M.C', 'A room without books is like a body without a soul.'),
    new Quote('Mae West', 'dee', 'M.W', 'You only live once, but if you do it right, once is enough.'),
    new Quote('Mahatma Gandhi', 'dee',  'M.G', 'Be the change that you wish to see in the world.'),
  ];

  i: number;
  constructor() { }

  ngOnInit(): void{
  }
  thumbUp(i){
    this.quotes[i].thumbUp++;
  }
  thumbDown(i){
    this.quotes[i].thumbDown++;
  }
  deleteVote(i) {
    this.quotes.splice(i, 1);
  }
  addQuote(newQuote){
    this.quotes.push(newQuote);
  }
}
