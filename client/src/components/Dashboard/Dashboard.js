import React, { useEffect } from 'react';
import MiniCard from './MiniCard/MiniCard';
import styles from './Dashboard.module.css';

import { connect } from 'react-redux';
import * as actions from '../../redux/actions';



const Dashboard = ({plants, onInitPlants, error, loading}) => {

  useEffect(() => {
    onInitPlants()
  }, [onInitPlants])

  const cards = plants.map((plant, i) => {
    return (
      <MiniCard
        plant={plant}
        watered={[...plant.watered]}
        key={plant.id}
      />
    );
  });

  const renderDashboard = () => {
    if (error) return 'There was an error';
    if (loading) return 'Loading...';
    return cards;
    
  }

  return (
    <>
      <div className={styles.dashboard}>{renderDashboard()}</div>
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

const mapStateToProps = state => {
  return {
    plants: state.plants, 
    error: state.error,
    loading: state.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitPlants: () => dispatch(actions.fetchPlants())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
