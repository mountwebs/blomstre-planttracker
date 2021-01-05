import * as actionTypes from './actionTypes';
import axios from 'axios';

const apiBaseUrl = 'http://localhost:8000/api/plants/';

export const waterPlant = (plantId, date) => {
  return {
    type: actionTypes.WATER_PLANT,
    plantId,
    date,
  };
};

export const addPlant = (plant) => {
  return {
    type: actionTypes.ADD_PLANT,
    plant,
  }
}

export const setPlants = (plants) => {
  return {
    type: actionTypes.SET_PLANTS,
    plants
  }
}

export const fetchPlantsFailed = () => { 
  return {
    type: actionTypes.FETCH_PLANTS_FAILED
  }
}

export const initPlants = () => {
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