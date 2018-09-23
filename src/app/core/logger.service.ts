import { Injectable } from '@angular/core';

@Injectable(
  //  providedIn: 'root'
)
export class LoggerService {

  constructor() {}

  public logMessage(message: string) {
    console.log(`log - ${Date()} ${message}`);
  }
}
