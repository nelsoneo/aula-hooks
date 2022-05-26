import React, { useState, useEffect } from "react";
import "./ifoodcounter.css";

export default function IfoodCounter() {
  const [value, setValue] = useState(1);

  const [buttonMinuxStyle, setButtonMinusStyle] = useState(
    "counter-button-minus-active"
  );

  useEffect(() => {
    document.getElementById("moeda").innerHTML = 2 * value
  },[value]);

  function plusValue() {
    setValue(value + 1);
    setButtonMinusStyle("counter-button-minus-active");
  }

  function minusValue() {
    if (value > 0) {
      setValue(value - 1);
    }
    if (value <= 1) {
      setButtonMinusStyle("counter-button-minus-disabled");
    }
  }

  return (
    <div className="counter-wrapper">
      <button className={buttonMinuxStyle} onClick={minusValue}>
        -
      </button>
      <p>{value}</p>
      <button className="counter-button-plus-active" onClick={plusValue}>
        +
      </button>
      <button id="moeda">2,00</button>
    </div>
  );
}
