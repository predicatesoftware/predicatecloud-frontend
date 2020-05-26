import http from './httpService';
import jwtDecode from 'jwt-decode';
import { ApiUser } from './../models/user';

const apiEndpoint = '/auth';
const tokenKey = 'token';

export const getJwt = () => localStorage.getItem(tokenKey) || '';

http.setJwt(getJwt());

export const login = async (email: string, password: string) => {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  loginWithJwt(jwt);
};

export const loginWithJwt = (jwt: string) => {
  localStorage.setItem(tokenKey, jwt);
  http.setJwt(jwt);
};

export const logout = () => localStorage.removeItem(tokenKey);

export const getCurrentUser = (): ApiUser | null => {
  try {
    const jwt = getJwt();
    return jwtDecode<ApiUser>(jwt);
  } catch (ex) {
    return null;
  }
};

export const isLoggedIn = (): boolean => {
  return getCurrentUser() !== null;
};

export default {
  login,
  logout,
  getCurrentUser,
  isLoggedIn,
  loginWithJwt,
  getJwt,
};
