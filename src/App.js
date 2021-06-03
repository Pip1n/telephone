/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import "./App.css";

export default function App() {
  var [number, setNumber] = useState("");
  var display = "";
  var status = "";
  const regex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
  if (regex.test(number) === true) {
    status = "";
  } else {
    status = "Numero invalido";
  }

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
    setNumber(number + "0");
  }
  function onClickRemove() {
    setNumber(number.substring(0, number.length - 1));
  }
  function onClickC() {
    setNumber(number.substring(0, number.length - 100000000000000000));
  }
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
        <h2>{status}</h2>
        <div className="wrapper">
          <button className="button" onClick={onClick1}>
            1
          </button>

          <button className="button" onClick={onClick2}>
            2
          </button>

          <button className="button" onClick={onClick3}>
            3
          </button>

          <button className="button" onClick={onClick4}>
            4
          </button>

          <button className="button" onClick={onClick5}>
            5
          </button>

          <button className="button" onClick={onClick6}>
            6
          </button>

          <button className="button" onClick={onClick7}>
            7
          </button>

          <button className="button" onClick={onClick8}>
            8
          </button>

          <button className="button" onClick={onClick9}>
            9
          </button>

          <button className="button" onClick={onClickRemove}>
            -
          </button>

          <button className="button" onClick={onClick0}>
            0
          </button>

          <button className="button" onClick={onClickC}>
            C
          </button>
        </div>
        <a className="BigRingRing" href={"tel:" + number}>
          <img className="ringRing" src="https://freesvg.org/img/phone-call-icon.png" alt="lol just ring lmao"></img>
        </a>
      </header>
    </div>
  );
}
