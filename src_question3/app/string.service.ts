import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  public count = 0;
  constructor() { }

  public CountCapital(str : string) : number
  {
     for(let i = 0; i< str.length; i++)
     {
        if (str[i].match(/[A-Z]/))
        {
           this.count += 1
        }
     }

     return this.count;
  }

}
