import React, { useState } from 'react';
function Counter() {
  const [newCount, setCount] = useState(0);
  function increment() {
    setCount(newCount + 1);
  }
  function decrement() {
    setCount(newCount - 1);
  }
  return (
    <>
      <h1>{newCount}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
}
export default Counter;
