export class Quote {
  public thumbUp: number;
  public thumbDown: number;
  constructor( public person: string, public author: string, public quote: string, public quoteDescription: string ){
    this.thumbUp = 0;
    this.thumbDown = 0;
  }
}
