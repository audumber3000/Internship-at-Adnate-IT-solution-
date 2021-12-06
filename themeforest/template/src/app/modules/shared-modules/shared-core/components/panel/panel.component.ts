import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PanelComponent implements OnInit {
  @Input() title = 'Basic Panel';
  @Input() labelText = '';
  @Input() iconName = '';
  @Input() divided = false;
  @Input() controls = false;
  @Input() panelColor = '';
  @HostBinding('class') @Input() classes = 'col-md-12 col-lg-12 col-xl-6';

  panelOpenState = true;

  iconClass = '';
  inputClasses = {};

  visible = true;
  isRefreshing = false;
  constructor() {}

  ngOnInit() {
    this.iconClass = 'lnr-' + this.iconName;
    this.inputClasses['divided'] = this.divided;
    this.inputClasses['panel-' + this.panelColor] = this.panelColor;
  }

  refreshPanel() {
    this.isRefreshing = true;
    timer(2000)
      .pipe(mapTo(false))
      .subscribe(val => (this.isRefreshing = val));
  }

  dismissPanel() {
    this.visible = false;
  }

  togglePanel(event) {
    this.panelOpenState = !this.panelOpenState;
  }
}
