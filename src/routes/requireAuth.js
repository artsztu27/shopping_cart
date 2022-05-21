import React from 'react';
import { UseAppContext } from 'contexts/contexts';
import {  useLocation, Navigate } from 'react-router-dom';

export default function RequireAuth({ children }) {
  const { apiValue:{ user } } = UseAppContext();
  let location = useLocation();
  console.log('user = ',user)
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}