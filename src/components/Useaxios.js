import React, { useState } from "react";
import { useAxios } from "../Hooks";

export function Useaxios() {
  const { isLoading, error, data, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });

  console.log(
    `loding : ${isLoading}, data:${JSON.parse(data)}, error:${error}`
  );

  return (
    <div>
      <h1>useAxios</h1>
      <h2>{data && data.status} </h2>
      <h2>{isLoading ? "Loading..." : ""} </h2>
      <button onClick={refetch}> call data again </button>
    </div>
  );
}
