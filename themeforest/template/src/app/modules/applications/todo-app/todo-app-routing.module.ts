import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoAppComponent } from './components/todo-app/todo-app.component';

const routes: Routes = [
  {
    path: '',
    component: TodoAppComponent,
    data: { animation: 'TodoApp' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoAppRoutingModule {}
