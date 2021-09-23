import {request} from './ApiConfig';

export const getUsers = () => {
  return request({endpoint: 'users'});
};
