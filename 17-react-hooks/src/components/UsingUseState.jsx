import React, { useState } from "react";

export default function UsingUseState() {

  const [weight, setweight] = useState(0);

  return (
    <>
      <div>
        The package is {weight} kg.
      </div>
      <button onClick={() => setweight(weight + 1)}> + </button>
    </>
  )
}
