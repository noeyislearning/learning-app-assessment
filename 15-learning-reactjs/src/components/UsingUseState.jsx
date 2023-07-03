import React, { useState } from "react";

export default function UsingUseState() {

  const [status, setStatus] = useState("Open");

  return (
    <>
      <h1>Status: {status}</h1>
      <button 
        onClick={() => setStatus("Close")}
      >
        Close
      </button>
      <button
        onClick={()=> setStatus("Open")}
      >
        Open
      </button>
    </>
  )
}
