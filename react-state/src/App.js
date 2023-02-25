import { useState } from "react";
import "./App.css";

const countInitial = () => {
  console.log("It runs every time component rerender");
  return 8;
};

function App() {
  const [count, setCount] = useState(() => countInitial());

  const decrementState = () => {
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
