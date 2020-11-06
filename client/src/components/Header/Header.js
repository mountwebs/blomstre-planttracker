import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Blomstre</h1>
      <h3>Your personal plant-tracker</h3>
    </div>
  );
};

export default Header;
