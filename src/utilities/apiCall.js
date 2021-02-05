import axios from 'axios';

export const apiGet = (link) => {
  return axios.get(link).then(response => response.data);
};
