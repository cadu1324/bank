import axios from 'axios';
import { Reducer, useEffect, useReducer } from 'react';
import reducer from './index.reducer';

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
interface UserResponse {
  result: User[];
}

type Actions = {
  type: UserActionType;
  payload: User
}
interface State {
  show: boolean;
  user: User;
}

enum UserActionType {
  set = 'SET_USER'
}

const useDataResponse = (event: number) => {
  const [state, dispatch] = useReducer<Reducer<State, Actions>>(reducer, {
    show: false,
    user: {
      bank: {}
    },
  } as State);

  const getData = async () => {
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get<UserResponse>(
      `https://api-q2-test.herokuapp.com/data?id=${event}`,
      { headers },
    );
    const result = response.data.result[0];
    dispatch({ type:UserActionType.set, payload:result });
  };

  useEffect(() => {
    getData();
  }, [event]);

  return state;
};

export default useDataResponse;
