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
export const updatePerson = (id, updatedPerson) => API.patch(`/persons/${id}`, updatedPerson);
export const deletePerson = (id) => API.delete(`/persons/${id}`);