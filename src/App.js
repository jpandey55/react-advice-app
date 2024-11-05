import React, { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState(
    "click on the Get Advice button get generate an advice"
  );
  const [count, setCount] = useState(0);

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(function () {
    getAdvice();
  }, []);

  useEffect(function () {
    setInterval(function () {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((count) => count + 1);
  }

  return (
    <div>
      <h1>Hello Visitor</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message advice={advice} count={count} />
      <h1> Current Time is: {time} </h1>
    </div>
  );
}

function Message(props) {
  return (
    <>
      <h3>Advice of the day: {props.advice}</h3>
      <h3>Count: {props.count}</h3>
    </>
  );
}

export default App;
