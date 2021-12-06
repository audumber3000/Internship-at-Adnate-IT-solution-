import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs/internal/Observable';
import { EmailData, EmailDataService } from '../../services/email-data.service';
import { SidebarCollapseStateService } from '../../services/sidebar-collapse-state.service';

@Component({
  selector: 'app-emails-list',
  templateUrl: './emails-list.component.html',
  styleUrls: ['./emails-list.component.scss'],
})
export class EmailsListComponent implements OnInit {
  displayedColumns: string[] = ['select', 'favorite', 'name', 'messageBody', 'attachment', 'date'];
  emails: Observable<EmailData[]>;
  dataSource = new MatTableDataSource<EmailData>();
  selection = new SelectionModel<EmailData>(true, []);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private emailDataService: EmailDataService, private sidebarStateService: SidebarCollapseStateService) {}

  ngOnInit() {
    this.emails = this.emailDataService.getEmails();
    this.emails.pipe().subscribe(data => {
      this.selection.clear();
      this.dataSource.data = data;
      this.dataSource._updateChangeSubscription();
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: EmailData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  resetEmailsList() {
    this.emailDataService.resetEmails();
  }

  deleteEmail() {
    const toDelete = this.dataSource.data.filter(item => this.selection.isSelected(item));
    this.emailDataService.deleteEmails(toDelete);
  }

  markAsRead() {
    const changeReadStatusArray = this.dataSource.data.filter(item => this.selection.isSelected(item));
    this.emailDataService.changeReadState(changeReadStatusArray, false);
  }

  markAsUnRead() {
    const changeReadStatusArray = this.dataSource.data.filter(item => this.selection.isSelected(item));
    this.emailDataService.changeReadState(changeReadStatusArray, true);
  }

  toggleSidebar() {
    this.sidebarStateService.toggleSidebar();
  }
}
