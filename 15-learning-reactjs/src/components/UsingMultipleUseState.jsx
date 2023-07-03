import React from "react";

export default function UsingMultipleUseState() {

  const [manager, setManager] = React.useState("Francis");
  const [status, setStatus] = React.useState("Open");

  return (
    <>
      <div>
        <h1>
          Manager on duty: {manager}
        </h1>
        <button 
          onClick={() => setManager("Noey")}
        >
          Change manager on duty.
        </button>
      </div>
      <div>
        <h1>Shop Status: {status}</h1>
      </div>
      <div>
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
      </div>
    </>
  )
}
