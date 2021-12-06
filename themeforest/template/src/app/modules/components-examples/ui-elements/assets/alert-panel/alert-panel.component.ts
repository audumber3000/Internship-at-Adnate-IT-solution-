import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-panel',
  templateUrl: './alert-panel.component.html',
  styleUrls: ['./alert-panel.component.scss'],
})
export class AlertPanelComponent implements OnInit {
  @Input() title = 'Basic Alerts';
  @Input() alertTheme = '';
  @Input() withIcons = false;
  @HostBinding('class') classes = 'col-md-12 col-lg-12 col-xl-6';

  constructor() {}

  ngOnInit() {}
}
