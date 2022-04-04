import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
  const [showP, setShowP] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const togglePHandler = useCallback(() => {
    if(allowToggle) {
      setShowP((prevState) => !prevState);
    };

  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemOutput show={showP}/>
      <Button onClick={allowToggleHandler}>Allow toggle</Button>
      <Button onClick={togglePHandler}>Show paragraph</Button>
    </div>
  );
}

export default App;
