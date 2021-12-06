import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { AGENTS_DATA_RESPONSIVE, OverWatchAgent } from '../../assets/overwatch.agent';

@Component({
  selector: 'app-pagination-table',
  templateUrl: './pagination-table.component.html',
  styleUrls: ['./pagination-table.component.scss'],
})
export class PaginationTableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  dataSource;
  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'username', 'age', 'date', 'location', 'work'];
  columnsAliases = {
    position: '#',
    firstName: 'First Name',
    lastName: 'Last Name',
    username: 'Username',
    age: 'Age',
    date: 'Date',
    location: 'Location',
    work: 'Work',
  };

  constructor() {
    this.dataSource = new MatTableDataSource<OverWatchAgent>(this.generateData(AGENTS_DATA_RESPONSIVE, 30));
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public generateData(sourceArray, desiredLength) {
    const length = sourceArray.length;
    const resultArray = [];
    for (let i = 0; i < desiredLength; i++) {
      resultArray.push({ ...sourceArray[Math.floor(Math.random() * length)], position: i + 1 });
    }
    return resultArray;
  }
}
