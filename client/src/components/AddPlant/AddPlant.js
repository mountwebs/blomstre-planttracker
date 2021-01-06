import React, { useState } from "react";
import styles from "./AddPlant.module.css";

import { connect } from "react-redux";
import * as actions from "../../redux/actions";

const AddTodoForm = (props) => {
  const [plantName, setPlantName] = useState("");
  const [wateringInterval, setWateringInterval] = useState("");
  const [wateringWindow, setWateringWindow] = useState("");

  const onPlantNameChange = (e) => {
    const { value } = e.target;
    setPlantName(value);
  };

  const onWateringIntervalChange = (e) => {
    const { value } = e.target;
    setWateringInterval(value);
  };

  const onWateringWindowChange = (e) => {
    const { value } = e.target;
    setWateringWindow(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newPlant = {
      name: plantName,
      wateringInterval: Number(wateringInterval),
      wateringWindow: Number(wateringWindow),
      watered: [],
    };
    props.addPlant(newPlant);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.textContainer}>
        <p>Add Pant:</p>
      </div>
      <form className={styles.addPlant} onSubmit={onSubmit}>
        <input
          type="text"
          value={plantName}
          name="plantName"
          placeholder="Plant Name"
          onChange={onPlantNameChange}
        />
        <input
          type="text"
          value={wateringInterval}
          name="wateringInterval"
          placeholder="Watering interval"
          onChange={onWateringIntervalChange}
        />
        <input
          type="text"
          value={wateringWindow}
          name="wateringWindow"
          placeholder="Water window"
          onChange={onWateringWindowChange}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPlant: (plant) => dispatch(actions.addPlant(plant)),
  };
};

export default connect(null, mapDispatchToProps)(AddTodoForm);
