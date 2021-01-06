import * as actionTypes from "./actionTypes";

const initialState = {
  plants: [],
  error: false,
  loading: true,
};

const waterPlant = (state, action) => {
  const plantIndex = state.plants.findIndex((el) => el.id === action.plantId);
  const newPlants = state.plants.map((item, index) => {
    if (index !== plantIndex) {
      return { ...item, watered: [...item.watered] };
    }
    return { ...item, watered: [...item.watered, action.date] };
  });
  return {
    ...state,
    plants: newPlants,
  };
};

const addPlant = (state, action) => {
  return {
    ...state,
    plants: [...state.plants, action.plant],
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.WATER_PLANT:
      return waterPlant(state, action);
    case actionTypes.ADD_PLANT:
      return addPlant(state, action);
    case actionTypes.SET_PLANTS:
      return {
        ...state,
        plants: action.plants,
        error: false,
        loading: false,
      };
    case actionTypes.FETCH_PLANTS_FAILED:
      return {
        ...state,
        error: true,
      };
    case actionTypes.WAIT_FOR_DATA:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default reducer;
