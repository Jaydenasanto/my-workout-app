import React, { useState } from "react";
import ExerciseTab from "./exercise-tab";
import PlusIcon from "../icons/plus-icon";

function Card() {
  const [exerciseTabs, setExerciseTabs] = useState([
    { key: 1, id: 1, card: 1 },
  ]);

  let tabArr = exerciseTabs;

  // adding a exercise tab with a specific id and the related card
  const addingExerciseTab = () => {
    console.log(tabArr[tabArr.length - 1].id + 1);
    const tabKey = tabArr[tabArr.length - 1].id + 1;
    const tabId = tabArr[tabArr.length - 1].id + 1;

    setExerciseTabs((exerciseTabs) => [
      ...exerciseTabs,
      { key: tabKey, id: tabId, card: 1 },
    ]);

    console.log();
  };

  const deleteTab = (tab) => {
    // let newArr = [];

    exerciseTabs.map((t) => {
      if (tab.id === t.id) {
        console.log(`it's a match`);
        console.log(t.id);
        console.log(tab.id);

        // const index = exerciseTabs.findIndex()

        console.log(exerciseTabs.filter((tabs) => tabs.id != tab.id));

        const newArr = exerciseTabs.filter((tabs) => tabs.id != tab.id);

        setExerciseTabs(newArr);
        console.log(exerciseTabs);
      } else {
        console.log(`not a match`);
      }
    });
  };

  return (
    <div className="card-container">
      <input
        className="program-title"
        type="text"
        placeholder={`Back & Bis`}
        required
      />

      <div className="week-day-tabs">
        <div className="day-tab monday">
          <span>MON</span>
        </div>
        <div className="day-tab tuesday">
          <span>TUES</span>
        </div>
        <div className="day-tab wednesday">
          <span>WED</span>
        </div>
        <div className="day-tab thursday">
          <span>THURS</span>
        </div>
        <div className="day-tab friday">
          <span>FRI</span>
        </div>
        <div className="day-tab saturday">
          <span>SAT</span>
        </div>
        <div className="day-tab sunday">
          <span>SUN</span>
        </div>
      </div>

      <div className="exercise-tabs">
        {exerciseTabs.map((tab) => (
          <ExerciseTab
            id={tab.id}
            card={tab.card}
            onClick={(_e) => {
              deleteTab(tab);
            }}
          />
        ))}
      </div>

      <div
        className="add-exercise"
        onClick={(_e) => {
          addingExerciseTab();
        }}
      >
        <PlusIcon />
      </div>

      <button className="confirm-btn">CONFIRM</button>

      <div className="duration-tab">
        <span>
          DURATION : <span>{45}</span> MINS
        </span>
      </div>
    </div>
  );
}

export default Card;
