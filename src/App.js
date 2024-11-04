import React, { useState } from "react";

function App() {
  const [advice, setAdvice] = useState("hi");

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={getAdvice}>Get advice</button>
      <h3>{advice}</h3>
    </div>
  );
}

export default App;
