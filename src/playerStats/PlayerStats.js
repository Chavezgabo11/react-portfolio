import React from "react";
import "../styles/playerStats.css";

const PlayerStats = () => {
  return (
    <div id="playerStats">
      <h1>GABRIEL CHAVEZ LEVEL 11</h1>
      <div id="playerStats__lines">
        <span id="playerStats__lines__thick"></span>
        <span id="playerStats__lines__thin"></span>
      </div>
      <h2>Front-End Developer</h2>
      <h2>UI/UX Designer</h2>
    </div>
  );
};

export default PlayerStats;
