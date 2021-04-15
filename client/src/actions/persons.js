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
      dispatch({ type: 'AUTH', data });
      router.push('/Floorplan');
    } catch (error) {
      console.log(error);
    }
  };

export const createPerson = (person, router) => async (dispatch) => {
    try {
        const { data } = await api.createPerson(person);
        // dispatch ({ type: 'CREATE', payload: data });
        dispatch({ type: 'AUTH', data });
        router.push('/Floorplan');
        
    } catch (error) {
        console.log(error);
    }

}

export const updatePerson = (id, person) => async (dispatch) => {
    try {
      const { data } = await api.updatePerson(id, person);
  
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const deletePerson = (id) => async (dispatch) => {
    try {
      await api.deletePerson(id);
  
      dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };
