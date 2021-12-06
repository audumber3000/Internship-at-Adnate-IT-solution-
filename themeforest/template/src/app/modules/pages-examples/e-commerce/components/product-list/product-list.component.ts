import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { formatCurrency } from '@angular/common';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'photo', 'name', 'category', 'quantity', 'vendorCode', 'price', 'status'];
  dataSource;
  @ViewChild('MatSort', { static: false }) sort: MatSort;
  @ViewChild('MatPaginator', { static: false }) paginator: MatPaginator;
  imagesList = [
    `${environment.deployAssetsPath}/assets/images/for_store/vase.png`,
    `${environment.deployAssetsPath}/assets/images/for_store/vase_2.png`,
    `${environment.deployAssetsPath}/assets/images/for_store/vase_3.png`,
    `${environment.deployAssetsPath}/assets/images/for_store/fur.png`,
    `${environment.deployAssetsPath}/assets/images/for_store/pillow.png`,
    `${environment.deployAssetsPath}/assets/images/for_store/pillow_2.png`,
    `${environment.deployAssetsPath}/assets/images/for_store/pillow_dog.png`,
  ];

  columnsAliases = {
    id: 'ID',
    photo: 'Photo',
    name: 'Name',
    category: 'Category',
    quantity: 'Quantity',
    vendorCode: 'Vendor Code',
    price: 'Price, $',
    status: 'Status',
  };

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.createRows(17));
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  private getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
  }

  private createRows(numberOfRows) {
    const rows = [];

    for (let i = 1; i < numberOfRows + 1; i += 1) {
      rows.push({
        id: Math.min(99999, Math.round(Math.random() * 99999 + 1000)),
        photo: this.imagesList[Math.floor(Math.random() * 7)],
        name: ['Glass Vase', 'Pillow'][Math.floor(Math.random() * 2)],
        category: 'Home accessories',
        quantity: Math.min(400, Math.round(Math.random() * 400)),
        vendorCode: Math.min(1000, Math.random() * 1000 + 20).toFixed(2),
        price: formatCurrency(Math.min(1000, Math.random() * 1000 + 20), 'en', '$'),
        status: ['In Stock', 'Out Of Stock'][Math.floor(Math.random() * 2)],
      });
    }
    return rows;
  }
}
