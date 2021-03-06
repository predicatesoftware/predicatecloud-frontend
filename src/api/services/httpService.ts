import axios from 'axios';
import { toast } from 'react-toastify';
// import logger from "./logService";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      toast.error('An unexpected error occurrred.');
      //   logger.log(error);
    }

    if (
      expectedError &&
      error.response.data === 'Invalid token. Access denied.'
    ) {
      localStorage.removeItem('token');
    }

    return Promise.reject(error);
  }
);

const setJwt = (jwt: string) => {
  axios.defaults.headers.common['x-auth-token'] = jwt;
};

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
