import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { reservations } from '../../assets/dashboard-charts-data';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard-booking',
  templateUrl: './dashboard-booking.component.html',
  styleUrls: ['./dashboard-booking.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardBookingComponent implements OnInit {
  statCards = [
    {
      trendDirectionUp: false,
      color: 'red',
      total: '$ 465 832',
      title: 'Total profit earned',
      percent: '87',
    },
    {
      trendDirectionUp: true,
      color: 'green',
      total: '1 472',
      title: 'Total bookings',
      percent: '32',
    },
    {
      trendDirectionUp: true,
      color: 'blue',
      total: '3 235',
      title: 'Total customers',
      percent: '79',
    },
    {
      trendDirectionUp: true,
      color: 'accent',
      total: '34',
      title: 'Total profit earned',
      percent: '87',
    },
  ];

  weeklyStats = [
    {
      current: 20000,
      total: 23747,
      title: 'Customers satisfaction rate',
      color: '#b8e986',
    },
    {
      current: 13000,
      total: 23747,
      title: 'Negative feedback',
      color: '#ff4861',
    },
  ];

  weeklyStatProgress = [
    {
      title: 'Booking.com',
      percent: 87,
    },
    {
      title: 'Airbnb',
      percent: 65,
    },
    {
      title: 'TripAdvisor',
      percent: 92,
    },
    {
      title: 'Foursquare',
      percent: 81,
    },
  ];
  horizontal = true;
  hideTotal = true;
  coloredPercent = true;
  reservations;
  translations;

  constructor(private translate: TranslateService) {
    Object.assign(this, {
      reservations,
    });

    this.translate.stream('dashboard_booking').subscribe(data => {
      this.translations = data;
    });
  }

  ngOnInit() {}
}
