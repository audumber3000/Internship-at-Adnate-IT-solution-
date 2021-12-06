import { Component, Input, OnInit } from '@angular/core';
import { MarkerLabel } from '@agm/core';

@Component({
  selector: 'app-map-ag-base',
  templateUrl: './map-ag-base.component.html',
  styleUrls: ['./map-ag-base.component.scss'],
})
export class MapAgBaseComponent implements OnInit {
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  @Input() markerLabel: MarkerLabel | string = '';
  @Input() draggable = false;

  constructor() {}

  ngOnInit() {}
}
