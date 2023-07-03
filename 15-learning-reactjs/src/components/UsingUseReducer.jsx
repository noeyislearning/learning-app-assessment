import React, { useReducer } from "react";

export default function UsingUseReducer() {

  const [checked, toggle] = useReducer(
    checked => !checked,
    false
  )

  return (
    <>
      <>
      <input
        type="checkbox"
        value={checked}
        onChange={toggle}
      />
      {checked ? "checked" : "not checked"}
    </>
    </>
  )
}
