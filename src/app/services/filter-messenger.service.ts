import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Filter } from '../models/filter';

@Injectable({
  providedIn: 'root'
})
export class FilterMessengerService {

  filtValues: Filter = {
    range1: 0,
    range2: 0,
    color: ""
  }

  constructor() { }

  filter$ = new Subject<Filter>();

  getFilters(): Observable<Filter> {
    return this.filter$.asObservable();
  }

  executeFilters(obj: Filter) {
    this.filtValues = {
      range1: obj.range1,
      range2: obj.range2,
      color: obj.color
    }
    this.filter$.next(this.filtValues);
  }
}
