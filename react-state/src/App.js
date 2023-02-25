import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(4);
  const decrementState = () => {
    setCount(count - 1);
    //if i want to decrement the value of the state every time by 2, It wont work here. It will decrease the value of the state
    // every time by 1. so here we have to use the previous value of the state.
    setCount(count - 1);
  };

  const incrementState = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={decrementState}> - </button>
      <span> {count} </span>
      <button onClick={incrementState}> + </button>
    </div>
  );
}

export default App;
