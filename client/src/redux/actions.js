import * as actionTypes from './actionTypes';
import axios from 'axios';

const apiBaseUrl = 'http://localhost:8000/api/plants/';

export const addPlant = (plant) => {
  return {
    type: actionTypes.ADD_PLANT,
    plant,
  }
}

export const setPlants = (plants) => {
  return {
    type: actionTypes.SET_PLANTS,
    plants,
  }
}

export const fetchPlantsFailed = () => { 
  return {
    type: actionTypes.FETCH_PLANTS_FAILED
  }
}

export const fetchPlants = () => {
  return dispatch => {
    axios.get(apiBaseUrl)
      .then(response => {
        dispatch(setPlants(response.data))
      })
      .catch(error => {
        dispatch(fetchPlantsFailed())
      })

  }
}

export const waterPlant = (plant, date) => {
  return dispatch => {
    dispatch({type: actionTypes.WAIT_FOR_DATA})
    axios.put(`${apiBaseUrl}${plant.id}`, plant)
      .then(response => console.log(response.status))
      .then(fetchPlants())
  }
};
