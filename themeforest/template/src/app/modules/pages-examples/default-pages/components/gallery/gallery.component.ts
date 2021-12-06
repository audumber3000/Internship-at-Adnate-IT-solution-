import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GalleryCard, gallerySet } from './assets/gallery.card';
import { map } from 'rxjs/operators';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  galleryCards: BehaviorSubject<GalleryCard[]>;

  galleryImages: NgxGalleryImage[];
  galleryOptions: NgxGalleryOptions[];

  constructor() {
    this.galleryCards = new BehaviorSubject<GalleryCard[]>(gallerySet);
  }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '100%',
        height: '600px',
        imageAnimation: NgxGalleryAnimation.Slide,
        previewCloseOnEsc: true,
        image: false,
        thumbnailMargin: 0,
        thumbnailsColumns: 4,
        thumbnailsRows: 3,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        previewCloseOnEsc: true,
        image: false,
        thumbnailMargin: 0,
        thumbnailsColumns: 4,
        thumbnailsRows: 3,
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false,
        thumbnailMargin: 0,
        thumbnailsColumns: 1,
        thumbnailsRows: 3,
      },
    ];

    this.galleryCards
      .pipe(
        map(items => {
          return items.map(item => ({ small: item.src, medium: item.src, big: item.src }));
        }),
      )
      .subscribe(images => {
        this.galleryImages = images;
      });
  }

  handleFilterChanges($event) {
    this.galleryCards.next(this.filterImages(gallerySet, $event.target.value));
  }

  filterImages(elements: GalleryCard[], filterBy = '') {
    let result = elements;

    if (!filterBy) {
      return elements;
    }

    result = result.filter(element => {
      return element.category.toLowerCase() === filterBy;
    });

    return result;
  }
}
