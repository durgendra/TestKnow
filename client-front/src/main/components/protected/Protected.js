import React from 'react';
import { useValue } from '../../context/ContextProvider';
import AccessMessage from './AccessMessage';
import AccessPage from './AccessPage/AccessPage';

const Protected = ({ children }) => {
  const {
    state: { currentUser },
  } = useValue();
  return currentUser ? children : <AccessPage />;
};

export default Protected;
