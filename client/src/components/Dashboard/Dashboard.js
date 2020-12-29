import React, { useState } from 'react';
import MiniCard from './MiniCard/MiniCard';
import styles from './Dashboard.module.css';

const db = [
  {
    id: 'ab48c374-9724-45a0-a7d3-23c7d6d9ce82',
    name: 'Pilea',
    wateringInterval: 7,
    wateringWindow: 10,
    watered: [],
  },
  {
    id: '1cc1a511-4271-454c-871c-7d6e12ab31ad',
    name: 'Ava',
    wateringInterval: 10,
    wateringWindow: 10,
    watered: [],
  },
  {
    id: '17f2cf71-8bbe-4956-97df-e9e4f716d763',
    name: 'Hattifnattus',
    wateringInterval: 13,
    wateringWindow: 4,
    watered: [],
  },
  {
    id: '1f4702b8-bcf4-4408-a073-089afc919b37',
    name: 'Orkideén',
    wateringInterval: 13,
    wateringWindow: 3,
    watered: [],
  },
  {
    id: '84be40a4-53d8-4555-86a4-2c5d5a5d355a',
    name: 'Orkideto',
    wateringInterval: 9,
    wateringWindow: 3,
    watered: [],
  },
  {
    id: '597e7d50-7a78-4571-ad23-068b4c62b94b',
    name: 'Treet',
    wateringInterval: 6,
    wateringWindow: 3,
    watered: [],
  },
  {
    id: 'b15d48cf-8463-4dac-8a19-743888ef024d',
    name: 'Sammynting',
    wateringInterval: 6,
    wateringWindow: 3,
    watered: [],
  },
  {
    id: 'e4da199a-1786-42a1-af4a-a140ec0d08bb',
    name: 'Eføy',
    wateringInterval: 5,
    wateringWindow: 2,
    watered: [],
  },
  {
    id: '027ff80d-5fc0-419e-83b1-e248c1d889d9',
    name: 'Kina',
    wateringInterval: 13,
    wateringWindow: 5,
    watered: [],
  },
  {
    id: '337e8840-3fd0-4809-9a23-77b66b8af5dc',
    name: 'Kaffeplante',
    wateringInterval: 6,
    wateringWindow: 2,
    watered: [],
  },
];

const Dashboard = () => {
  const [plants] = useState(db);

  const cards = plants.map((plant) => {
    return <MiniCard plant={plant} key={plant.id} />;
  });
  return (
    <>
      <div className={styles.dashboard}>{cards}</div>
      <div className={styles.colorLedger}>
        <div className={`${styles.colorBox} ${styles.grey}`}></div>
        <span>Not initialized</span>
        <div className={`${styles.colorBox} ${styles.blue}`}></div>
        <span>Watered today</span>
        <div className={`${styles.colorBox} ${styles.green}`}></div>
        <span>Happy plant</span>
        <div className={`${styles.colorBox} ${styles.brown}`}></div>
        <span>Time to check your plant</span>
        <div className={`${styles.colorBox} ${styles.red}`}></div>
        <span>Overdue!</span>
      </div>
    </>
  );
};

export default Dashboard;
