import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({ count: 0, theme: "light" });
  //const count = state.count;
  const { count, theme } = state;

  const decrementState = () => {
    setState((prevState) => ({ ...prevState, count: prevState.count - 1 }));
  };

  const incrementState = () => {
    setState((prevState) => ({ ...prevState, count: prevState.count + 1 }));
  };

  return (
    <div>
      <button onClick={decrementState}> - </button>
      <span> {count} </span>
      <span> {theme} </span>
      <button onClick={incrementState}> + </button>
    </div>
  );
}

export default App;
