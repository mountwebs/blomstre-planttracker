import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import AddPlant from './components/AddPlant/AddPlant';
import Header from './components/Header/Header';
import PlantWall from './components/PlantWall/PlantWall';
import React, { useEffect, useReducer } from 'react';

import { connect } from 'react-redux';
import { login } from './redux/actions/auth';

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

const App = (props) => {
  console.log({ props });

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
        <div className="wall">
          {plantDbState.loading ? 'loading' : <PlantWall />}
        </div>
        <div className="bottom">
          <AddPlant />
        </div>
      </div>
    </PlantDbContext.Provider>
  );
};

const mapStateToPros = (state) => {
  console.log('asdbaksbdahksb', state);
  return {
    greatState: state.authReducer.something,
    authState: state.authReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(login()),
});
export default connect(mapStateToPros, mapDispatchToProps)(App);
