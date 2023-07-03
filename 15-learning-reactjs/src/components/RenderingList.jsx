import React from "react";

export default function RenderingList({ list }) {
  return (
    <>
      <ul>
        {
          list.map((item, index) => (
            <li key={index}>{item}</li>
          )
        )}
      </ul>
    </>
  )
}
