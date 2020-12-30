import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Icon from '@mdi/react';
import { mdiFlower } from '@mdi/js';
import styles from './MiniCard.module.css';

import { connect } from 'react-redux';
import * as actionTypes from '../../../redux/actions';

// const apiBaseUrl = 'http://localhost:8000/api/plants/';

const today = moment();
const todayString = moment().format('YYYY-MM-DD');

const MiniCard = (props) => {
  const [plant] = useState(props.plantDb[props.index]);
  const [daysSince, setDaysSince] = useState(null);
  const [colorState, setColorState] = useState({ color: 'grey' });

  //const plant =

  // const postPlantToDataBase = () => {
  //   axios.put(`${apiBaseUrl}${plant.id}`, plant);
  // };

  const waterPlant = (id) => {
    const wateredToday = plant.watered.includes(todayString);
    if (wateredToday) {
      return;
    }
    //const newPlant = { ...plant, watered: [...plant.watered] };
    //newPlant.watered.push(todayString);
    //setPlant({ ...newPlant });

    // setTimeout(postPlantToDataBase, 1000);
    props.waterPlant(plant.id, todayString);

    // postPlantToDataBase();
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

const mapStateToProps = (state) => {
  return {
    plantDb: state.plants,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    waterPlant: (plantId, date) =>
      dispatch({ type: actionTypes.WATER_PLANT, plantId, date }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniCard);
