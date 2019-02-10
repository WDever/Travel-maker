import axios from 'axios';

const api = `https://travvel-maker-api.herokuapp.com/`

export const postLOGIN = (id, pw) => {
  const link = `${api}/auth/local`;
  const headers = {
    'Content-Type': 'application/json',
  };

  const body = {
    'id': id,
    'password': pw
  };

  return axios.post(link, body, { headers });
};

export const postREGISTER = ({ id, password, name, phone, email }) => {
  const link = `${api}/register`;

  const headers = {
    'Content-Type': 'application/json',
  }

  const body = {
    'id': id,
    'password': password,
    'name': name,
    'phone': phone,
    'email': email
  }

  return axios.post(link, body, headers);
}