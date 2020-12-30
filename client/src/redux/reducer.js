import * as actionTypes from './actions';

const initialState = {
  plants: [
    {
      id: 'ab48c374-9724-45a0-a7d3-23c7d6d9ce82',
      name: 'Pilea',
      wateringInterval: 7,
      wateringWindow: 10,
      watered: ['2020-12-10'],
    },
    {
      id: '1cc1a511-4271-454c-871c-7d6e12ab31ad',
      name: 'Ava',
      wateringInterval: 10,
      wateringWindow: 10,
      watered: ['2020-11-02', '2020-12-26'],
    },
    {
      id: '17f2cf71-8bbe-4956-97df-e9e4f716d763',
      name: 'Hattifnattus',
      wateringInterval: 13,
      wateringWindow: 4,
      watered: ['2020-11-06', '2020-12-10'],
    },
    {
      id: '1f4702b8-bcf4-4408-a073-089afc919b37',
      name: 'Orkideén',
      wateringInterval: 13,
      wateringWindow: 3,
      watered: ['2020-11-05', '2020-12-20'],
    },
    {
      id: '84be40a4-53d8-4555-86a4-2c5d5a5d355a',
      name: 'Orkideto',
      wateringInterval: 7,
      wateringWindow: 3,
      watered: ['2020-10-30', '2020-12-20'],
    },
    {
      id: '597e7d50-7a78-4571-ad23-068b4c62b94b',
      name: 'Treet',
      wateringInterval: 6,
      wateringWindow: 3,
      watered: ['2020-10-31', '2020-12-19'],
    },
    {
      id: 'b15d48cf-8463-4dac-8a19-743888ef024d',
      name: 'Sammynting',
      wateringInterval: 6,
      wateringWindow: 3,
      watered: ['2020-10-25', '2020-12-20'],
    },
    {
      id: 'e4da199a-1786-42a1-af4a-a140ec0d08bb',
      name: 'Eføy',
      wateringInterval: 5,
      wateringWindow: 2,
      watered: ['2020-11-05', '2020-12-10'],
    },
    {
      id: '027ff80d-5fc0-419e-83b1-e248c1d889d9',
      name: 'Kina',
      wateringInterval: 13,
      wateringWindow: 5,
      watered: ['2020-11-01', '2020-12-20'],
    },
    {
      id: '337e8840-3fd0-4809-9a23-77b66b8af5dc',
      name: 'Kaffeplante',
      wateringInterval: 6,
      wateringWindow: 2,
      watered: ['2020-11-06', '2020-12-20'],
    },
    {
      id: '00236617-e43f-45c3-8908-047d849c91d4',
      name: 'Kattegress',
      wateringInterval: 6,
      wateringWindow: 2,
      watered: ['2020-11-06', '2020-12-26'],
    },
    {
      id: '40834ae5-a359-43d8-9307-c0708c29eea8',
      name: 'Kronblad',
      wateringInterval: 3,
      wateringWindow: 1,
      watered: [],
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.WATER_PLANT:
      const newPlants = [...state.plants];
      const plantIndex = newPlants.findIndex((el) => el.id === action.plantId);
      newPlants[plantIndex].watered.push(action.date);
      return {
        ...state,
        [state.plants]: newPlants,
      };
    default:
      return state;
  }
};

export default reducer;