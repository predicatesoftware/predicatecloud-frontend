import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import authService from '../../api/services/authService';

export default ({ isAllowed = authService.isLoggedIn(), ...props }: any) =>
  isAllowed ? <Route {...props} /> : <Redirect to="/login" />;
