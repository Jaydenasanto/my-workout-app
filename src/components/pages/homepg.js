import React from "react";
import { ReactDOM } from "react";
import WeeklyBoard from "../inc/weekly-board";
import Header from "../inc/header";
import PlanBoard from "../inc/plan-board";
import Card from "../inc/card";

function HomePg() {
  return (
    <div className="homepage-container">
      <Header />
      <WeeklyBoard />
      <PlanBoard />
      <Card />
    </div>
  );
}

export default HomePg;
