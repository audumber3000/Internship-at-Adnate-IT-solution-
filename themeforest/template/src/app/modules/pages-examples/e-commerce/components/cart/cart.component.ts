import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CartComponent implements OnInit {
  data = [
    {
      img: `${environment.deployAssetsPath}/assets/images/for_store/vase.png`,
      title: 'Knowledge nay estimable questions repulsive daughters',
      quantity: 1,
      price: 120.0,
      tax: 5.0,
      total: 125.0,
    },
    {
      img: `${environment.deployAssetsPath}/assets/images/for_store/pillow_dog.png`,
      title: 'Glass Vas Knowledge nay estimable questions repulsive daughters ',
      quantity: 2,
      price: 60.0,
      tax: 2.5,
      total: 125.0,
    },
    {
      img: `${environment.deployAssetsPath}/assets/images/for_store/vase_3.png`,
      title: 'Questions repulsive daughters',
      quantity: 12,
      price: 10.0,
      tax: 1.0,
      total: 121.0,
    },
  ];
  constructor() {}

  ngOnInit() {}
}
