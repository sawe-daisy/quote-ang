export class Quote {
  public thumbup: number;
  public thumbdown: number;
  constructor( public person: string, public author: string, public quote: string, public quoteDescription: string ){
    this.thumbup = 0;
    this.thumbdown = 0;
  }
}
