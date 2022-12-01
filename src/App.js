import React, { useState } from "react";
import "./App.css";
import ProfileCard from "./ProfileCard";
import Alexa from "./images/alexa.png";
import Cortana from "./images/cortana.png";
import Siri from "./images/siri.png";

function App() {
  const [data, setData] = useState([
    {
      title: "Alexa",
      tag: "@alexa99",
      definition: "I'll help you buy stuff off Amazon",
      img: Alexa,
    },
    {
      title: "Cortana",
      tag: "@cortana12",
      definition: "Personal assiatant by Microsoft",
      img: Cortana,
    },
    {
      title: "Siri",
      tag: "@siri44",
      definition: "I don't get a lot of updates anymore",
      img: Siri,
    },
  ]);

  return (
    <div className="App">
      <div className="pda" style={{ marginBottom: "150px" }}>
        <h1>Personal Digital Assistants</h1>
      </div>
      <div className="profileContainer">
        {data.map((i) => {
          return (
            <div className="profileCardBox" key={i.title}>
              <ProfileCard data={i} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
