import React, { useState, useEffect, useRef } from "react";
import { useClick } from "../Hooks";
export function Useclick() {
  //useRef ()
  //   const potato = useRef();
  //   useEffect(() => {
  //     setTimeout(() => {
  //       console.log("potato.current", potato.current);
  //       potato.current.focus();
  //     }, 2000);
  //   }, []);

  const sayHello = () => {
    console.log("Say Hello");
  };
  const title = useClick(sayHello);

  return (
    <div>
      <h1 ref={title}>Hi</h1>
      {/* <input type="text" placeholder="lalala" ref={potato} /> */}
    </div>
  );
}
