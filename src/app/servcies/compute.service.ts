import { Injectable } from '@angular/core';

@Injectable()
export class ComputeService {
  constructor() {}
  public getSquare(input: number): number {
    return input * input;
  }
}
