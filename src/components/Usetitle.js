import React, { useState } from "react";
import { useTitle } from "../Hooks";

export function Usetitle() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => {
    titleUpdater("타이틀 정보 로딩 완료");
  }, 2000);
  return <div></div>;
}
