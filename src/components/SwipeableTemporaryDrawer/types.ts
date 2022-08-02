export type User = {
  id: number;
  name: string;
  document: string;
  bank: {
    bankName: string;
    code: number;
    agency: number;
    account: string;
  };
}
export interface UserResponse {
  result: User[];
}

export type Actions = {
  type: UserActionType;
  payload: User
}
export interface State {
  show: boolean;
  user: User;
}
export enum UserActionType {
  set = 'SET_USER'
}
