import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "let's hit the beach!",
    icon: "sun",
  },
  winter: {
    text: "Bur it is cool",
    icon: "snowflake",
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  //   console.log(season);
  //   const text = season === "winter" ? "bruh,its is chily" : "woahahah";
  //   const icon = season === "winter" ? "snowflake" : "sun";
  const { text, icon } = seasonConfig[season];
  return (
    <div>
      <div className={`season-display ${season}`}>
        {props.loading}
        <i className={`massive ${icon} icon icon-left`}></i>
        <div className="position">
          <h1>{text}</h1>
          <h2> {props.lat}</h2>
          <h2> {props.long}</h2>
          <h2> {props.errorMessage}</h2>
        </div>
        <i className={`massive ${icon} icon icon-right`}></i>
      </div>
    </div>
  );
};

export default SeasonDisplay;
