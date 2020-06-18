import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuoteConstructor } from '../quote-constructor';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: QuoteConstructor;
  @Output() upvote= new EventEmitter<boolean>();
  @Output() downvote = new EventEmitter<boolean>();
  @Output() isComplete = new EventEmitter<boolean>();

   addUpvote (add :true){
     this.upvote.emit(add);
   }
   addDownvote (remove :true){
     this.downvote.emit(remove);
   }
   quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
