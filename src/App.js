import React, { useState } from "react";
import Polarchart from "./Component/PolarChart";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState([
    { label: "Familia", value: 0 },
    { label: "Salud", value: 0 },
    { label: "Desarrollo Personal", value: 0 },
    { label: "Carrera Profesional", value: 0 },
    { label: "Amistades", value: 0 },
    { label: "Pareja", value: 0 },
    { label: "Dinero", value: 0 },
    { label: "Diversión", value: 0 },
  ]);

  const handleInputChange = (index, value) => {
    const newData = [...userInput];
    newData[index].value = value;
    setUserInput(newData);
  };

  return (
    <div className="App">
      <Polarchart dataValues={userInput.map((item) => item.value)} />
      <div className="inputs-wrapper">
        {userInput.map((item, index) => (
          <div key={index} className="input-container">
            <label htmlFor={`input-${index}`}>{item.label}</label>
            <input
              id={`input-${index}`}
              className="custom-input"
              type="number"
              value={item.value}
              onChange={(e) => handleInputChange(index, +e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
