import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicTablesComponent } from './components/basic-tables/basic-tables.component';
import { PaginationTableComponent } from './components/pagination-table/pagination-table.component';
import { EditableTableComponent } from './components/editable-table/editable-table.component';
import { SelectionTableComponent } from './components/selection-table/selection-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/basic_tables', pathMatch: 'full' },
  { path: 'basic_tables', component: BasicTablesComponent, data: { animation: 'BasicTables' } },
  { path: 'pagination_tables', component: PaginationTableComponent, data: { animation: 'PaginationTable' } },
  { path: 'editable_tables', component: EditableTableComponent, data: { animation: 'EditableTable' } },
  { path: 'selection_tables', component: SelectionTableComponent, data: { animation: 'SelectionTable' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule {}
