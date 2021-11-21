import React, { useState } from "react";
import { useConfirm } from "../Hooks";

export function Useconfirm() {
  const deleteWorld = () => {
    console.log("Delete the world");
  };

  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);

  return (
    <div>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}
