import { Directive, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Directive({
  selector: '[appSidebarState]',
})
export class SidebarStateDirective {
  mySidenav;
  @HostListener('click') onClick() {
    this.mySidenav.close();
  }

  constructor(el: ElementRef) {
    this.mySidenav = el;
  }
}
