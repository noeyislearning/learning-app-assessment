import React, { createContext, useContext } from "react";

const ItemContext = createContext();

const items = [
  {
    id: 1,
    name: "Item 1",
  },
  {
    id: 2,
    name: "Item 2",
  },
]

export default function PlacingDatainContext() {

  return (
    <ItemContext.Provider value={{items}}>
     <h1>
        This are the items:
     </h1>
     <ul>
        <ItemList />
     </ul>
    </ItemContext.Provider>
  )
}

function ItemList() {
  const { items } = useContext(ItemContext);

  return (
    <>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </>
  )
}