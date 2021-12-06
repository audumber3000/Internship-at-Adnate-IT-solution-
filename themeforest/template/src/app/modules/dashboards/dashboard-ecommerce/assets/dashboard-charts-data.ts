import { getCurve, setColorScheme } from '../../../shared-modules/shared-core/assets/ngx-charts-settings';

export const widgetTotalProducts = {
  amount: 4000,
  color: '#ff4861',
  trendDirectionUp: true,
};

export const widgetTotalProfit = {
  amount: 2400,
  color: '#70bbfd',
  trendDirectionUp: true,
};

export const widgetOrdersToday = {
  amount: 255,
  color: '#c88ffa',
  trendDirectionUp: false,
};

export const widgetSubscriptions = {
  amount: 561,
  color: '#f6da6e',
  trendDirectionUp: true,
};

export const productSalesChartSettings = {
  colorScheme: setColorScheme('standard'),
  animations: true,
  showLegend: true,
  legendPosition: 'below',
  legendTitle: '',
  gradient: false,
  showXAxis: true,
  showYAxis: true,
  autoScale: true,
  showGridLines: true,
  curve: getCurve('Basis'),
};

export const sellingProductsData = [
  { name: 'Sony Xperia Z', value: 12934 },
  { name: 'Xiaomi Mi 6', value: 9934 },
  { name: 'Apple Iphone 7 Plus', value: 20432 },
  { name: 'Apple Iphone 6 Plus', value: 15432 },
];

export const productSales = [
  {
    name: 'Plan Sales',
    series: [
      { name: 'Sun', value: 590 },
      { name: 'Mon', value: 868 },
      { name: 'Tue', value: 1397 },
      { name: 'Wed', value: 1480 },
      { name: 'Thu', value: 1480 },
      { name: 'Fri', value: 1550 },
      { name: 'Sat', value: 1600 },
      { name: 'Sun1', value: 590 },
      { name: 'Mon2', value: 868 },
      { name: 'Tue3', value: 1397 },
      { name: 'Wed4', value: 1480 },
      { name: 'Thu5', value: 1480 },
      { name: 'Fri6', value: 1550 },
      { name: 'Sat7', value: 1600 },
    ],
  },
  {
    name: 'Current Sales',
    series: [
      { name: 'Sun', value: 1400 },
      { name: 'Mon', value: 1506 },
      { name: 'Tue', value: 989 },
      { name: 'Wed', value: 1228 },
      { name: 'Thu', value: 1100 },
      { name: 'Fri', value: 1100 },
      { name: 'Sat', value: 1700 },
      { name: 'Sun1', value: 1400 },
      { name: 'Mon2', value: 1506 },
      { name: 'Tue3', value: 989 },
      { name: 'Wed4', value: 1228 },
      { name: 'Thu5', value: 1100 },
      { name: 'Fri6', value: 1100 },
      { name: 'Sat7', value: 1700 },
    ],
  },
];

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

export const topSellingProducts = {
  showLabels: true,
  height: '360px',
};

export const salesStatSettings = {
  colorScheme: setColorScheme('red'),
  animations: true,
  barPadding: 24,
  barYearlyPadding: 12,
  roundEdges: false,
  showDataLabel: false,
  legendTitle: 'Legend',
  legendPosition: 'right',

  gradient: false,
  showXAxis: true,
  showYAxis: true,
  showLegend: false,
  showXAxisLabel: false,
  showYAxisLabel: false,
  showGridLines: true,

  roundDomains: false,
  tooltipDisabled: true,
  trimXAxisTicks: true,
  trimYAxisTicks: true,
  maxXAxisTickLength: 16,
  maxYAxisTickLength: 16,
};

export const dataYearly = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'June', value: 2390 },
  { name: 'July', value: 3490 },
  { name: 'Aug', value: 2000 },
  { name: 'Sep', value: 2780 },
  { name: 'Oct', value: 1890 },
  { name: 'Nov', value: 3578 },
  { name: 'Dec', value: 2378 },
];

export const dataMontly = [
  { name: '01.02', value: 3654 },
  { name: '02.02', value: 2578 },
  { name: '03.02', value: 2000 },
  { name: '04.02', value: 4383 },
  { name: '05.02', value: 1890 },
  { name: '06.02', value: 2390 },
  { name: '07.02', value: 3490 },
  { name: '08.02', value: 2000 },
  { name: '09.02', value: 2780 },
  { name: '10.02', value: 1890 },
  { name: '11.02', value: 3578 },
  { name: '12.02', value: 3644 },
  { name: '13.02', value: 4000 },
  { name: '14.02', value: 3000 },
  { name: '15.02', value: 2000 },
  { name: '16.02', value: 2780 },
  { name: '17.02', value: 1890 },
  { name: '18.02', value: 2390 },
  { name: '19.02', value: 3490 },
  { name: '20.02', value: 2000 },
  { name: '21.02', value: 2780 },
  { name: '22.02', value: 1890 },
  { name: '23.02', value: 3578 },
  { name: '24.02', value: 2390 },
  { name: '25.02', value: 3578 },
  { name: '26.02', value: 1890 },
  { name: '27.02', value: 4000 },
  { name: '28.02', value: 2378 },
];
