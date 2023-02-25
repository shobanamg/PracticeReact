import { useState } from "react";
import "./App.css";

function App() {
  // Whenever we use useState hook, we need to pass the initial value. if we don't pass the initial value, the component will not rerender.
  // In the mean time if we pass the initial value as a function,
  // the function only run one time and it will not run every time the component rerender.
  const [count, setCount] = useState(() => {
    console.log("It render only one time");
    return 8; // this is initial value of the  state.
  });

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
