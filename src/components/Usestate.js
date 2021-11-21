import React, { useState } from "react";

export function Usestate() {
  const [state, setState] = useState(0);

  const incrementItem = () => {
    setState((curr) => curr + 1);
  };

  const decrementItem = () => {
    setState((curr) => curr - 1);
  };

  return (
    <div>
      <h1>useState</h1>
      <h2>{state}</h2>
      <button
        style={{
          backgroundColor: "tomato",
          width: "70px",
          marginRight: "10px",
        }}
        onClick={incrementItem}
      >
        +
      </button>
      <button
        style={{
          backgroundColor: "tomato",
          width: "70px",
          marginRight: "10px",
        }}
        onClick={decrementItem}
      >
        -
      </button>
    </div>
  );
}

class UsestateWClass extends React.Component {
  state = { item: 1 };

  incrementItem = () => {
    this.setState((curr) => {
      return { item: curr.item + 1 };
    });
  };

  decrementItem = () => {
    this.setState((state) => {
      return { item: state.item - 1 };
    });
  };

  render() {
    const { item } = this.state;
    return (
      <div>
        <h1>setState</h1>
        <h2>{item}</h2>
        <button
          style={{
            backgroundColor: "cyan",
            width: "70px",
            marginRight: "10px",
          }}
          onClick={this.incrementItem}
        >
          +
        </button>
        <button
          style={{
            backgroundColor: "cyan",
            width: "70px",
            marginRight: "10px",
          }}
          onClick={this.decrementItem}
        >
          -
        </button>
      </div>
    );
  }
}
export default UsestateWClass;
