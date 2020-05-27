import http from './httpService';
import { User } from './../models/user';

const apiEndpoint = '/users';

export const register = (user: User) => {
  return http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
    name: user.name,
  });
};

export default {
  register,
};
