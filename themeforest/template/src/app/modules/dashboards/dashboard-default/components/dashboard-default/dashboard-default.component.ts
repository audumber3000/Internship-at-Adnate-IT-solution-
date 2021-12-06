import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChartDataService } from '../../../../shared-modules/shared-core/services/chart-data.service';
import {
  widgetVisits,
  widgetTotalPages,
  widgetNewUsers,
  widgetBounceRate,
  ABTestingChartSettings,
  visitorSessions,
  salesStatisticItems,
} from '../../assets/dashboard-charts-data';
import { generateData } from '../../../../shared-modules/shared-core/assets/ngx-charts-settings';
import { environment } from '../../../../../../environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard-default',
  templateUrl: './dashboard-default.component.html',
  styleUrls: ['./dashboard-default.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardDefaultComponent implements OnInit {
  dateData: any[];
  widgetVisits;
  widgetTotalPages;
  widgetNewUsers;
  widgetBounceRate;
  ABTestingChartSettings;
  visitorSessions;
  salesStatisticItems;

  // tiny bars settings
  visitsData = this.chartData.generateBarsData(10);
  totalPagesData = this.chartData.generateBarsData(10);
  newUsersData = this.chartData.generateBarsData(10);
  bounceRateData = this.chartData.generateBarsData(10);

  audienceTableData = [
    {
      img: `${environment.deployAssetsPath}/assets/images/flags/Brasil.svg`,
      name: 'Brasil',
      pageViews: 12134,
      device: 'Desktop',
      bounceRate: '41',
    },
    {
      img: `${environment.deployAssetsPath}/assets/images/flags/Argentina.svg`,
      name: 'Argentina',
      pageViews: 47584,
      device: 'Mobile',
      bounceRate: '30',
    },
    {
      img: `${environment.deployAssetsPath}/assets/images/flags/Gabon.svg`,
      name: 'Gabon',
      pageViews: 24235,
      device: 'Mobile',
      bounceRate: '65',
    },
    {
      img: `${environment.deployAssetsPath}/assets/images/flags/Italia.svg`,
      name: 'Italia',
      pageViews: 2255,
      device: 'Desktop',
      bounceRate: '41',
    },
    {
      img: `${environment.deployAssetsPath}/assets/images/flags/Sierra.svg`,
      name: 'Sierra Leone',
      pageViews: 2421,
      device: 'Tablet',
      bounceRate: '31',
    },
    {
      img: `${environment.deployAssetsPath}/assets/images/flags/Ireland.svg`,
      name: 'Ireland',
      pageViews: 805,
      device: 'Mobile',
      bounceRate: '70',
    },
  ];

  goalsToComplete = [
    { title: 'Completed Purchase', percent: 40 },
    { title: 'New clients', percent: 67 },
    { title: 'New subscribers', percent: 87 },
    { title: 'Site visits from ADS banners', percent: 24 },
    { title: 'Total page views', percent: 56 },
    { title: 'Positive feedback', percent: 46 },
  ];

  translations;

  constructor(private chartData: ChartDataService, private translate: TranslateService) {
    this.dateData = generateData(2, false, ['Site A', 'Site B'], 2000, 6000, 15);

    Object.assign(this, {
      widgetVisits,
      widgetTotalPages,
      widgetNewUsers,
      widgetBounceRate,
      ABTestingChartSettings,
      visitorSessions,
      salesStatisticItems,
    });

    this.translate.stream('dashboard_default').subscribe(data => {
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
