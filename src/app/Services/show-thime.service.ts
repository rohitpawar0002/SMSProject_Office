import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowThimeService {

  showTheme: BehaviorSubject<boolean>;
  showTheme$: Observable<boolean>;

  constructor() { 
    this.showTheme = new BehaviorSubject<boolean>(true);
    this.showTheme$ = this.showTheme.asObservable();
  }
}
