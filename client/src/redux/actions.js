import * as actionTypes from "./actionTypes";
import axios from "axios";

const apiBaseUrl = "http://localhost:8000/api/plants/";

export const setPlants = (plants) => {
  return {
    type: actionTypes.SET_PLANTS,
    plants,
  };
};

export const fetchPlantsFailed = () => {
  return {
    type: actionTypes.FETCH_PLANTS_FAILED,
  };
};

export const fetchPlants = () => {
  return (dispatch) => {
    axios
      .get(apiBaseUrl)
      .then((response) => {
        dispatch(setPlants(response.data));
      })
      .catch((error) => {
        dispatch(fetchPlantsFailed());
      });
  };
};

export const waterPlant = (plant, date) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.WAIT_FOR_DATA });
    axios
      .put(
        `${apiBaseUrl}${
          plant._id
          //process.env.REACT_APP_DB === "mongo" ? plant._id : plant.id
        }`,
        plant
      )
      .then(() => dispatch(fetchPlants()))
      .catch((error) => {
        dispatch(fetchPlantsFailed());
      });
  };
};

export const addPlant = (plant) => {
  return (dispatch) => {
    console.log(plant);
    dispatch({ type: actionTypes.WAIT_FOR_DATA });
    axios
      .post(`${apiBaseUrl}`, plant)
      .then(() => dispatch(fetchPlants()))
      .catch((error) => {
        dispatch(fetchPlantsFailed());
      });
  };
};
