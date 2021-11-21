import React, { useState } from "react";
import { useInput } from "../Hooks";

export function Useinput() {
  //validator정의
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);

  return (
    <div>
      <input placeholder="Name" {...name} />
    </div>
  );
}
