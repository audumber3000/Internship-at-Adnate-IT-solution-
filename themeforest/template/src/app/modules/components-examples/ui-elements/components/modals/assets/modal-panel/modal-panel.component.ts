import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-panel',
  templateUrl: './modal-panel.component.html',
  styleUrls: ['./modal-panel.component.scss'],
})
export class ModalPanelComponent implements OnInit {
  @Input() title = 'Basic Alerts';
  @Input() description = 'Use default modal';
  @HostBinding('class') @Input() classes = 'col-md-12 col-lg-6 col-xl-4';

  constructor() {}

  ngOnInit() {}
}
