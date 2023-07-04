import React, { useReducer } from "react";

export default function HandlingComplexStateUseReducer() {

  const [number, setNumber] = useReducer((number, newNumber) => number + newNumber, 0);

  return (
    <>
      <div>
        <h3>{number}</h3>
        <button
          onClick={() => setNumber(1)}
        >
          Add + 1
        </button>
        <button
          onClick={() => setNumber(-1)}
        >
          Add - 1
        </button>
      </div>
    </>
  )
}
