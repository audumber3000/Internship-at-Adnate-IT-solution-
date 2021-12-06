import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { SidebarCollapseStateService } from '../../services/sidebar-collapse-state.service';

@Component({
  selector: 'app-mail-app',
  templateUrl: './mail-app.component.html',
  styleUrls: ['./mail-app.component.scss'],
})
export class MailAppComponent implements OnInit {
  mode = new FormControl('side');
  sidebarOpened: Observable<boolean>;
  innerWidth: number;
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 1024) {
      this.sidebarStateService.closeSidebar();
      this.mode = new FormControl('over');
    } else {
      this.sidebarStateService.openSidebar();
      this.mode = new FormControl('side');
    }
  }

  constructor(
    private sidebarStateService: SidebarCollapseStateService,
    private router: Router,
  ) {
    this.sidebarOpened = sidebarStateService.getSidebarState().pipe();
    router.events.subscribe((url) => {
      if (url instanceof NavigationEnd) {
        if (this.innerWidth < 1024) {
          this.sidebarStateService.closeSidebar();
          this.mode = new FormControl('over');
        }
      }
    });
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1024) {
      this.sidebarStateService.closeSidebar();
      this.mode = new FormControl('over');
    }
  }

  closeSidebar() {
    this.sidebarStateService.closeSidebar();
  }
}
