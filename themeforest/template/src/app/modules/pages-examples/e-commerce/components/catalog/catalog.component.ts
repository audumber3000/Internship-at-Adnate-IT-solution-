import { Component, OnInit } from '@angular/core';
import { catalogProducts, ProductInfo } from '../../assets/product-info';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  productSet: ProductInfo[] = catalogProducts;
  constructor() {}

  ngOnInit() {}
}
