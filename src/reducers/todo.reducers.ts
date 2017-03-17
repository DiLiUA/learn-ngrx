import { ActionReducer, Action } from '@ngrx/store';

import { ActionsEnums } from '../enums/actions.enum'

// export function getTodos() {
//   return {
//     type: ActionsEnums.TODO.GET_TODOS
//   }
// }

const initialState = {
  data: [],
  pending: false,
  error: null
};

export function todos( state = initialState, action ) {
  switch( action.type ) {
    case ActionsEnums.TODO.GET_TODOS:
      return Object.assign({}, state, {pending: true, error: null});
    case ActionsEnums.TODO.GET_TODOS_SUCCESS:
      return Object.assign({}, state, {data: action.payload, pending: false});
    case ActionsEnums.TODO.GET_TODOS_ERROR:
      return Object.assign({}, state, {pending: false, error: "Error"});
    case ActionsEnums.TODO.ADD_TODO:
      return Object.assign({}, state, {data: state.data.concat(action.data) });
    default:
      return state;
  }
}
