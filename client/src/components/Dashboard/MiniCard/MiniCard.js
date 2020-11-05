import React from 'react';

const MiniCard = ({ plant, waterPlant }) => {
  return <div onClick={(e) => waterPlant(plant.id)}> {plant.name}</div>;
};

export default MiniCard;
