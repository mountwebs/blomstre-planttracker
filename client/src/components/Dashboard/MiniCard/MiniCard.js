import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Icon from '@mdi/react';
import { mdiFlower } from '@mdi/js';
import styles from './MiniCard.module.css';

import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

const today = moment();
const todayString = moment().format('YYYY-MM-DD');

const MiniCard = (props) => {
  const [daysSince, setDaysSince] = useState(null);
  const [colorState, setColorState] = useState({ color: 'grey' });

  const plant = props.plant;

  const waterPlant = () => {
    const wateredToday = plant.watered.includes(todayString);
    if (wateredToday) return;
    const newPlant = {...plant}
    newPlant.watered = [...newPlant.watered, todayString]
    props.waterPlant(newPlant);
  };

  useEffect(() => {
    const daysSinceWatered = () => {
      if (plant.watered.length === 0) return;
  
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

    daysSinceWatered();
    setWaterState();
  }, [daysSince, plant, props.watered]);

  return (
    <div className={styles.card} onClick={(e) => waterPlant()}>
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

const mapDispatchToProps = (dispatch) => {
  return {
    waterPlant: (plant, date) =>
      dispatch(actions.waterPlant(plant,date)),
  };
};

export default connect(null, mapDispatchToProps)(MiniCard);
