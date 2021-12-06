import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StarRatingComponent implements OnInit {
  @Input() fillIconName = 'star';
  @Input() emptyIconName = 'star_border';
  @Input() rating = 0;
  starNumbers;
  unStarNumbers;

  constructor() {}

  ngOnInit() {
    this.starNumbers = Array(this.rating)
      .fill(0)
      .map((x, i) => i);
    this.unStarNumbers = Array(5 - this.rating)
      .fill(0)
      .map((x, i) => i);
  }
}
