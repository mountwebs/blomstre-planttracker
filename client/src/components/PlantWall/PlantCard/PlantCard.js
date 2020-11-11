import React, { useState, useContext, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import Icon from '@mdi/react';
import { mdiFlower } from '@mdi/js';
import styles from './PlantCard.module.css';
import PlantCalendar from './PlantCalendar/PlantCalendar';

const apiBaseUrl = 'http://localhost:8000/api/plants/';

const today = moment();
const todayString = moment().format('YYYY-MM-DD');

const PlantCard = (props) => {
  const [plant, setPlant] = useState(props.plant);

  return (
    <div className={styles.card}>
      {plant.name}
      <PlantCalendar />
    </div>
  );
};

export default PlantCard;
