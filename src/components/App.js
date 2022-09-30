import React, { useReducer } from "react";
import "../styles/App.css";

const App = () => {
  const initialState = 1;

  const counterReducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        return 0;
    }
  };

  const [state, disptch] = useReducer(counterReducer, initialState);

  return (
    <div id="main">
      <button id="increment" onClick={() => disptch("increment")}>
        Increment
      </button>
      <br />
      <br />
      <div id="counter">
        {(state % 15 === 0 && <div className="fizzbuzz">{state}</div>) ||
          (state % 5 === 0 && <div className="buzz">{state}</div>) ||
          (state % 3 === 0 && <div className="fizz">{state}</div>) ||
          (state % 3 !== 0 && state % 5 !== 0 && state % 15 !== 0 && (
            <div className="normal">{state}</div>
          ))}
      </div>
      <br />
      <button id="decrement" onClick={() => disptch("decrement")}>
        Decrement
      </button>
    </div>
  );
};

export default App;
