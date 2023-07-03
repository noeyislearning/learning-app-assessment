import React from "react";

export default function WorkingWithComponentTrees() {
  return (
    <>
      <Car length={10}/>
    </>
  )
}

function Car({ length }) {
  const createArray = (length) => {
    return [...Array(length).keys()]
  }

  return (
    <>
      {createArray(length).map((_, index) => (
        <span key={index}>🚗 </span>
      ))}
    </>
  )
}