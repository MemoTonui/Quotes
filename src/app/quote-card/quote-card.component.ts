import { Component, OnInit } from '@angular/core';
import { QuoteConstructor } from '../quote-constructor';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.css']
})
export class QuoteCardComponent implements OnInit {

   quotes:QuoteConstructor[]=[
     new QuoteConstructor ('Nelson Mandela','"The greatest glory in living lies not in never falling, but in rising every time we fall."','Linda Tonui',1,0,new Date(2020,6,8)),
     new QuoteConstructor ('Oprah Winfrey','"If you look at what you have in life, you will always have more. If you look at what you do not have in life, you will never have enough."','Linda Tonui',0,0,new Date(2020,6,8))
   ]

   toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  addUpvotes(upvote,i) {
    this.quotes[i].upvotes ++;
  }
  addDownvotes(downvote,i) {
    this.quotes[i].downvotes  ++;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quoteWritter}?'s quote?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(QuoteConstructor){
    
    this.quotes.push(QuoteConstructor.quoteWritter);
    this.quotes.push(QuoteConstructor.quote);
    this.quotes.push(QuoteConstructor.quotePoster);
    this.quotes.push(QuoteConstructor.upvotes);
    this.quotes.push(QuoteConstructor.downvotes);
    QuoteConstructor.timePassed = new Date(QuoteConstructor.timePassed);
  }
 
     

  constructor() { }

  ngOnInit(): void {
  }

}
