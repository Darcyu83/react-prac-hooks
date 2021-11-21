import React, { useState } from "react";
import { useFullscreen } from "../Hooks";

export function Usefullscreen() {
  const onFulls = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFulls);

  return (
    <div>
      <h1>Use Fullscreen</h1>
      <div ref={element}>
        <img
          src="https://i.ibb.co/R6RwNxx/grape.jpg"
          alt="grape"
          style={{ width: "250px" }}
        />
        <button onClick={exitFull}>Make it small </button>
      </div>
      <button onClick={triggerFull}>Make it Fullscreen </button>
    </div>
  );
}
