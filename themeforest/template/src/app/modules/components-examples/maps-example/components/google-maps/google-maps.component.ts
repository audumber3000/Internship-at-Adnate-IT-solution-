import { Component, Input, OnInit } from '@angular/core';
import { MarkerLabel } from '@agm/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
})
export class GoogleMapsComponent implements OnInit {
  markerLabel: MarkerLabel = {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '500',
    text: 'This is label!',
  };

  draggableMarker = true;

  constructor() {}

  ngOnInit() {}
}
