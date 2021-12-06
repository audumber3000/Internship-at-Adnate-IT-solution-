import { getCurve, setColorScheme } from '../../../shared-modules/shared-core/assets/ngx-charts-settings';
import { transparentize } from 'polished';

export const cryptoChartData = [
  {
    name: '',
    series: [
      { name: 'Mon', value: 70.23 },
      { name: 'Tue', value: 62.5 },
      { name: 'Wed', value: 60.45 },
      { name: 'Thu', value: 80.2 },
      { name: 'Fri', value: 90.61 },
      { name: 'Sat', value: 98.6 },
      { name: 'Sun', value: 115 },
    ],
  },
];

export const cryptoChartsSettings = [
  {
    title: 'BTC',
    description: 'Bitcoin',
    color: transparentize(0.2, '#4ce1b6'),
    isTrendUp: true,
    amount: 70.23,
  },
  {
    title: 'ETH',
    description: 'Ethereum',
    color: transparentize(0.2, '#f198ca'),
    isTrendUp: false,
    amount: 70.23,
  },
  {
    title: 'BCH',
    description: 'Bitcoin Cash',
    color: transparentize(0.2, '#70bbfd'),
    isTrendUp: true,
    amount: 70.23,
  },
  {
    title: 'XRP',
    description: 'Ripple',
    color: transparentize(0.2, '#c39fdf'),
    isTrendUp: true,
    amount: 70.23,
  },
];

export const cryptoTrends = [
  { name: 'Bitcoin', value: 20432 },
  { name: 'Ethereum', value: 15432 },
  { name: 'Bitcoin Cash', value: 12934 },
  { name: 'Ripple', value: 9934 },
];

export const btcCurrencyChartSettings = {
  colorScheme: setColorScheme('standard'),
  animations: true,
  showLegend: true,
  legendPosition: 'below',
  legendTitle: '',
  gradient: true,
  showXAxis: true,
  showYAxis: true,
  showXAxisLabel: false,
  showYAxisLabel: false,
  xAxisLabel: '',
  yAxisLabel: '',
  autoScale: false,
  showGridLines: true,
  curve: getCurve('Basis'),
  roundDomains: false,
  tooltipDisabled: false,
};
