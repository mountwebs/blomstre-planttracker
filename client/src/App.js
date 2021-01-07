import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import AddPlant from "./components/AddPlant/AddPlant";
import Header from "./components/Header/Header";
import React from "react";
import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";

import { connect } from "react-redux";

const override = css`
  display: block;
  margin: 0 auto;
`;

function App({ loading }) {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <BarLoader
        color="white"
        loading={loading}
        css={override}
        height="4px"
        width="100%"
      />
      <div className="bottom">
        <AddPlant />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(App);
