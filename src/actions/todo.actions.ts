import { ActionsEnums } from '../enums/actions.enum'

export function getTodos() {
  return {
    type: ActionsEnums.TODO.GET_TODOS
  }
}

export function addTodo(data) {
  return {
    type: ActionsEnums.TODO.ADD_TODO,
    data
  }
}
