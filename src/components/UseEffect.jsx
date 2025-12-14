import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) return;
    const initialTimeId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(initialTimeId);
    };
  }, [start]);
  return (
    <>
      <p>Ritik</p>
      <p>JK</p>
      <button onClick={() => setStart(true)}>Start</button>
      <h3>{count}</h3>
      <button onClick={() => setStart(false)}>Stop</button>
    </>
  );
};

export default UseEffect;
