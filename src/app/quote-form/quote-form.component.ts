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

  

  submitQuote(){
    this.addQuote.emit(this.newQuoteConstructor);
      }
  constructor() { }

  ngOnInit(): void {
  }

}
