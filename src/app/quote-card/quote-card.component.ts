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
     new QuoteConstructor ('Nelson Mandela','"The greatest glory in living lies not in never falling, but in rising every time we fall."','Linda Tonui'),
     new QuoteConstructor ('Oprah Winfrey','"If you look at what you have in life, you will always have more. If you look at what you do not have in life, you will never have enough."','Linda Tonui')
   ]

   toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
     

  constructor() { }

  ngOnInit(): void {
  }

}
