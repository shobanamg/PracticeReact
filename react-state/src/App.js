import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(4);
  const decrementState = () => {
    //if i want to decrement the value of the state every time by 2, It won't work here. It will decrease the value of the state
    // every time by 1. so here we have to use the previous value of the state. Now it works.
    // setCount(count - 1);
    setCount((prevState) => prevState - 1);
    setCount((prevState) => prevState - 1);
  };

  const incrementState = () => {
    setCount((prevState) => prevState + 1);
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
