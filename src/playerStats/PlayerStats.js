import React from "react";
import "../styles/playerStats.css";
import CountUp from '../TextAnimations/CountUp/CountUp'
import DecryptedText from '../TextAnimations/DecryptedText/DecryptedText'

const PlayerStats = () => {
  return (
    <div id="playerStats">
      <h1>GABRIEL CHAVEZ LEVEL  
        <CountUp 
          from={0}
          to={22}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />
      </h1>
      
      <div id="playerStats__lines">
        <span id="playerStats__lines__thick"></span>
        <span id="playerStats__lines__thin"></span>
      </div>
      <h2><DecryptedText
      text="Front-End Developer"
      speed={100}
      maxIterations={20}
      characters="ABCD1234!?"
      className="revealed"
      parentClassName="all-letters"
      encryptedClassName="encrypted"
      animateOn="view"
      />
      </h2>
      <h2><DecryptedText
      text="UI/UX Designer"
      speed={100}
      maxIterations={20}
      characters="ABCD1234!?"
      className="revealed"
      parentClassName="all-letters"
      encryptedClassName="encrypted"
      animateOn="view"
      /></h2>
    </div>
  );
};



export default PlayerStats;
