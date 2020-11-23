import React, { useState, useContext } from 'react';
import PlantCard from './PlantCard/PlantCard';
import styles from './PlantWall.moule.css';

import { PlantDbContext } from '../../App';

const PlantWall = () => {
  const { plantDbState } = useContext(PlantDbContext);
  const [plants] = useState(plantDbState.plants);

  const cards = plants.map((plant) => {
    return <PlantCard plant={plant} key={plant.id} />;
  });

  return <>{cards}</>;
};

export default PlantWall;
