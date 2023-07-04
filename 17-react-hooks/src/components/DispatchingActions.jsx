import React, { useReducer } from "react";

const initialState = {
  message: "Hi!"
};

function reducer(state, action) {
  switch(action.type) {
    case "yell":
      return {
        message: "HEY!"
      }
    
    case "whisper":
      return {
        message: "Excuse me."
      }
  }
}

export default function DispatchingActions() {

  const [state, dispatch] = useReducer(
    reducer,
    initialState, 
  );

  return (
    <>
      <div>
        <p>Mesage: {state.message}</p>
        <button
          onClick={() => dispatch({ type: "yell" })}
        >
          Yell
        </button>
        <button
          onClick={() => dispatch({ type: "whisper" })}
        >
          Whisper
        </button>
      </div>
    </>
  )
}
