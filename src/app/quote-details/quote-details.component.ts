import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuoteConstructor } from '../quote-constructor';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: QuoteConstructor;

  @Output() isComplete = new EventEmitter<boolean>();

  
  
  upVote(){
    
    this.quote.upvotes ++;
  }
  downVote(){
    this.quote.downvotes ++;
  }

   quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
