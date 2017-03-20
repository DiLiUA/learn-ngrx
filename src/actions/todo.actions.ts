import { ActionsEnums } from '../enums/actions.enum'

export function getTodos() {
  return {
    type: ActionsEnums.TODO.GET_TODOS
  }
}

export function addTodo(title) {
  return {
    type: ActionsEnums.TODO.ADD_TODO,
    payload: {
      title
    }
  }
}

export function toggleDone(id) {
  return {
    type: ActionsEnums.TODO.TOGGLE_DONE,
    payload: {
      id
    },
  }
}
