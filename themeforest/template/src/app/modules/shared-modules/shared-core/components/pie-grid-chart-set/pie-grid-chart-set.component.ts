import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { formatLabel } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pie-grid-chart-set',
  templateUrl: './pie-grid-chart-set.component.html',
  styleUrls: ['./pie-grid-chart-set.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PieGridChartSetComponent implements OnInit {
  @Input() charts: any[];
  @Input() horizontal = false;
  @Input() hideTotal = false;
  @Input() coloredPercent = false;
  chartsSettings: any[];
  tooltipDisabled = false;
  animations = true;

  constructor() {}

  ngOnInit() {
    this.chartsSettings = this.charts.map(item => ({
      data: [
        {
          name: '',
          value: item.current,
        },
      ],
      total: item.total,
      title: item.title,
      colorScheme: {
        domain: [item.color],
      },
    }));
  }

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }

  select(data) {
    console.log('Item clicked', data);
  }

  pieTooltipText({ data }) {
    const val = formatLabel(data.value);

    return `
      <span class="tooltip-val">$${val}</span>
    `;
  }
}
