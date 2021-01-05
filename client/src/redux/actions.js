import * as actionTypes from './actionTypes';

export const waterPlant = (plantId, date) => {
  return {
    type: actionTypes.WATER_PLANT,
    plantId,
    date,
  };
};
