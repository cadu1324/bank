type User = {
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

export type UserState = {
  data: User;
}

export type Actions = {
  result: User
}
