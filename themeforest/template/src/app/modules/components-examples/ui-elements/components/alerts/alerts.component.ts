import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
})
export class AlertsComponent implements OnInit {
  titleAlert = 'Alerts';
  descriptionAlerts = 'Use this elements, if you want to show some hints or additional information';

  constructor() {}

  ngOnInit() {}
}
