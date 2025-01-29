import React from "react";
import "./App.css";

import { useState } from "react";
const App = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBMI] = useState(" ");
  const [message, setMessage] = useState(" ");

  let calculate = (e) => {
    e.preventDefault();
    if (weight <= 0 || height <= 0) {
      alert("Enter valid height and weight");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBMI(bmi.toFixed(1));
      if (bmi < 25) {
        setMessage("You are under weight");
      } else if (bmi >= 25 && bmi <= 30) {
        setMessage("Your weight is normal");
      } else {
        setMessage("You are overweight");
      }
    }
  };
  const reset = () => {
    setBMI("");
    setHeight("");
    setWeight("");
    setMessage("");
  };

  return (
    <div>
      <div className="container">
        <h2>BMI CALCULATOR</h2>
        <form onSubmit={calculate}>
          <label>Weight</label>
          <input
            type="text"
            placeholder="Enter Your Weight (in lbs)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          ></input>
          <label>Height</label>
          <input
            type="height"
            placeholder="Enter Your Height (in inches)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          ></input>
          <button type="submit">Calculate BMI</button>
          <button type="button" className="reset" onClick={reset}>
            Reset
          </button>

          <div className="">
            <h3>Your BMI is {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
