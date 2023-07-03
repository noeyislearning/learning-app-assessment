import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

export default function InteractionComponentTrees({ selected = false, onSelect = (f) => f }) {
  return (
    <>
      <Star 
        selected={selected}
        length={5}
        onClick={onSelect}
      />
    </>
  )
}

function Star({ length, selected, onClick }) {
  const createArray = (length) => {
    return [...Array(length).keys()]
  }

  const [selectedStars, setSelectedStars ] = useState(0)

  const handleClick = (index) => {
    setSelectedStars(index + 1)
    onClick(index + 1)
  }

  return (
    <>
      {createArray(length).map((_, index) => (
        <AiFillStar
          key={index}
          color={selectedStars > index ? "red" : "gray"}
          style={{ cursor: "pointer", width: "50px", height: "50px" }}
          onClick={() => handleClick(index)}
        />
      ))}
    </>
  )
}