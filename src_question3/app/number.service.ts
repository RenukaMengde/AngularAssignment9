import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }
 
  public ChkPrime(Num : number) : boolean
  {
    let result : number = 0;
    var flag : boolean = false;
    for (var i = 2; i < Num; i++)
    {
        result = Num % i;
        if (result == 0 && i < Num)
        {
            flag = false;
            break;
        }
        else
        {
            flag = true;
        }
    }
    return flag;
  }
}
