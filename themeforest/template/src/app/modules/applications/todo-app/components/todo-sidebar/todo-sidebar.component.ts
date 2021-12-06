import { Component, OnInit, TemplateRef } from '@angular/core';
import { TodoDataService } from '../../services/todo-data.service';
import { BsDatepickerConfig, BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap';
import { Todo } from '../../assets/todo';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-todo-sidebar',
  templateUrl: './todo-sidebar.component.html',
  styleUrls: ['./todo-sidebar.component.scss'],
})
export class TodoSidebarComponent implements OnInit {
  image = `${environment.deployAssetsPath}/assets/images/sidebar_img.svg`;
  modalRef: BsModalRef;
  bsConfig: Partial<BsDatepickerConfig>;
  datePickerColorTheme = 'theme-blue';
  todoDate = new Date();
  todoTitle = '';
  todoDescription = '';
  todoPriority = 'medium';

  constructor(private todoData: TodoDataService, private modalService: BsModalService) {
    this.bsConfig = { ...this.bsConfig, containerClass: this.datePickerColorTheme };
  }

  ngOnInit() {}

  togglePriorityFilter(value) {
    this.todoData.setPriorityFilter(value);
  }

  toggleStatusFilter(value) {
    this.todoData.setStatusFilter(value);
  }

  openModal(template: TemplateRef<any>) {
    this.todoTitle = '';
    this.todoDescription = '';
    this.todoPriority = 'medium';
    this.todoDate = new Date();
    this.modalRef = this.modalService.show(template, {});
  }

  createTodo() {
    const todo = new Todo({
      id: 0,
      title: this.todoTitle,
      completed: false,
      description: this.todoDescription,
      priority: this.todoPriority,
      date: this.todoDate,
    });
    this.todoData.addTodo(todo);
    this.modalRef.hide();
  }
}
