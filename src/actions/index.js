import axios from 'axios';

import { ADDNEW_TRIP, GETALL_TRIP, UPDATE_TRIP, DELETE_TRIP } from './type';

const API_URL = 'http://localhost:3001';

export const addNewTrip = (name) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/trips`, { name });

        dispatch({ type: ADDNEW_TRIP , payload: res.name });
    } catch (error) {
        console.log('Error while calling addNewTrip API ', error.message);
    }
}

export const getAllTrips = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/trips`);

        dispatch({ type: GETALL_TRIP , payload: res.name });
    } catch (error) {
        console.log('Error while calling getAllTrips API ', error.message);
    }
}
export const updateTrip = (id, name) => async (dispatch) => {
    try {
        const res = await axios.put(`${API_URL}/trips/${id}`, { name });

        dispatch({ type: UPDATE_TRIP , payload: res.name });
    } catch (error) {
        console.log('Error while calling updateTrip API ', error.message);
    }
}

export const deleteTrip = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${API_URL}/trips/${id}`);

        dispatch({ type: DELETE_TRIP , payload: res.name });
    } catch (error) {
        console.log('Error while calling deleteTrip API ', error.message);
    }
}
