// import axios from 'axios';

// const url = 'http://localhost:5000/persons';

// export const fetchPersons = () => axios.get(url);

// export const createPerson = (newPerson) => axios.post(url, newPerson);

import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPersons = () => API.get('/persons');
export const createPerson = (newPerson) => API.post('/persons', newPerson)
export const signIn = (formData) => API.post('/persons/signIn', formData);
