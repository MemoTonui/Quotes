export class QuoteConstructor {
    showDescription :boolean;
    constructor(public quoteWritter:string,public quote:string,public quotePoster:string,public upvotes:number,public downvotes:number,public timePassed:Date){
       
        this.showDescription= false;


    }

}
