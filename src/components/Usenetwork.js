import React, { useState } from "react";
import { useNetwork } from "../Hooks";

export function Usenetwork() {
  const handleNetworkChange = (isOnline) => {
    console.log(isOnline ? "We just wnt online" : "We are offline");
  };
  const online = useNetwork(handleNetworkChange);

  return (
    <div>
      <h1>UseNetwork</h1>
      <h2>{online ? "Online" : "Offline"}</h2>
    </div>
  );
}
