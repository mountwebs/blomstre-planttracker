import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import AddPlant from './components/AddPlant/AddPlant';
import Header from './components/Header/Header';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <div className="bottom">
        <AddPlant />
      </div>
    </div>
  );
}

export default App;
