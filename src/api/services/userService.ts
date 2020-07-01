import http from './httpService';
import { User } from './../models/user';
import { logout, loginWithJwt, getCurrentUser } from './authService';

const apiEndpoint = '/users';

export const register = (user: User) => {
  return http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
    name: user.name,
  });
};

export const save = async (name: string, email: string) => {
  const user = getCurrentUser();
  if (user) {
    const { data: jwt } = await http.put(`${apiEndpoint}/${user._id}`, {
      email,
      name,
    });
    if (jwt) {
      logout();
      loginWithJwt(jwt);
    }
  }
};

export default {
  register,
  save,
};
