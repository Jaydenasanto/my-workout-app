import React from "react";
import ExerciseTab from "./exercise-tab";

function MiniCard() {
  return (
    <div className="mini-card-container">
      <input
        className="program-title"
        type="text"
        placeholder={`Back & Bis`}
        required
      />

      <div className="exercise-tabs">
        <ExerciseTab />
        <ExerciseTab />
        <ExerciseTab />
        <ExerciseTab />
        <ExerciseTab />
        <ExerciseTab />
        <ExerciseTab />
        <ExerciseTab />
        <ExerciseTab />
      </div>

      <div className="duration-tab">
        <span>
          DURATION : <span>{45}</span> MINS
        </span>
      </div>
    </div>
  );
}

export default MiniCard;
