import React, { useState, useEffect } from "react";

export default function UpdatingWithTheUseEffect() {

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  useEffect(() => {
    console.log(`field 1: ${value1}`);
    console.log(`field 2: ${value2}`);
  }, [value1, value2]);
  
  return (
    <>
      <div>
        <label>
          Favorite Phrase:
          <input 
            value={value1}
            onChange={e => setValue1(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Second Favorite Phrase:
          <input
            value={value2}
            onChange={e => setValue2(e.target.value)}
          />
        </label>
      </div>
    </>
  )
}
