import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

const data = [
  {
    product: 'Nike Airmax',
    quantity: 142,
    sold: 124,
    total: 4234,
    control: '',
    img: `${environment.deployAssetsPath}/assets/images/shoes/01.png`,
    decorationCount: [],
  },
  {
    product: 'Reebok ZeegTech',
    quantity: 98,
    sold: 53,
    total: 1752,
    control: '',
    img: `${environment.deployAssetsPath}/assets/images/shoes/02.png`,
    decorationCount: [],
  },
  {
    product: 'Puma Suede',
    quantity: 23,
    sold: 21,
    total: 1572,
    control: '',
    img: `${environment.deployAssetsPath}/assets/images/shoes/03.png`,
    decorationCount: [],
  },
  {
    product: 'Puma Basket Platform',
    quantity: 2,
    sold: 4560,
    total: 989,
    control: '',
    img: `${environment.deployAssetsPath}/assets/images/shoes/04.png`,
    decorationCount: [],
  },
  {
    product: 'Nike Jordan',
    quantity: 189,
    sold: 42,
    total: 542,
    control: '',
    img: `${environment.deployAssetsPath}/assets/images/shoes/05.png`,
    decorationCount: [],
  },
];

@Injectable({
  providedIn: 'root',
})
export class OrdersDataService {
  ordersData: BehaviorSubject<any[]>;

  constructor() {
    this.ordersData = new BehaviorSubject<any[]>(data);
  }

  getOrdersData(): Observable<any[]> {
    return this.ordersData.asObservable();
  }

  setOrdersData(ordersData) {
    this.ordersData.next(ordersData);
  }

  deleteOrderRow(index) {
    const ordersData = [...this.ordersData.value];
    ordersData.splice(index, 1);
    this.ordersData.next(ordersData);
  }
}
