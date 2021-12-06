import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tiny-stat-progress',
  templateUrl: './tiny-stat-progress.component.html',
  styleUrls: ['./tiny-stat-progress.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TinyStatProgressComponent implements OnInit {
  @Input() trendDirectionUp = true;
  @Input() color = 'red';
  @Input() total = '400';
  @Input() title = 'Stat';
  @Input() percent = '80';
  progressColor = 'progress-wrap-red-gradient';
  constructor() {}

  ngOnInit() {
    switch (this.color) {
      case 'red':
        this.progressColor = 'progress-wrap-red-gradient';
        break;
      case 'green':
        this.progressColor = 'progress-wrap-green-gradient';
        break;
      case 'blue':
        this.progressColor = 'progress-wrap-blue-gradient';
        break;
      case 'accent':
        this.progressColor = 'progress-wrap-accent-gradient';
        break;
    }
  }
}
