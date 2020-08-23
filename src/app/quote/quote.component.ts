import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

quotes: Quote[] = [
  new Quote(1, 'Truth','If you tell the truth, you do not have to remember anything.','Oscar Wilde',new Date(2020,8,23)),
  new Quote(2, 'Mortivational','Life is about accepting the challenges along the way, choosing to keep moving forward, and savoring the journey.','Roy T. Bennett',new Date(2020,8,23)),
  new Quote(3, 'Success','Success is getting what you want, happiness is wanting what you get.','W. P. Kinsella',new Date(2020,8,23))
  
];

addNewQuote(quotes){
  let quoteLength = this.quotes.length;
  quotes.id = quoteLength+1;
  quotes.completeDate = new Date(quotes.completeDate)
  this.quotes.push(quotes)
}

toggleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }   
deleteQuote(isComplete: any, index: number){
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

    if (toDelete){
      this.quotes.splice(index,1)
    }
  }
}

upvote(i) {
  this.quotes[i].upvote ++;
  }
  downvote(i) {
  this.quotes[i].downvote ++;
  } 
  constructor() { }

  ngOnInit(): void {
  }

}