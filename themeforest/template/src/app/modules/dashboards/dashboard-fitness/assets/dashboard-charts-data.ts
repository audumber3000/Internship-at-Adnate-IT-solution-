import { getCurve, setColorScheme } from '../../../shared-modules/shared-core/assets/ngx-charts-settings';

export const heartRate = {
  data: [
    {
      name: '',
      value: 96,
    },
  ],
  total: 140,
  colorScheme: {
    domain: ['#ff4861'],
  },
};

export const caloriesBurn = {
  data: [
    {
      name: '',
      value: 360,
    },
  ],
  total: 500,
  colorScheme: {
    domain: ['#f6da6e'],
  },
};

export const steps = {
  data: [
    {
      name: '',
      value: 1200,
    },
  ],
  total: 2000,
  colorScheme: {
    domain: ['#4ce1b6'],
  },
};

export const distance = {
  data: [
    {
      name: '',
      value: 3800,
    },
  ],
  total: 4000,
  colorScheme: {
    domain: ['#70bbfd'],
  },
};

export const activityChartSettings = {
  colorScheme: setColorScheme('standard'),
  schemeType: 'ordinal',
  animations: true,
  showLegend: true,
  legendPosition: 'below',
  legendTitle: '',
  showXAxis: true,
  showYAxis: true,
  showXAxisLabel: false,
  showYAxisLabel: false,
  xAxisLabel: '',
  yAxisLabel: '',
  autoScale: false,
  showGridLines: true,
  curve: getCurve('Basis'),
  yAxisTickFormatting: formatTicks,
  roundDomains: false,
  tooltipDisabled: false,
};

function formatTicks(tick) {
  return tick + 'km';
}

export const fatBurningSettings = {
  colorScheme: setColorScheme('pink'),
  schemeType: 'ordinal',
  tooltipDisabled: false,
  animations: true,
  showXAxis: true,
  showYAxis: true,
  showLegend: false,
  showXAxisLabel: false,
  showYAxisLabel: false,
  xAxisLabel: 'Country',
  yAxisLabel: 'GDP Per Capita',
  autoScale: false,
  showGridLines: true,
  curve: getCurve('Basis'),
};

export const fatBurningData = [
  {
    name: 'Fat burning',
    series: [
      { name: '12.03', value: 56 },
      { name: '13.03', value: 54 },
      { name: '14.03', value: 51 },
      { name: '15.03', value: 47 },
      { name: '16.03', value: 44 },
      { name: '17.03', value: 45 },
      { name: '18.03', value: 50 },
      { name: '19.03', value: 58 },
    ],
  },
];

export const activityRating = [
  { name: 'Cycling', value: 10 },
  { name: 'Walking', value: 37 },
  { name: 'Run', value: 21 },
  { name: 'Swimming', value: 32 },
];
