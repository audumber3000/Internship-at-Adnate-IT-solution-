import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAppComponent } from './components/todo-app/todo-app.component';
import { TodoAppRoutingModule } from './todo-app-routing.module';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoSidebarComponent } from './components/todo-sidebar/todo-sidebar.component';
import { MaterialImportsModule } from '../../shared-modules/material-imports/material-imports.module';
import { BsDatepickerModule, ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [TodoAppComponent, TodoListComponent, TodoSidebarComponent],
  imports: [
    CommonModule,
    FormsModule,
    TodoAppRoutingModule,
    MaterialImportsModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgSelectModule,
  ],
})
export class TodoAppModule {}
