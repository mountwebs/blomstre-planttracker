import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import AddPlant from './components/AddPlant/AddPlant';
import Header from './components/Header/Header';
import React, { useEffect, useReducer } from 'react';

const apiBaseUrl = 'http://localhost:8000/api/plants/';

const initialState = {
  loading: true,
  error: '',
  plants: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        plants: action.payload,
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        plants: [],
        error: 'Error...',
      };
    case 'NONE':
      return state;
    default:
      return state;
  }
};

export const PlantDbContext = React.createContext();

function App() {
  const [plantDbState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(apiBaseUrl)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_ERROR' });
      });
    dispatch({ type: 'NONE' });
  }, []);

  return (
    <PlantDbContext.Provider value={{ plantDbState, dispatch }}>
      <div className="App">
        <Header />
        {plantDbState.loading ? 'loading' : <Dashboard />}
        {plantDbState.error ? plantDbState.error : null}
        <div className="bottom">
          <AddPlant />
        </div>
      </div>
    </PlantDbContext.Provider>
  );
}

export default App;
