import http from './httpService';
import { IKMeansData } from './../models/algorithm';

const apiEndpoint = '/algorithms';

export const sendData = (algorithm: number, data: IKMeansData) => {
  return http.post(apiEndpoint, { algorithm, data });
};

export default { sendData };
