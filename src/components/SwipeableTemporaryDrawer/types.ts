import { UserActionType } from "./index.reducer";

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
