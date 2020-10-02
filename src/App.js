import React, { Fragment, useState } from "react";
import stringChecker from "./stringChecker";
import "./App.css";

function App() {
  const [string1, setString1] = useState("");
  const [string2, setString2] = useState("");
  const [result, setResult] = useState("->Result Here<-");

  const handleSubmit = (e) => {
    e.preventDefault();
    let res = stringChecker(string1, string2);
    setResult(res);
  };
  return (
    <Fragment>
      <div className="App">
        <h1>Version #</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
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
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Check!
          </button>
        </form>
      </div>
      <div className="result">{result}</div>
    </Fragment>
  );
}

export default App;
