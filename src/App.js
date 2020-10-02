import React, { Fragment, useState } from "react";
import "./App.css";

function App() {
  const [string1, setString1] = useState("");
  const [string2, setString2] = useState("");
  const [result, setResult] = useState("->Result Here<-");

  return (
    <Fragment>
      <div className="App">
        <h1>Version #</h1>
        <form>
          <label>String 1 </label>
          <input
            placeholder="Enter here"
            type="text"
            onChange={(e) => setString1(e.target.value)}
          ></input>
          <br />
          <label>String 2 </label>
          <input
            placeholder="Enter here"
            type="text"
            onChange={(e) => setString2(e.target.value)}
          ></input>
          <button type="button">Check!</button>
        </form>
      </div>
      <div className="result">{result}</div>
    </Fragment>
  );
}

export default App;
