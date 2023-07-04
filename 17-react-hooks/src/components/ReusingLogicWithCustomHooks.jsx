import React from "react";

// Custom Hook
import { useInput } from "../hooks/useInput";

export default function ReusingLogicWithCustomHooks() {
  const [sound, setSound ] = useInput("");
  const [color, setColor ] = useInput("#000000");

  const handlingSumbit = (e) => {
    e.preventDefault();
    alert(`${sound} sounds like ${color}`);
    setSound("");
    setColor("#000000");
  };

  return (
    <>
      <form onSubmit={handlingSumbit}>
        <input
          value={sound} 
          type="text" 
          placeholder="Sound ..." 
          onChange={
            (e) => setSound(e.target.value)
          }
        />
        <input
          value={color} 
          type="color"
          onChange={
            (e) => setColor(e.target.value)
          }
        />
        <button>
          Add
        </button>
      </form>
    </>
  )
}
