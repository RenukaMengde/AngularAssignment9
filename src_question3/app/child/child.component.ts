import { Component } from '@angular/core';
import { StringService } from '../string.service';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  public resPrime : string ="";
  public num = 17;
  public str = "Marvellous Infosystem";
  public resCapNums : number = 0;

  constructor(public objStr : StringService, public objNum : NumberService)
  {

  }

  ngOnInit()
  {
    
      let res = this.objNum.ChkPrime(this.num);
      if (res)
      {
      this.resPrime = this.num +" is Prime Number!!";
      } else {
      this.resPrime = this.num +" is Not a Prime Number!!";
      }

      this.resCapNums = this.objStr.CountCapital(this.str);
  }

}
