import * as actionTypes from './actionTypes';

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