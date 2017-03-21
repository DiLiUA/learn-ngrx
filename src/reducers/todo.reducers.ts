import { ActionsEnums } from '../enums/actions.enum'

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
    case ActionsEnums.TODO.ADD_TODO_SUCCESS:
      return Object.assign({}, state, {data: state.data.concat([action.payload])});
    case ActionsEnums.TODO.ADD_TODO_ERROR:
      return Object.assign({}, state, {pending: false, error: "Error"});
    case ActionsEnums.TODO.TOGGLE_DONE_SUCCESS:
      let index = state.data.findIndex((todo) => todo.id === action.payload);
      return Object.assign({}, state,
        {data: Object.assign([], state.data,
          state.data[index] = Object.assign({}, state.data[index], {completed: !state.data[index].completed}))});
    case ActionsEnums.TODO.TOGGLE_DONE_ERROR:
      return Object.assign({}, state, {pending: false, error: "Error"});

    default:
      return state;
  }
}
