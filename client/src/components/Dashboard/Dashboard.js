import React, { useState, useEffect } from 'react';
import MiniCard from './MiniCard/MiniCard';
import styles from './Dashboard.module.css';

import { connect } from 'react-redux';

const Dashboard = ({plants}) => {
  const cards = plants.map((plant, i) => {
    return (
      <MiniCard
        plant={plant}
        watered={[...plant.watered]}
        key={plant.id}
      />
    );
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

const mapStateToProps = (state) => {
  return {
    plants: state.plants,
  };
};

export default connect(mapStateToProps)(Dashboard);
