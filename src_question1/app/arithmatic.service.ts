import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {

  constructor() { }

  public Add(A1 : number, A2 : number) : number
  {
    return A1 + A2;
  }

  public Sub(A1 : number, A2 : number) : number
  {
    return A1 - A2;
  }
}
