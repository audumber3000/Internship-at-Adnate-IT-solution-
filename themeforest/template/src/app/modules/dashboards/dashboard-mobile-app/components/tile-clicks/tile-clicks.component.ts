import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { transparentize } from 'polished';

@Component({
  selector: 'app-tile-clicks',
  templateUrl: './tile-clicks.component.html',
  styleUrls: ['./tile-clicks.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TileClicksComponent implements OnInit {
  @Input() wrapperHeight = '300px';

  multi = [
    {
      name: 'News',
      series: [
        {
          name: '2010',
          value: 40632,
        },
        {
          name: '2000',
          value: 36953,
        },
      ],
    },
    {
      name: 'Video',
      series: [
        {
          name: '2010',
          value: 49737,
        },
        {
          name: '2000',
          value: 45986,
        },
      ],
    },
    {
      name: 'Messages',
      series: [
        {
          name: '2010',
          value: 36745,
        },
        {
          name: '2000',
          value: 34774,
        },
      ],
    },
    {
      name: 'Photos',
      series: [
        {
          name: '2010',
          value: 36240,
        },
        {
          name: '2000',
          value: 32543,
        },
      ],
    },
    {
      name: 'Weather',
      series: [
        {
          name: '2010',
          value: 36240,
        },
        {
          name: '2000',
          value: 32543,
        },
      ],
    },
  ];

  view: any[];
  colorScheme: any;
  schemeType: string = 'ordinal';
  animations = true;
  tooltipDisabled = false;
  showXAxis = false;
  showYAxis = true;
  showLegend = false;
  showXAxisLabel = true;
  showYAxisLabel = true;
  showGridLines = true;
  barPadding = 0;
  groupPadding = 32;
  roundDomains = false;
  roundEdges = false;
  xScaleMax: any;
  showDataLabel = false;
  trimXAxisTicks = true;
  trimYAxisTicks = true;
  rotateXAxisTicks = true;
  maxXAxisTickLength = 16;
  maxYAxisTickLength = 16;

  constructor() {
    this.colorScheme = {
      domain: [transparentize(0.2, '#48b5ff'), transparentize(0.2, '#7edbff')],
    };
  }

  ngOnInit() {}

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }

  select(data) {
    console.log('Item clicked', data);
  }
}
