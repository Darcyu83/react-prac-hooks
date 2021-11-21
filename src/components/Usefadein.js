import React, { useState } from "react";
import { useFadeIn } from "../Hooks";
export function Usefadein() {
  const fadeInH1 = useFadeIn(5, 1);
  const fadeInP = useFadeIn(3, 4);
  return (
    <div>
      <h1>Title</h1>
      <h1 {...fadeInH1}>Fade in Title</h1>
      <p {...fadeInP}>Fade in paragraph</p>
    </div>
  );
}
