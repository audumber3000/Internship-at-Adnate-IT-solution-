import * as shape from 'd3-shape';
import { data as countries } from 'emoji-flags';
import { transparentize } from 'polished';

export let easyDevColorSets = [
  {
    name: 'standard',
    domain: [
      transparentize(0.2, '#70bbfd'),
      transparentize(0.2, '#4ce1b6'),
      transparentize(0.2, '#f198ca'),
      transparentize(0.2, '#c39fdf'),
    ],
  },
  {
    name: 'standard-transparent',
    domain: ['#70bbfd', '#4ce1b6', '#f198ca', '#c39fdf'],
  },
  {
    name: 'green',
    domain: ['#b8e986'],
  },
  {
    name: 'red',
    domain: ['#ff4861'],
  },
  {
    name: 'pink',
    domain: ['#f66c7d'],
  },
  {
    name: 'colored',
    domain: ['#4ce1b6', '#70bbfd', '#f6da6e', '#ff4861'],
  },
  {
    name: 'versicolor',
    domain: [
      '#bf9d76',
      '#e99450',
      '#d89f59',
      '#f2dfa7',
      '#a5d7c6',
      '#7794b1',
      '#afafaf',
      '#707160',
      '#ba9383',
      '#d9d5c3',
    ],
  },
];

export function setColorScheme(name) {
  return easyDevColorSets.find(s => s.name === name);
}

const curves = {
  Basis: shape.curveBasis,
  'Basis Closed': shape.curveBasisClosed,
  Bundle: shape.curveBundle.beta(1),
  Cardinal: shape.curveCardinal,
  'Cardinal Closed': shape.curveCardinalClosed,
  'Catmull Rom': shape.curveCatmullRom,
  'Catmull Rom Closed': shape.curveCatmullRomClosed,
  Linear: shape.curveLinear,
  'Linear Closed': shape.curveLinearClosed,
  'Monotone X': shape.curveMonotoneX,
  'Monotone Y': shape.curveMonotoneY,
  Natural: shape.curveNatural,
  Step: shape.curveStep,
  'Step After': shape.curveStepAfter,
  'Step Before': shape.curveStepBefore,
  default: shape.curveLinear,
};

// line interpolation
const interpolationTypes = [
  'Basis',
  'Bundle',
  'Cardinal',
  'Catmull Rom',
  'Linear',
  'Monotone X',
  'Monotone Y',
  'Natural',
  'Step',
  'Step After',
  'Step Before',
];

export function getCurve(curveType) {
  return curves[curveType];
}

export function generateData(
  seriesLength: number,
  includeMinMaxRange: boolean,
  seriesLabels: string[] = [],
  minValue = 2000,
  maxValue = 7000,
  dataPoints: number = 5,
): any[] {
  const results = [];

  const domain: Date[] = []; // array of time stamps in milliseconds

  // random dates between Sep 12, 2016 and Sep 24, 2016
  // const firstDate = new Date(Math.floor(1473700105009 + Math.random() * 1000000000));
  const firstDate = new Date();
  domain.push(firstDate);

  for (let j = 0; j < dataPoints - 1; j++) {
    const tomorrow = new Date();
    tomorrow.setDate(domain[domain.length - 1].getDate() + 1);
    domain.push(tomorrow);
  }

  for (let i = 0; i < seriesLength; i++) {
    let series;
    if (seriesLabels && seriesLabels.length) {
      series = {
        name: seriesLabels[i],
        series: [],
      };
    } else {
      const seriesLabel = countries[Math.floor(Math.random() * countries.length)];
      series = {
        name: seriesLabel.name,
        series: [],
      };
    }

    for (let j = 0; j < domain.length; j++) {
      const value = Math.floor(minValue + Math.random() * (maxValue - minValue));
      const timestamp = domain[j];
      if (includeMinMaxRange) {
        const errorMargin = 0.02 + Math.random() * 0.08;

        series.series.push({
          value,
          name: timestamp,
          min: Math.floor(value * (1 - errorMargin)),
          max: Math.ceil(value * (1 + errorMargin)),
        });
      } else {
        series.series.push({
          value,
          name: timestamp,
        });
      }
    }

    results.push(series);
  }
  return results;
}
