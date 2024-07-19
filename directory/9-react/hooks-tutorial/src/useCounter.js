import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(initialValue);
  }

  function getCount() {
    return count;
  }

  return {
    increment,
    decrement,
    reset,
    getCount,
  };
}

export default useCounter;
