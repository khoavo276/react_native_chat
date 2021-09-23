import {getToken} from '../ultils/Storage';
import axios from 'axios';

export const API_URL = 'https://api.github.com/';

export const request = async ({method, token = null, data, endpoint}) => {
  return axios({
    method: method || 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': token || (await getToken()),
    },
    data: method === 'POST' ? JSON.stringify(data) : undefined,
    url: `${API_URL}${endpoint}`,
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return {errorMessage: err};
    });
};
