import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar-dropdown',
  templateUrl: './topbar-dropdown.component.html',
  styleUrls: ['./topbar-dropdown.component.scss'],
})
export class TopbarDropdownComponent implements OnInit {
  @Input() icon = '';
  @Input() isNew = false;
  @Input() title = '';
  iconName;

  constructor() {}

  ngOnInit() {
    this.iconName = 'lnr-' + this.icon;
  }
}
