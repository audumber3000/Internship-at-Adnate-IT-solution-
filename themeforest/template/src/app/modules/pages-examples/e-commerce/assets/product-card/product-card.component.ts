import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ProductInfo } from '../product-info';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  newLabel = `${environment.deployAssetsPath}/assets/images/for_store/catalog/new_lable.png`;
  saleLabel = `${environment.deployAssetsPath}/assets/images/for_store/catalog/sale_lable.png`;

  @Input() productData: ProductInfo;
  @HostBinding('class') @Input() classes = 'col-sm-12 col-md-6 col-lg-4 col-xl-3';

  constructor() {}

  ngOnInit() {}
}
