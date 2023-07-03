import React, { useEffect, useState } from "react";

export default function FetchingDataWithUseEffect({ user }) {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
    .then(
      res => res.json()
    )
    .then(setData)
    .catch(error => {
      console.error("Error:", error);
    }) 
  })


  return (
    <>
      {
        data ? (
          <div>
            <p>User: {data.login}</p>
          </div>
        ): (
          <div>There's no such user.</div>
        )
      }
    </>
  )
}
