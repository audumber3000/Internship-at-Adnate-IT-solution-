import { setColorScheme } from '../../../shared-modules/shared-core/assets/ngx-charts-settings';

export const statUsers = [
  {
    trendDirectionUp: false,
    color: 'red',
    total: '17 148',
    title: 'Session',
    percent: '87',
  },
  {
    trendDirectionUp: true,
    color: 'green',
    total: '1 472',
    title: 'Active Users',
    percent: '32',
  },
  {
    trendDirectionUp: false,
    color: 'blue',
    total: '568',
    title: 'New Users',
    percent: '79',
  },
  {
    trendDirectionUp: false,
    color: 'accent',
    total: '21 534',
    title: 'Pageviews',
    percent: '45',
  },
];

export const weeklyStats = [
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

export const currentUsersChart = {
  colorScheme: setColorScheme('green'),
  schemeType: 'ordinal',
  animations: true,
  gradient: true,
  tooltipDisabled: false,
  showXAxis: false,
  showYAxis: true,
  showLegend: false,
  showXAxisLabel: true,
  showYAxisLabel: true,

  showGridLines: true,
  roundDomains: false,

  gaugeMin: 0,
  gaugeMax: 500,
  gaugeLargeSegments: 10,
  gaugeSmallSegments: 5,
  gaugeTextValue: '',
  gaugeUnits: '',
  gaugeAngleSpan: 180,
  gaugeStartAngle: -90,
  gaugeShowAxis: false,
  gaugeValue: 50, // linear gauge value
  gaugePreviousValue: 70,

  showMargins: true,
  margin: [0, 0, -40, 0],
};

export const currentUsersChartData = [
  {
    name: 'Current users',
    value: 345,
  },
];

export const weeklyStatsSettings = {
  horizontal: true,
  hideTotal: true,
  coloredPercent: true,
};
