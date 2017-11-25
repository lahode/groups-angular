import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LogService {

  private _log: string[];
  private _subject: BehaviorSubject<string[]>;   

  constructor() {
    this._log = new Array<string>(); 
    this._subject = <BehaviorSubject<string[]>>new BehaviorSubject([]);
  }

  public getLogs() {
    return this._subject.asObservable();
  }  

  public addLog(latestGroup: string) {
    this._log.push(latestGroup);
    this._subject.next(Object.assign([], this._log));
  }

}
