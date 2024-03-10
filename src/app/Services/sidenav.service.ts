import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  showNav: BehaviorSubject<boolean>;
  showNav$: Observable<boolean>;
  constructor() {
    this.showNav = new BehaviorSubject<boolean>(true);
    this.showNav$ = this.showNav.asObservable();
  }

  sideNavClosed: boolean = false;
  user: any;
}
