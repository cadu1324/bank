export interface Users {
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
  result: {
    users: Users[]
  }
}

export type Propertie = {
  setValue: React.Dispatch<React.SetStateAction<number>>;
  value: number;
}
