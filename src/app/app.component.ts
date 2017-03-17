import { Component } from '@angular/core';
import {Store} from "../../node_modules/@ngrx/store/src/store";
import {Observable} from "../../node_modules/rxjs/Observable";
import {getTodos, addTodo} from "../actions/todo.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'todo list';
  todos : Observable<any>;

  constructor (private store: Store<any>) {
    this.store.dispatch(getTodos());
    this.todos = store.select('todos');
  }

  addTodo(val) {
    this.store.dispatch(addTodo({id: 10, title: val, completed: false}));
    this.todos = this.store.select('todos');
  }
}
