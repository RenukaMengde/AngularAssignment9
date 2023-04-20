import { Component } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  public AddResult : number = 0;
  public SubResult : number = 0;
  constructor(public objSer : ArithmaticService)
  {

  }

  ngOnInit()
  {
    this.AddResult = this.objSer.Add(10, 20);
    this.SubResult = this.objSer.Sub(40, 20);
  }
}
