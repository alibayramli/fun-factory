import React from "react";
//import ReactDOM from "react-dom";
import MemeGenerator from "./projectComponents/MemeGenerator";
import "./App.css";
import "./projectComponents/style.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Fun Factory....</h1>
          Scroll down
        </div>
      </header>
      <MemeGenerator />
    </div>
  );
}

export default App;
