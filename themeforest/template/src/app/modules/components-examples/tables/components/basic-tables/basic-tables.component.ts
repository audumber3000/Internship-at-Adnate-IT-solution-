import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AGENTS_DATA, AGENTS_DATA_RESPONSIVE, OverWatchAgent } from '../../assets/overwatch.agent';

@Component({
  selector: 'app-basic-tables',
  templateUrl: './basic-tables.component.html',
  styleUrls: ['./basic-tables.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BasicTablesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'username', 'status'];
  dataSource = AGENTS_DATA;
  columnsAliases = {
    position: '#',
    firstName: 'First Name',
    lastName: 'Last Name',
    username: 'Username',
    status: 'Status',
  };

  displayedColumnsResponsive: string[] = ['position', 'firstName', 'lastName', 'username', 'age', 'location', 'status'];
  dataSourceResponsive = AGENTS_DATA_RESPONSIVE;
  columnsAliasesResponsive = {
    position: '#',
    firstName: 'First Name',
    lastName: 'Last Name',
    username: 'Username',
    age: 'Age',
    location: 'Location',
    status: 'Status',
  };

  constructor() {}

  ngOnInit() {}
}
