import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TodoDataService } from '../../services/todo-data.service';
import { Observable } from 'rxjs';
import { Todo } from '../../assets/todo';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TodoListComponent implements OnInit {
  todosPending$: Observable<Todo[]>;
  todosCompleted$: Observable<Todo[]>;
  constructor(private todoData: TodoDataService) {
    this.todosPending$ = this.todoData.getAllTodos().pipe(map(todos => todos.filter(todo => !todo.completed)));
    this.todosCompleted$ = this.todoData.getAllTodos().pipe(map(todos => todos.filter(todo => todo.completed)));
  }

  ngOnInit() {}

  toggleComplete(id) {
    this.todoData.toggleTodoComplete(id);
  }

  deleteTodo(id) {
    this.todoData.deleteTodoById(id);
  }
}
