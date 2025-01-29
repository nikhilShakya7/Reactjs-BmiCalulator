import React from "react";
import { useState } from "react";
const App = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
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
  return (
    <div>
      <div className="container">
        <form onSubmit={calculate}>
          <label>Weight</label>
          <input
            type="text"
            placeholder="Enter Your Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          ></input>
          <label>Height</label>
          <input
            type="height"
            placeholder="Enter Your Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          ></input>
          <button type="submit">Calculate BMI</button>
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
