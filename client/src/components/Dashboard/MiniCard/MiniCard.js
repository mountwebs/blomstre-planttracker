import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import Icon from '@mdi/react';
import { mdiFlower } from '@mdi/js';
import styles from './MiniCard.module.css';

const apiBaseUrl = 'http://localhost:8000/api/plants/';

const today = moment();
const todayString = moment().format('YYYY-MM-DD');

const MiniCard = (props) => {
  const [plant, setPlant] = useState(props.plant);
  const [daysSince, setDaysSince] = useState(null);
  const [colorState, setColorState] = useState({ color: 'grey' });

  const postPlantToDataBase = () => {
    axios.put(`${apiBaseUrl}${plant.id}`, plant);
  };

  const waterPlant = (id) => {
    const wateredToday = plant.watered.includes(todayString);
    if (wateredToday) {
      return;
    }
    const newPlant = { ...plant, watered: [...plant.watered] };
    newPlant.watered.push(todayString);
    setPlant({ ...newPlant });
    // setTimeout(postPlantToDataBase, 1000);
    postPlantToDataBase();
    // console.log(plant);
  };

  const daysSinceWatered = () => {
    if (plant.watered.length === 0) {
      return;
    }
    const moments = plant.watered.map((d) => moment(d));
    const maxDate = moment.max(moments);
    const diff = today.diff(maxDate, 'days');
    setDaysSince(diff);
  };

  const setWaterState = () => {
    if (daysSince === null) {
      setColorState({ color: 'grey' });
    } else if (daysSince === 0) {
      setColorState({ color: 'DodgerBlue' });
    } else if (daysSince < plant.wateringInterval) {
      setColorState({ color: 'green' });
    } else if (daysSince <= plant.wateringInterval + plant.wateringWindow - 1) {
      setColorState({ color: 'sienna' });
    } else {
      setColorState({ color: 'red' });
    }
  };

  useEffect(() => {
    postPlantToDataBase();
  }, [plant]);

  useEffect(() => {
    daysSinceWatered();
    setWaterState();
  }, [daysSince, plant]);

  return (
    <div className={styles.card} onClick={(e) => waterPlant(plant.id)}>
      <p className={styles.daysSince}>{daysSince}</p>
      <Icon
        className={styles.icon}
        path={mdiFlower}
        title="User Profile"
        size={2.5}
        color={colorState.color}
      />
      <div className={styles.nameContainer}>
        <p className={styles.name}>{plant.name}</p>
      </div>
    </div>
  );
};

export default MiniCard;
