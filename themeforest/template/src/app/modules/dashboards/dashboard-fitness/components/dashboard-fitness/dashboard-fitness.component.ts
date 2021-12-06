import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as shape from 'd3-shape';
import {
  activityChartSettings,
  heartRate,
  caloriesBurn,
  steps,
  distance,
  fatBurningSettings,
  fatBurningData,
  activityRating,
} from '../../assets/dashboard-charts-data';
import { generateData } from '../../../../shared-modules/shared-core/assets/ngx-charts-settings';
import { imageResoures } from '../../../assets/image.resources';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard-fitness',
  templateUrl: './dashboard-fitness.component.html',
  styleUrls: ['./dashboard-fitness.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardFitnessComponent implements OnInit {
  imageResoures = imageResoures;
  activityChartData: any;
  fatBurningData: any;
  activityChartSettings;
  heartRate;
  caloriesBurn;
  steps;
  distance;
  fatBurningSettings;
  activityRating;
  translations;

  constructor(private translate: TranslateService) {
    this.activityChartData = generateData(2, false, ['Cycling', 'Walking'], 0, 12);

    Object.assign(this, {
      activityChartSettings,
      heartRate,
      caloriesBurn,
      steps,
      distance,
      fatBurningSettings,
      fatBurningData,
      activityRating,
    });

    this.translate.stream('dashboard_fitness').subscribe(data => {
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
