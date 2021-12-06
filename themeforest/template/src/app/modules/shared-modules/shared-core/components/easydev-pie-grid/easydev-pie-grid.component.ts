import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, ContentChild, TemplateRef } from '@angular/core';
import { min } from 'd3-array';
import { format } from 'd3-format';

import { calculateViewDimensions, ViewDimensions } from '@swimlane/ngx-charts/release/common/view-dimensions.helper';
import { ColorHelper } from '@swimlane/ngx-charts/release/common/color.helper';
import { BaseChartComponent } from '@swimlane/ngx-charts/release/common/base-chart.component';
import { trimLabel } from '@swimlane/ngx-charts/release/common/trim-label.helper';
import { gridLayout } from '@swimlane/ngx-charts/release/common/grid-layout.helper';
import { formatLabel } from '@swimlane/ngx-charts/release/common/label.helper';

@Component({
  selector: 'app-easydev-pie-grid',
  templateUrl: './easydev-pie-grid.component.html',
  styleUrls: ['./easydev-pie-grid.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EasydevPieGridComponent extends BaseChartComponent {
  @Input() designatedTotal: number;
  @Input() tooltipDisabled = false;
  @Input() tooltipText: (o: any) => any;
  @Input() label = 'Total';
  @Input() minWidth = 150;
  @Input() showLabel = false;
  @Input() labelColor;

  dims: ViewDimensions;
  data: any[];
  transform: string;
  series: any[];
  domain: any[];
  colorScale: ColorHelper;
  margin = [20, 20, 20, 20];

  @ContentChild('tooltipTemplate', { static: false }) tooltipTemplate: TemplateRef<any>;

  update(): void {
    super.update();

    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margin,
    });

    this.domain = this.getDomain();

    this.data = gridLayout(this.dims, this.results, this.minWidth, this.designatedTotal);
    this.transform = `translate(${this.margin[3]} , ${this.margin[0]})`;

    this.series = this.getSeries();
    this.setColors();

    this.tooltipText = this.tooltipText || this.defaultTooltipText;
  }

  defaultTooltipText({ data }): string {
    const label = trimLabel(formatLabel(data.name));
    const val = data.value.toLocaleString();
    return `
      <span class="tooltip-label">${label}</span>
      <span class="tooltip-val">${val}</span>
    `;
  }

  getDomain(): any[] {
    return this.results.map(d => d.name);
  }

  getSeries(): any[] {
    const total = this.designatedTotal ? this.designatedTotal : this.getTotal();

    return this.data.map(d => {
      const baselineLabelHeight = 0;
      const padding = 0;
      const name = d.data.name;
      const label = formatLabel(name);
      const value = d.data.value;
      const radius = min([d.width - padding, d.height - baselineLabelHeight]) / 2 - 5;
      const innerRadius = radius * 0.9;

      let count = 0;
      const colors = () => {
        count += 1;
        if (count === 1) {
          return 'rgba(100,100,100,0.3)';
        } else {
          return this.colorScale.getColor(label);
        }
      };

      const xPos = d.x + (d.width - padding) / 2;
      const yPos = d.y + (d.height - baselineLabelHeight) / 2;

      return {
        transform: `translate(${xPos}, ${yPos})`,
        colors,
        innerRadius,
        outerRadius: radius,
        name,
        label: trimLabel(label),
        total: value,
        value,
        percent: format('.1%')(d.data.percent),
        data: [
          d,
          {
            data: {
              other: true,
              value: total - value,
              name: d.data.name,
            },
          },
        ],
      };
    });
  }

  getTotal(): any {
    return this.results.map(d => d.value).reduce((sum, d) => sum + d, 0);
  }

  onClick(data): void {
    this.select.emit(data);
  }

  setColors(): void {
    this.colorScale = new ColorHelper(this.scheme, 'ordinal', this.domain, this.customColors);
  }
}
