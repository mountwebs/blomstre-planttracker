import React from 'react';

const PlantCalendar = () => {
  const getSquares = () => {
    const rows = 7;
    const cols = 40;
    const padding = 2;
    const squares = [];
    const size = 10;
    for (let row = 0, y = padding; row < rows; row++) {
      for (let col = 0, x = padding; col < cols; col++) {
        squares.push(
          <rect
            x={x}
            y={y}
            rx="1"
            ry="1"
            width={size}
            height={size}
            fill="grey"
            style={{ fill: 'grey', stroke: 'black' }}
          ></rect>
        );
        x += size + padding;
      }
      y += size + padding;
    }
    console.log(squares);
    return squares;
  };

  getSquares();

  return (
    <div>
      <svg width="400" height="200">
        {getSquares()}
      </svg>
    </div>
  );
};

export default PlantCalendar;
