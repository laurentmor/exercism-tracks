export default class Square{

  squareOfSum:number=0;
  sumOfSquares:number=0;
  difference:number=0;
  limit:number=0;

  constructor(limit:number){
    let sum:number=0;
    this.limit=limit;
    for (let i = 0; i <= this.limit; i++) {
      sum+=i;
      this.sumOfSquares+=(i*i);

    }
    this.squareOfSum=(sum*sum);
    this.difference=(this.squareOfSum-this.sumOfSquares);
  }


}
