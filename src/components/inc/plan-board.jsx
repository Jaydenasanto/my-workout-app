import React from "react";
import MiniCard from "./mini-card";
import PlusIcon from "../icons/plus-icon";

function PlanBoard() {
  return (
    <div className="plan-it-container">
      <h1>PLAN IT</h1>
      <div className="plan-it-grid">
        <MiniCard />

        <div className="add-program-icon">
          <PlusIcon />
        </div>
      </div>
    </div>
  );
}

export default PlanBoard;
