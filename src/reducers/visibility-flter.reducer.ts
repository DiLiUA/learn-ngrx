import {ActionsEnums} from "../enums/actions.enum";

export const visibilityFilter = (state = "SHOW_ALL", action ) => {
  switch( action.type ) {
    case ActionsEnums.SET_VISIBILITY_FILTER:
      return action.payload;
    default:
      return state;
  }
};
