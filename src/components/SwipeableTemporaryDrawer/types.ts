export interface User {
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
  result: User[]
}