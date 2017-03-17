import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs";
import { TodosService } from "../servises/todos.servise";
import { ActionsEnums } from '../enums/actions.enum'


@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions, private todosService: TodosService) { }

  @Effect() getTodos$ = this.actions$
    .ofType(ActionsEnums.TODO.GET_TODOS)
    .switchMap(action =>
      this.todosService.getTodos()
        .map(todos => ({type: ActionsEnums.TODO.GET_TODOS_SUCCESS, payload: todos}))
        .catch(() => Observable.of({type: ActionsEnums.TODO.GET_TODOS_ERROR})));

}
