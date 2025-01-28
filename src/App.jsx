import React from "react";
import { useState } from "react";
const App = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState(" ");
  const [message, setMessage] = useState(" ");
  return (
    <div>
      <div className="container">
        <form>
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
