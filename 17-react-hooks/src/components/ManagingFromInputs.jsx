import React, { useRef } from "react";

export default function ManagingFromInputs() {

  const sound = useRef();
  const color = useRef();

  const handlingSumbit = (e) => {
    e.preventDefault();
    const soundValue = sound.current.value;
    const colorValue = color.current.value;
    alert(`${soundValue} sounds like ${colorValue}`);
    sound.current.value = "";
    color.current.value = "";
  };

  return (
    <>
      <form onSubmit={handlingSumbit}>
        <input
          ref={sound} 
          type="text" 
          placeholder="Sound ..." 
        />
        <input
          ref={color} 
          type="color"
        />
        <button>
          Add
        </button>
      </form>
    </>
  )
}
