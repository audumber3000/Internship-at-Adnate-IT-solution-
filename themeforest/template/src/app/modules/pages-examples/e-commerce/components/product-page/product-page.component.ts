import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductInfo, shortSetProducts } from '../../assets/product-info';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from 'ngx-gallery';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductPageComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  productSet: ProductInfo[] = shortSetProducts;
  selectedColor = '';
  selectOptions = [
    {
      description: 'Shugar Pink',
      colorName: 'pink',
    },
    {
      description: 'Lightskyblue',
      colorName: 'lightskyblue',
    },
    {
      description: 'Aquamarine',
      colorName: 'aquamarine',
    },
  ];

  constructor() {}
  ngOnInit() {
    this.galleryOptions = [
      {
        width: '440px',
        height: '400px',
        thumbnailsColumns: 5,
        imageAnimation: NgxGalleryAnimation.Slide,
        previewCloseOnEsc: true,
        previewCloseOnClick: true,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
        previewCloseOnEsc: true,
      },
      {
        breakpoint: 400,
        preview: false,
      },
    ];

    this.galleryImages = [
      {
        small: `${environment.deployAssetsPath}/assets/images/for_store/dog/1.png`,
        medium: `${environment.deployAssetsPath}/assets/images/for_store/dog/1.png`,
        big: `${environment.deployAssetsPath}/assets/images/for_store/dog/1.png`,
      },
      {
        small: `${environment.deployAssetsPath}/assets/images/for_store/dog/2.png`,
        medium: `${environment.deployAssetsPath}/assets/images/for_store/dog/2.png`,
        big: `${environment.deployAssetsPath}/assets/images/for_store/dog/2.png`,
      },
      {
        small: `${environment.deployAssetsPath}/assets/images/for_store/dog/3.png`,
        medium: `${environment.deployAssetsPath}/assets/images/for_store/dog/3.png`,
        big: `${environment.deployAssetsPath}/assets/images/for_store/dog/3.png`,
      },
      {
        small: `${environment.deployAssetsPath}/assets/images/for_store/dog/4.png`,
        medium: `${environment.deployAssetsPath}/assets/images/for_store/dog/4.png`,
        big: `${environment.deployAssetsPath}/assets/images/for_store/dog/4.png`,
      },
      {
        small: `${environment.deployAssetsPath}/assets/images/for_store/dog/5.png`,
        medium: `${environment.deployAssetsPath}/assets/images/for_store/dog/5.png`,
        big: `${environment.deployAssetsPath}/assets/images/for_store/dog/5.png`,
      },
    ];
  }
}
