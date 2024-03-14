import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowThimeService {

  showThime: BehaviorSubject<boolean>;
  showThime$: Observable<boolean>;

  constructor() { 
    this.showThime = new BehaviorSubject<boolean>(true);
    this.showThime$ = this.showThime.asObservable();
  }
}
