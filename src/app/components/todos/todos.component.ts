import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'sg-todos',
  templateUrl: 'todos.component.html'
})
export class TodosComponent {
  @Input() todos;
  @Output() toggleDone = new EventEmitter<Todo>();
  @Output() removeTodo = new EventEmitter<Todo>();
}
