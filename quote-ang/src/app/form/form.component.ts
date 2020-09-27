import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  person: string;
  author: string;
  quote: string;
  quoteDescription: string;
  newQuote: any;
  @Output() emitNewQuote = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  clickSubmit() {
    this.newQuote = new Quote(this.person, this.author, this.quote, this.quoteDescription);
    this.person = '';
    this.author = '';
    this.quote = '';
    this.quoteDescription = '';
    this.emitNewQuote.emit(this.newQuote);

  }
}
