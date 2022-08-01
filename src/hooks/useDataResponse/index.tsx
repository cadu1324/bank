import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';

const useDataResponse = (event: number) => {



  // const reducer = (state: UserState, action: Actions) => {
  //   switch(action){
  //     default :
  //     return {
  //       data: state.data
  //     }
  //   }
  // }



  // const getData = async () => {
  //   const token = localStorage.getItem('token');
  //   const headers = {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${token}`,
  //   };
  //   const response = await axios.get<UserResponse>(
  //     `https://api-q2-test.herokuapp.com/data?id=${event}`,
  //     { headers },
  //   );
  //   const [result] = response.data.result;

  //   setShow(true);
  // };

  // useEffect(() => {
  //   getData();
  // }, [event]);

  // const current = new Date();
  // const date = `${current.getDate()}/${
  //   current.getMonth() + 1
  // }/${current.getFullYear()}`;
};

export default useDataResponse;
