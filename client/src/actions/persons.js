import { AUTH } from '../constants/actionTypes';
import * as api from '../api';

// Action Creators
export const getPersons = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPersons();

        dispatch ({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const signIn = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.signIn(formData);
      dispatch({ type: AUTH, data });
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

export const createPerson = (person) => async (dispatch) => {
    try {
        const { data } = await api.createPerson(person);

        dispatch ({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }

}
