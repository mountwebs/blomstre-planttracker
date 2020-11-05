import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import React, { useEffect, useReducer } from 'react';

const apiBaseUrl = 'http://localhost:8000/api/plants/';

const initialState = {
  loading: true,
  error: '',
  plants: {},
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
        plants: {},
        error: 'Error...',
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(apiBaseUrl)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_ERROR' });
      });
  }, []);

  return (
    <div className="App">
      <Dashboard />
      {state.loading ? 'loading' : JSON.stringify(state.plants)}
      {state.error ? state.error : null}
    </div>
  );
}

export default App;
