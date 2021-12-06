import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SidebarCollapseStateService {
  sidebarOpened: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  constructor() {}

  getSidebarState(): Observable<boolean> {
    return this.sidebarOpened.asObservable().pipe(distinctUntilChanged());
  }

  toggleSidebar() {
    this.sidebarOpened.next(!this.sidebarOpened.value);
  }

  closeSidebar() {
    this.sidebarOpened.next(false);
  }

  openSidebar() {
    this.sidebarOpened.next(true);
  }
}
