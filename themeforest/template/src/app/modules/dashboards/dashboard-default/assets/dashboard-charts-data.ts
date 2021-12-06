import { getCurve, setColorScheme } from '../../../shared-modules/shared-core/assets/ngx-charts-settings';

export const widgetVisits = {
  amount: 4000,
  color: '#ff4861',
  trendDirectionUp: true,
};

export const widgetTotalPages = {
  amount: 2400,
  color: '#70bbfd',
  trendDirectionUp: true,
};

export const widgetNewUsers = {
  amount: 255,
  color: '#c88ffa',
  trendDirectionUp: false,
};

export const widgetBounceRate = {
  amount: 25,
  color: '#f6da6e',
  trendDirectionUp: true,
};

export const ABTestingChartSettings = {
  colorScheme: setColorScheme('standard'),
  selectedColorScheme: '',
  range: true,
  animations: true,

  gradient: true,
  showXAxis: true,
  showYAxis: true,
  showLegend: true,
  legendPosition: 'below',
  legendTitle: '',
  showXAxisLabel: false,
  showYAxisLabel: false,
  xAxisLabel: 'Country',
  yAxisLabel: 'GDP Per Capita',
  autoScale: false,
  showGridLines: true,
  curve: getCurve('Basis'),

  roundDomains: false,
  tooltipDisabled: false,
  trimXAxisTicks: true,
  trimYAxisTicks: true,
  maxXAxisTickLength: 16,
  maxYAxisTickLength: 16,
};

export const salesStatisticItems = [
  {
    current: 20000,
    total: 23747,
    title: 'Top selling items statistic by last month',
    color: '#4ce1b6',
  },
  {
    current: 13000,
    total: 23747,
    title: 'Top selling items statistic by last month',
    color: '#ff4861',
  },
];

export const visitorSessions = [
  { name: 'Chrome', value: 12934 },
  { name: 'Safari', value: 9934 },
  { name: 'Mozilla', value: 20432 },
  { name: 'IE', value: 15432 },
];
