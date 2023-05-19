import React from "react";
import Home from "./day3/Home";
import UserCard from "./day3/UserCard";
import NumberGenerator from "./day6/NumberGenerator";
import WorldPopulation from "./day6/WorldPopulation";
import MouseEvent from "./day11/MouseEvent";
import ToDo from "./component/ToDo";
function App() {

  const myStyle = {
    backgroundColor:'#bfb4a8'
  }
  return (
    <div style={myStyle}>
      {/* <Home />
      <UserCard />
      <NumberGenerator/> */}
      {/* <WorldPopulation/> */}
      {/* <MouseEvent/> */}
      <ToDo/>
    </div>
  );
}

export default App;
