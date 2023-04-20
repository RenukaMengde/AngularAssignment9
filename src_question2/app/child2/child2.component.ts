import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  public result = 0;
  public str = "Marevellous InfoSystem";

  constructor(public objStr : StringService)
  {

  }

  ngOnInit()
  {
    this.result = this.objStr.CountCapital(this.str);
  }
}
