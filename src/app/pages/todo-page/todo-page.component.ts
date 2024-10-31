import { Component } from '@angular/core';
import { TodoFormComponent } from '../../core/components/todo-page/todo-form/todo-form.component';
import { TodoListComponent } from '../../core/components/todo-page/todo-list/todo-list.component';
import todoApi from '../../stub/todoBack';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [
    TodoFormComponent,
    TodoListComponent
  ],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss'
})
export class TodoPageComponent {
  private api = todoApi;
  constructor() {
  }
}
