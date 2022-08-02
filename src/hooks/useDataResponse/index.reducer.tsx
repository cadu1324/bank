import { Actions, User } from "../../components/SwipeableTemporaryDrawer/types";

export interface State {
  show: boolean;
  user: User;
}
export enum UserActionType {
  set = 'SET_USER'
}

const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case UserActionType.set:
      return {
        show: true,
        user: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
