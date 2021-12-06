import { Injectable } from '@angular/core';
import { Todo } from '../assets/todo';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { initialTodos } from '../assets/initial.todos';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  priorityFilter$: BehaviorSubject<string>;
  statusFilter$: BehaviorSubject<string>;

  // Placeholder for todos
  todos: BehaviorSubject<Todo[]>;

  constructor() {
    this.todos = new BehaviorSubject<Todo[]>(initialTodos);
    this.priorityFilter$ = new BehaviorSubject<string>('');
    this.statusFilter$ = new BehaviorSubject<string>('');
  }

  deleteTodoById(id: number) {
    let currentTodos: Todo[] = this.todos.getValue();

    currentTodos = currentTodos.filter(todo => todo.id !== id);
    this.todos.next(currentTodos);
  }

  getAllTodos(): Observable<Todo[]> {
    const filteredByPriority = this.priorityFilter$.pipe(
      mergeMap(val =>
        this.todos.asObservable().pipe(
          map(todos =>
            todos.filter(todo => {
              if (val) {
                return todo.priority === val;
              }
              return true;
            }),
          ),
        ),
      ),
    );

    const filteredByStatus = this.statusFilter$.pipe(
      mergeMap(val =>
        filteredByPriority.pipe(
          map(todos =>
            todos.filter(todo => {
              switch (val) {
                case 'completed':
                  return todo.completed;
                  break;
                case 'pending':
                  return !todo.completed;
                  break;
                default:
                  return true;
                  break;
              }
            }),
          ),
        ),
      ),
    );

    return filteredByStatus;
  }

  getTodoById(id: number): Observable<Todo> {
    return this.todos.asObservable().pipe(map(todos => todos.filter(todo => todo.id === id).pop()));
  }

  addTodo(todo: Todo) {
    const currentTodos: Todo[] = this.todos.value.map(item => ({ ...item }));
    const newId = currentTodos[currentTodos.length - 1].id + 1;
    currentTodos.push({ ...todo, id: newId });
    this.todos.next(currentTodos);
  }

  // Toggle complete
  toggleTodoComplete(id: number) {
    const currentTodos: Todo[] = this.todos.value.map(item => ({ ...item }));

    currentTodos.forEach(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
    this.todos.next(currentTodos);
  }

  setPriorityFilter(val) {
    this.priorityFilter$.next(val);
  }

  setStatusFilter(val) {
    this.statusFilter$.next(val);
  }
}
