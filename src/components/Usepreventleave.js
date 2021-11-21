import React, { useState } from "react";
import { usePreventLeave } from "../Hooks";

export function Usepreventleave() {
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div>
      <button onClick={enablePrevent}>enablePrevent</button>
      <button onClick={disablePrevent}>disablePrevent</button>
    </div>
  );
}
