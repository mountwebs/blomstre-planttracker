export const WATER_PLANT = 'WATER_PLANT';

export const waterPlant = (plantId, date) => {
  return {
    type: WATER_PLANT,
    plantId,
    date,
  };
};
