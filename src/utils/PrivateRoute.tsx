import React from 'react';
import { Navigate } from 'react-router-dom';
import Authenticated from './auth';

const PrivateRoute: React.FC< { children?: React.ReactNode } > = ({
  children,
}) => {
  
  if(Authenticated()){ 
    return <>{children}</> 
  }
  return (
    <Navigate to={{ pathname: '/login' }} />
  );
};

export default PrivateRoute;
