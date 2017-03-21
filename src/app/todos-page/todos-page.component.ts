import {Component} from "../../../node_modules/@angular/core/src/metadata/directives";
import {Observable} from "../../../node_modules/rxjs/Observable";
import {Store} from "../../../node_modules/@ngrx/store/src/store";
import {TodosEffects} from "../../effects/todos.effects";
import {TodosService} from "../../servises/todos.servise";
import {getTodos, addTodo, toggleDone} from "../../actions/todo.actions";
import {ActionsEnums} from "../../enums/actions.enum";
import {setVisibilityFilter} from "../../actions/visibility-filter.actions";

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html'
})

export class TodosPageComponent {
  title: string = 'todo list';
  todos: Observable<any>;
  addTodoSuccess$ : Observable<any>;
  filters = [{id: "SHOW_ALL", title: "All"}, {id: "SHOW_COMPLETED", title: "Completed"}, {id: "SHOW_ACTIVE", title: "Active"}];
  activeFilter : Observable<any>;

  constructor (private store: Store<any>, private todosEffects : TodosEffects, private todosService: TodosService) {
    this.store.dispatch(getTodos());
    this.todos = store.select('todos');
    this.addTodoSuccess$ = this.todosEffects.addTodo$.filter(( { type } ) => type === ActionsEnums.TODO.ADD_TODO_SUCCESS);
    this.todosService.toggleDoneTodo.subscribe((id) => {
      this.toggleDone(id)
    });
    this.activeFilter = store.select("visibilityFilter").take(1);
  }

  addTodo(todo) {
    this.store.dispatch(addTodo(todo));
    this.todos = this.store.select('todos');
  }

  toggleDone(id) {
    this.store.dispatch(toggleDone(id));
    this.todos = this.store.select('todos');
  }

  changeFilter( filter ) {
    this.store.dispatch(setVisibilityFilter(filter));
    this.store.dispatch(getTodos());
  }
}
