import React from "react";
import ReactDOM from "react-dom";

export default function Hello({library, message, number}) {
  return (
    <>
      <div>
        <h1>{library}</h1>
        <p>{message}</p>
        <p>{number}</p>
      </div>
    </>
  )
}
