import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

import { todos, TodosInterface } from './todo.reducers';
import { visibilityFilter } from './visibility-flter.reducer';
import { FilterInterface } from '../models/filters';

export interface AppStateInterface {
  todos: TodosInterface;
  visibilityFilter: FilterInterface;
}

export const reducer = compose(combineReducers)({
  todos,
  visibilityFilter
});
