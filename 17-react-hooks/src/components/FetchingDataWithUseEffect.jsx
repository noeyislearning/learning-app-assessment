import React, { useState, useEffect } from "react";

export default function FetchingDataWithUseEffect() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <>
      <button 
        onClick={() => setData([])}
      >
        Remove all Data
      </button>
      <div>
        {data ? (
          <ul>
            {data.map((user) => (
              <li key={user.id}>{user.login}</li>
            ))}
          </ul>
        ): (
          <p>
            No Such User.
          </p>
        )}
      </div>
    </>
  )
}
