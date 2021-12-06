import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  currentUsersChart,
  currentUsersChartData,
  statUsers,
  weeklyStats,
  weeklyStatsSettings,
} from '../../assets/dashboard-charts-data';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard-mobile-app',
  templateUrl: './dashboard-mobile-app.component.html',
  styleUrls: ['./dashboard-mobile-app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardMobileAppComponent implements OnInit {
  socialMarketingStatProgress = [
    {
      title: 'Twitter',
      percent: 87,
    },
    {
      title: 'Facebook',
      percent: 65,
    },
    {
      title: 'VK',
      percent: 92,
    },
    {
      title: 'Instagram',
      percent: 81,
    },
    {
      title: 'LinkedIn',
      percent: 74,
    },
  ];
  statUsers;
  weeklyStats;
  currentUsersChart;
  currentUsersChartData;
  weeklyStatsSettings;
  translations;

  constructor(private translate: TranslateService) {
    Object.assign(this, {
      statUsers,
      weeklyStats,
      currentUsersChart,
      currentUsersChartData,
      weeklyStatsSettings,
    });

    this.translate.stream('dashboard_mobile_app').subscribe(data => {
      this.translations = data;
    });
  }

  ngOnInit() {}

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }

  select(data) {
    console.log('Item clicked', data);
  }
}
