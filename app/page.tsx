"use client";
import { useState } from "react";

export default function Home() {
  const [bill, setBill] = useState(50);
  const [tipPercentage, setTipPercentage] = useState(18);
  const [people, setPeople] = useState(1);

  const totalTip = (bill * tipPercentage) / 100;
  const perPersonTip = totalTip / people;
  return (
    <>
      <label htmlFor="bill">Bill : </label>
      <input
        id="bill"
        type="number"
        min="0"
        value={bill}
        onChange={(event) => {
          setBill(parseInt(event.target.value));
        }}
      />
      <label htmlFor="tipPercentage">Tip Percentage : </label>
      <input
        id="tipPercentage"
        type="number"
        min="0"
        value={tipPercentage}
        onChange={(event) => {
          setTipPercentage(parseInt(event.target.value));
        }}
      />
      <label htmlFor="people">People : </label>
      <input
        id="people"
        type="number"
        min="0"
        value={people}
        onChange={(event) => {
          setPeople(parseInt(event.target.value));
        }}
      />
      <p>Total tip: {isNaN(totalTip) ? "-" : `$${totalTip.toFixed(2)}`}</p>
      <p>
        Tip Per Person:{" "}
        {isNaN(perPersonTip) ? "-" : `$${perPersonTip.toFixed(2)}`}
      </p>
    </>
  );
}
