/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import "./App.css";

export default function App() {
  var [number, setNumber] = useState("");
  var display = "";
  if (number === "") {
    display = "Dial the Number Here";
  } else {
    display = number;
  }

  function onClick1() {
    setNumber(number + 1);
  }
  function onClick2() {
    setNumber(number + 2);
  }
  function onClick3() {
    setNumber(number + 3);
  }
  function onClick4() {
    setNumber(number + 4);
  }
  function onClick5() {
    setNumber(number + 5);
  }
  function onClick6() {
    setNumber(number + 6);
  }
  function onClick7() {
    setNumber(number + 7);
  }
  function onClick8() {
    setNumber(number + 8);
  }
  function onClick9() {
    setNumber(number + 9);
  }
  function onClick0() {
    setNumber(number + 0);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>{display}</h1>
        <button onClick={onClick1}>1</button>

        <button onClick={onClick2}>2</button>

        <button onClick={onClick3}>3</button>

        <button onClick={onClick4}>4</button>

        <button onClick={onClick5}>5</button>

        <button onClick={onClick6}>6</button>

        <button onClick={onClick7}>7</button>

        <button onClick={onClick8}>8</button>

        <button onClick={onClick9}>9</button>

        <button onClick={onClick0}>0</button>
      </header>
    </div>
  );
}
