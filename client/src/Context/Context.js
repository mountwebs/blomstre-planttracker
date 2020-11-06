import React from 'react';

export const PlantDbContext = React.createContext({});

const PlantDbContextProvider = (props) => {
  return <PlantDbContextProvider>{props}</PlantDbContextProvider>;
};
