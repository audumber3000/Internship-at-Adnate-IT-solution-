import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  @Input() alertType = '';
  @Input() alertTheme = '';
  @Input() icon = '';
  @Input() withIcons = false;
  color = {};
  isVisible = true;
  iconNames = {
    info: 'info',
    success: 'thumb_up',
    warning: 'report',
    danger: 'cancel',
  };

  constructor() {}

  ngOnInit() {
    this.color['alert-' + this.alertType] = this.alertType;
    this.color[this.alertTheme] = this.alertTheme;

    if (!this.icon && this.withIcons) {
      this.icon = this.iconNames[this.alertType];
    }
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
