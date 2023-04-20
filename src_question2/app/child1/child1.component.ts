import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  public result = "";
  public num : number = 17;
  constructor(public objSer : NumberService)
  {

  }

  ngOnInit()
  {

    let val = this.objSer.ChkPrime(this.num);

    if (val)
    {
      this.result = this.num +" is Prime Number!!";
    } else {
      this.result = this.num +" is Not a Prime Number!!";
    }
  }
}
