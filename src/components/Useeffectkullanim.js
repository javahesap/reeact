import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // ComponentDidMount & ComponentDidUpdate
  useEffect(() => {
    console.log("Component render edildi");
  });

  // ComponentDidMount (sadece 1 kere çalışır)
  useEffect(() => {
    console.log("Component mount edildi");
  }, []);

  // ComponentDidUpdate (sadece count değiştiğinde çalışır)
  useEffect(() => {
    console.log("Count değişti:", count);
  }, [count]);

  // ComponentWillUnmount
  useEffect(() => {
    return () => {
      console.log("Component unmount edildi");
    };
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Counter;
