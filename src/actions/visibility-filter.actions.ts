import {ActionsEnums} from "../enums/actions.enum";

export function setVisibilityFilter(filter) {
  return {
    type: ActionsEnums.SET_VISIBILITY_FILTER,
    payload: filter
  }
}
