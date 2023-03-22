import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning((prevState) => !prevState);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCounter(0);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleStartPause}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
