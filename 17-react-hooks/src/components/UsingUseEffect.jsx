import React, { useEffect, useState } from "react";

export default function UsingUseEffect() {

  const [name, setName] = useState("Francis");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    document.title = `17 React Hooks | ${name}!`
    console.log(`Celebrate with ${name}!`)
  }, [name]);

  useEffect(() => {
    console.log(`The user is: ${admin ? "admin" : "not an admin"}`)
  }, [admin])

  return (
    <>
      <div>
        <p>My Name is {name}!</p>
        <button onClick={() => setName("Noey")}>Change my Name</button>

        <p>The user is {admin ? "admin" : "not an admin"}</p>
        <button onClick={() => setAdmin(true)}>Login</button>
      </div>
    </>
  )
}
