import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-tiny-widget',
  templateUrl: './dashboard-tiny-widget.component.html',
  styleUrls: ['./dashboard-tiny-widget.component.scss'],
})
export class DashboardTinyWidgetComponent implements OnInit {
  @Input() title = 'Basic Panel';
  @HostBinding('class') @Input() classes = 'col-md-12 col-lg-12 col-xl-6';

  constructor() {}

  ngOnInit() {}
}
