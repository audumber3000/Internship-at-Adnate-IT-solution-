import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { BasicTablesComponent } from './components/basic-tables/basic-tables.component';
import { MaterialImportsModule } from '../../shared-modules/material-imports/material-imports.module';
import { EditableTableComponent } from './components/editable-table/editable-table.component';
import { SelectionTableComponent } from './components/selection-table/selection-table.component';
import { PaginationTableComponent } from './components/pagination-table/pagination-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BasicTablesComponent, EditableTableComponent, SelectionTableComponent, PaginationTableComponent],
  imports: [CommonModule, TablesRoutingModule, MaterialImportsModule, ReactiveFormsModule],
})
export class TablesModule {}
