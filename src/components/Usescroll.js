import React, { useState } from "react";
import { useScroll } from "../Hooks";

export function Usescroll() {
  const { y } = useScroll();

  return (
    <div style={{ height: "300vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hi</h1>
    </div>
  );
}
