import React, { useState } from "react";

export default function CreatingControlledComponents() {
  
  const [sound, setSound ] = useState("");
  const [color, setColor ] = useState("");

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
