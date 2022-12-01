import React, { useState } from "react";
import "./App.css";
import ProfileCard from "./ProfileCard";

function App() {
  const [img, setImg] = useState([1, 2, 3]);

  return (
    <div className="App">
      {img.map((i) => {
        return <ProfileCard number={i} key={i} />;
      })}
    </div>
  );
}

export default App;
