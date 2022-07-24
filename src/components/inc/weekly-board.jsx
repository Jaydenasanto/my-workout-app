import React from "react";
import MiniCard from "./mini-card";

function WeeklyBoard() {
  return (
    <div className="weekly-board-container">
      <div className="weekly-grid-layout">
        <div className="col monday">
          <div className="header-box">
            <h1>MONDAY</h1>
          </div>
          <div className="mini-card-holder">
            <MiniCard />
          </div>
        </div>
        <div className="col tuesday">
          <div className="header-box">
            <h1>TUESDAY</h1>
          </div>
          <div className="mini-card-holder">
            <MiniCard />
          </div>
        </div>
        <div className="col wednesday">
          <div className="header-box">
            <h1>WEDNESDAY</h1>
          </div>
          <div className="mini-card-holder">
            <MiniCard />
          </div>
        </div>
        <div className="col thursday">
          <div className="header-box">
            <h1>THURSDAY</h1>
          </div>
          <div className="mini-card-holder">
            <MiniCard />
          </div>
        </div>
        <div className="col friday">
          <div className="header-box">
            <h1>FRIDAY</h1>
          </div>
          <div className="mini-card-holder">
            <MiniCard />
          </div>
        </div>
        <div className="col saturday">
          <div className="header-box">
            <h1>SATURDAY</h1>
          </div>
          <div className="mini-card-holder">
            <MiniCard />
          </div>
        </div>
        <div className="col sunday">
          <div className="header-box">
            <h1>SUNDAY</h1>
          </div>
          <div className="mini-card-holder no-border">
            <MiniCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeeklyBoard;
