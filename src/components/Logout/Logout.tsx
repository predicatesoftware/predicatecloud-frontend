import { useEffect } from 'react';
import authService from '../../api/services/authService';

export default () => {
  useEffect(() => {
    authService.logout();
    window.location.href = '/';
  });

  return null;
};
