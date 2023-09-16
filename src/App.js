import React from "react";
// import "./index.css";

export default function App() {
  const [count, setCount] = React.useState(0);

  function subtract() {
    setCount((prevCount) => prevCount-1);
  }

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="main">
      <div className="number">{count}</div>
      <div className="buttons">
        <button onClick={subtract}>-</button>
        <button onClick={add}>+</button>
      </div>
    </div>
  );
}
