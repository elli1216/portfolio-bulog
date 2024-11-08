import React, {useState} from "react";

function MyComponent(){
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  }
  const resetCount = () => {
    setCount(0);
  }
  const decrementCount = () => {
    setCount(count - 1);
  }

  return (
    <div className="buttonCount">
      <h1>Count:
        <button onClick={incrementCount}>Increment Number</button>
        <button onClick={resetCount}>Reset</button>
        <button onClick={decrementCount}>Decrement Number</button>
      </h1>
    </div>
  );
}

export default MyComponent;