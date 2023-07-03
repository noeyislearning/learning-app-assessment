import React from "react";

export default function ConditionalRendering({ season }) {
  return (
    <>
      {season === "summer" ? (
        <Summer />
      ):
      (
        <Winter />
      )}
    </>
  )
}

function Summer() {
  return(
    <div>
      Today's Season: Summer
    </div>
  )
}

function Winter() {
  return(
    <div>
      Today's Season: Winter
    </div>
  )
}