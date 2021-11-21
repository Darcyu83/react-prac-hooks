import React, { useState, useEffect } from "react";

export function Useeffect() {
  const sayHello1 = () => console.log("hi");
  const sayHello2 = () => console.log("Hello Number chenged");
  const sayHello3 = () => console.log("Hello ANumber chenged");

  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);

  useEffect(sayHello1, []); // componentDidMount 최초 로딩시 1회 실행
  //   useEffect(sayHello2, [number]); // componentDidUpdate 지정변수 값이 변경될때 계속 실행
  //   useEffect(sayHello3, [aNumber]); // componentDidUpdate 지정변수 값이 변경될때 계속 실행

  return (
    <div>
      <h1>Number : {number}</h1>
      <h1>aNumber : {aNumber}</h1>

      <button onClick={() => setNumber((curr) => curr + 1)}>
        Increse Number
      </button>
      <button onClick={() => setANumber((curr) => curr + 1)}>
        Increase aNumber
      </button>
    </div>
  );
}
