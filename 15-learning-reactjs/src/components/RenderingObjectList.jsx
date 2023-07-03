import React from "react"

export default function RenderingObjectList({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <div>{item.name}</div>
          <div>Description: {item.desc}</div>
        </li>
      ))}
    </ul>
  )
}
