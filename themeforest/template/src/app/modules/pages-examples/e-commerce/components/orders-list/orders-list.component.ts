import { Component, OnInit, ViewChild } from '@angular/core';
import { formatCurrency } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'date', 'customer_name', 'price', 'tax', 'delivery', 'quantity', 'status'];
  dataSource;
  @ViewChild('MatSort', { static: false }) sort: MatSort;
  @ViewChild('MatPaginator', { static: false }) paginator: MatPaginator;

  columnsAliases = {
    id: 'ID',
    date: 'Date',
    customer_name: 'Customer Name',
    price: 'Price',
    tax: 'Tax',
    delivery: 'Delivery',
    quantity: 'Quantity',
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
        date: this.getRandomDate(new Date(2017, 3, 1), new Date(2018, 3, 1)),
        customer_name: ['Maria', 'Bobby  ', 'Alexander'][Math.floor(Math.random() * 3)],
        price: formatCurrency(Math.min(1000, Math.random() * 1000 + 20), 'en', '$'),
        tax: formatCurrency(Math.min(10, Math.random() * 10), 'en', '$'),
        delivery: formatCurrency(Math.min(10, Math.random() * 10), 'en', '$'),
        quantity: Math.min(5, Math.round(Math.random() * 5 + 1)),
        status: ['Enabled', 'Disabled'][Math.floor(Math.random() * 2)],
      });
    }
    return rows;
  }
}
