import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { BaseChartComponent, ColorHelper } from '@swimlane/ngx-charts';
import { calculateViewDimensions } from '@swimlane/ngx-charts/release/common/view-dimensions.helper';

@Component({
  selector: 'app-easydev-pie-chart',
  templateUrl: './easydev-pie-chart.component.html',
  styleUrls: ['./easydev-pie-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EasydevPieChartComponent extends BaseChartComponent {
  @Input() labels = false;
  @Input() legend = false;
  @Input() legendTitle = 'Legend';
  @Input() legendPosition = 'right';
  @Input() explodeSlices = false;
  @Input() doughnut = false;
  @Input() arcWidth = 0.25;
  @Input() gradient;
  @Input() activeEntries: any[] = [];
  @Input() tooltipDisabled = false;
  @Input() labelFormatting: any;
  @Input() trimLabels = false;
  @Input() maxLabelLength = 10;
  @Input() tooltipText: any;

  @Output() dblclick = new EventEmitter();
  @Output() select = new EventEmitter();
  @Output() activate: EventEmitter<any> = new EventEmitter();
  @Output() deactivate: EventEmitter<any> = new EventEmitter();

  @ContentChild('tooltipTemplate', { static: false }) tooltipTemplate: TemplateRef<any>;

  translation: string;
  outerRadius;
  innerRadius;
  data: any;
  colors: ColorHelper;
  domain: any;
  dims: any;
  margin = [0, 0, 0, 0];
  legendOptions: any;

  update(): void {
    super.update();

    if (this.labels) {
      this.margin = [0, 10, 10, 10];
    }

    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margin,
      showLegend: this.legend,
      legendPosition: this.legendPosition,
    });

    const xOffset = this.margin[3] + this.dims.width / 2;
    const yOffset = this.margin[0] + this.dims.height / 2;
    this.translation = `translate(${xOffset}, ${yOffset})`;
    this.outerRadius = Math.min(this.dims.width, this.dims.height);
    if (this.labels) {
      // make room for labels
      this.outerRadius /= 3;
    } else {
      this.outerRadius /= 2;
    }
    this.innerRadius = 0;
    if (this.doughnut) {
      this.innerRadius = this.outerRadius * (1 - this.arcWidth);
    }

    this.domain = this.getDomain();

    // sort data according to domain
    this.data = this.results.sort((a, b) => {
      return this.domain.indexOf(a.name) - this.domain.indexOf(b.name);
    });

    this.setColors();
    this.legendOptions = this.getLegendOptions();
  }

  getDomain(): any[] {
    const items = [];

    this.results.map(d => {
      let label = d.name;
      if (label.constructor.name === 'Date') {
        label = label.toLocaleDateString();
      } else {
        label = label.toLocaleString();
      }

      if (items.indexOf(label) === -1) {
        items.push(label);
      }
    });

    return items;
  }

  onClick(data): void {
    this.select.emit(data);
  }

  setColors(): void {
    this.colors = new ColorHelper(this.scheme, 'ordinal', this.domain, this.customColors);
  }

  getLegendOptions() {
    return {
      scaleType: 'ordinal',
      domain: this.domain,
      colors: this.colors,
      title: this.legendTitle,
      position: this.legendPosition,
    };
  }

  onActivate(item) {
    const idx = this.activeEntries.findIndex(d => {
      return d.name === item.name && d.value === item.value;
    });
    if (idx > -1) {
      return;
    }

    this.activeEntries = [item, ...this.activeEntries];
    this.activate.emit({ value: item, entries: this.activeEntries });
  }

  onDeactivate(item) {
    const idx = this.activeEntries.findIndex(d => {
      return d.name === item.name && d.value === item.value;
    });

    this.activeEntries.splice(idx, 1);
    this.activeEntries = [...this.activeEntries];

    this.deactivate.emit({ value: item, entries: this.activeEntries });
  }
}
