import React, { useState } from "react";
import { useNotification } from "../Hooks";

export function Usenotification() {
  const triggerNotif = useNotification("Can I ask you to help?", {
    body: "Darcy yu",
  });
  return (
    <div>
      <button onClick={triggerNotif}> Hello Notification</button>
    </div>
  );
}
