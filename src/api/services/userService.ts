import http from './httpService';
import { User } from './../models/user';
import { loginWithJwt, logout, getCurrentUser } from './authService';

const apiEndpoint = '/users';

export const register = (user: User) => {
  return http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
    name: user.name,
  });
};

// interface DataObject {
//   [key: string]: string;
// }

// export const save = async (name: string, email: string, id: string) => {
//   console.table([{ name, email, id }]);
//   const { data: jwt } = await http.put(`${apiEndpoint}/${id}`, { email, name });
//   logout();
//   loginWithJwt(jwt);
// };

// export const check = async (data: DataObject) => {
//   return await http.post(`${apiEndpoint}/check`, { ...data });
// };

// export const doesCurrentUserExists = async () => {
//   const user = getCurrentUser();
//   if (!user._id) return false;
//   const { data } = await check({ _id: user._id });
//   return data;
// };

export default {
  register,
  //   save,
  //   check,
  //   doesCurrentUserExists,
};
