import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuoteConstructor } from '../quote-constructor';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuoteConstructor = new QuoteConstructor('','','',0,0,new Date());
  @Output() addQuote = new EventEmitter<QuoteConstructor>();

  message = [];  
  quote: string;
  quoteWritter: string;
  quotePoster: string;
  upvotes: number;
  downvotes: number;
  

  submitQuote(){
    this.newQuoteConstructor= new QuoteConstructor(this.quote,this.quoteWritter,this.quotePoster,this.upvotes,this.downvotes,new Date());
    this.message.push(this.newQuoteConstructor);
      }
  constructor() { }

  ngOnInit(): void {
  }

}
