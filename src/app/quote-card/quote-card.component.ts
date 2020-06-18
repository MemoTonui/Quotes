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
     new QuoteConstructor ('Nelson Mandela','The greatest glory in living lies not in never falling, but in rising every time we fall.','Linda Tonui',1,0,new Date(2020,6,8)),
     new QuoteConstructor ('Aristotle','It is during our darkest moments that we must focus to see the light.','Linda Tonui',0,0,new Date(2020,6,8)),
     new QuoteConstructor ('John Lennon','Life is what happens when you are busy making other plans.','Brian Yegon',0,0,new Date(2020,5,12)),
     new QuoteConstructor ('Mother Teressa','Spread love everywhere you go. Let no one ever come to you without leaving happier.','Wachira Joan',0,0,new Date(2020,6,25))
   ]

   addNewQuote(QuoteConstructor){ 
    QuoteConstructor.timePassed = new Date();
    this.quotes.push(QuoteConstructor);
    console.log(this.quotes);
    
  }

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
 
     

  constructor() { }

  ngOnInit(): void {
  }

}
