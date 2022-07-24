import React, { useState } from "react";

function ExerciseTab({ onClick }) {
  // opening and closing notes within the exercise tab

  const [note, setNote] = useState(false);
  const [exerciseTabSize, setExerciseTabSize] = useState(false);

  // adds a class to .exercise-notes - allowing it to be seen
  const openNotes = note ? "open-notes" : "";
  // adds a class to .exercise-tab - allowing it to resize
  const reSizeTab = note ? "tab-resize" : "";

  const showNotes = () => {
    console.log("clicked");

    if (note === false) {
      setNote(true);
      setExerciseTabSize(true);
      console.log("notes closed");
      console.log(openNotes);
    } else {
      setNote(false);
      setExerciseTabSize(false);
      console.log("notes opened");
      console.log(openNotes);
    }
  };

  return (
    <div className={`exercise-tab ${reSizeTab}`}>
      <div className="exercise-tab-inputs">
        <input
          className="exercise-title"
          type="text"
          required
          placeholder={`Lat Pull-downs`}
        />
        <span className="sets-tab">
          S :
          <input
            className="sets"
            type="text"
            required
            placeholder={`4`}
            maxLength="2"
            size="3"
          />
        </span>
        <span className="reps-tab">
          R :
          <input
            className="reps"
            type="text"
            required
            placeholder={`12`}
            maxLength="2"
            size="3"
          />
        </span>

        <div className="drop-down-arrow">
          <svg
            width="17"
            height="13"
            viewBox="0 0 17 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={(_e) => {
              showNotes();
            }}
          >
            <path
              d="M8.57789 0.0462859L16.7466 12.0862L0.29228 12.0061L8.57789 0.0462859Z"
              fill="#A3A1A1"
            />
            <path
              d="M0.768008 11.7584L8.57574 0.488394L16.2733 11.8339L0.768008 11.7584Z"
              stroke="black"
              stroke-opacity="0.5"
              stroke-width="0.5"
            />
          </svg>
        </div>
      </div>

      <div className={`exercise-note ${openNotes}`}>
        <input className="note" type="text" placeholder="Notes." />

        <div className="delete-exercise">
          <svg
            className="delete-icon"
            width="24"
            height="21"
            viewBox="0 0 24 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
          >
            <path
              d="M24 15.75C24 17.1979 22.8042 18.375 21.3333 18.375H8.55417C7.84583 18.375 7.16667 18.1002 6.66667 17.608L0.3905 11.427C0.140458 11.1809 0 10.8486 0 10.5C0 10.1514 0.1405 9.81914 0.3905 9.57305L6.66667 3.39404C7.16667 2.90145 7.84583 2.625 8.55417 2.625H21.3333C22.8042 2.625 24 3.8001 24 5.25V15.75ZM11.2917 8.53535L13.2542 10.5L11.2917 12.4277C10.9042 12.8133 10.9042 13.4367 11.2917 13.7854C11.6833 14.2037 12.3167 14.2037 12.6708 13.7854L14.6667 11.8904L16.625 13.7854C17.0167 14.2037 17.65 14.2037 18.0042 13.7854C18.4292 13.4367 18.4292 12.8133 18.0042 12.4277L16.0792 10.5L18.0042 8.53535C18.4292 8.18672 18.4292 7.56328 18.0042 7.17773C17.65 6.79629 17.0167 6.79629 16.625 7.17773L14.6667 9.10957L12.6708 7.17773C12.3167 6.79629 11.6833 6.79629 11.2917 7.17773C10.9042 7.56328 10.9042 8.18672 11.2917 8.53535Z"
              fill="#F72626"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ExerciseTab;
