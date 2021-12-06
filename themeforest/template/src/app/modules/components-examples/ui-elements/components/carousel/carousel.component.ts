import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit, AfterViewInit {
  constructor(private _cdr: ChangeDetectorRef) {}

  multiplImages = [
    `${environment.deployAssetsPath}/assets/images/1.png`,
    `${environment.deployAssetsPath}/assets/images/2.png`,
    `${environment.deployAssetsPath}/assets/images/3.png`,
    `${environment.deployAssetsPath}/assets/images/4.png`,
  ];

  images = [
    `${environment.deployAssetsPath}/assets/images/5.png`,
    `${environment.deployAssetsPath}/assets/images/6.png`,
  ];

  public carouselItems;
  public multiplyCarouselItems;
  public multiplyCarouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 1, lg: 4, all: 0 },
    speed: 1000,
    slide: 1,
    touch: false,
    loop: true,
    interval: { timing: 3000 },
  };

  public carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    speed: 1000,
    slide: 1,
    touch: false,
    loop: true,
    interval: { timing: 3000 },
  };

  ngOnInit() {
    this.multiplyCarouselItems = this.multiplImages.concat(this.multiplImages);
    this.carouselItems = this.images.concat(this.images);
  }

  ngAfterViewInit() {
    this._cdr.detectChanges();
  }
}
