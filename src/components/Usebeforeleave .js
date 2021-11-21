import React, { useState } from "react";
import { useBeforeLeave } from "../Hooks";

export function Usebeforeleave() {
  const begForLife = () => {
    console.log("Plz don't leave");
  };

  useBeforeLeave(begForLife);
  return (
    <div>
      <h1>Hello ~ World </h1>
    </div>
  );
}
