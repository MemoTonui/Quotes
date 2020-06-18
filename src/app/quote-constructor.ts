export class QuoteConstructor {
    showDescription :boolean;
    constructor(public quoteWritter:string,public quote:string,public quotePoster:string,public upvotes:any,public downvotes:any){
        this.showDescription= false;


    }

}
