import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  avatarImg1 = `${environment.deployAssetsPath}/assets/images/14.png`;
  avatarImg2 = `${environment.deployAssetsPath}/assets/images/15.png`;
  constructor() {}

  ngOnInit() {}
}
