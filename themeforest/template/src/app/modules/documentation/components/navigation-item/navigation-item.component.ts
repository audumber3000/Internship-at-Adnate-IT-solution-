import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss'],
})
export class NavigationItemComponent implements OnInit {
  simpleLinkCode = `<a class="simple-link" target="_blank" routerLink="/documentation/changelog">simple link</a>`;
  sidebarLinkCode = `<app-sidebar-link icon="smartphone" route="/dashboard_mobile_app" newLink="true">Dashboard MobileApp</app-sidebar-link>`;
  constructor() {}

  ngOnInit() {}
}
