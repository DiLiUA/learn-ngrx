import {Injectable} from "../../node_modules/@angular/core/src/di/metadata";
import {Observable} from "../../node_modules/rxjs/Observable";
// import timer from  "../../../node_modules/rxjs/observable/timer";

@Injectable()
export class TodosService{

  getTodos() {
    const todos = [{id: 1, title: "Learn ngrx/store", completed: true}, {id: 2, title: "Learn ngrx/effects", completed: false}]
    return Observable.timer(1000).mapTo(todos);
  }
}
