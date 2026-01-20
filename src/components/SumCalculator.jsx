import React from "react";
import { useState, useEffect } from "react";

export default function SumCalculator(){
  const [input, setInput] = useState(0);
  const [sum, setSum] = useState(0);

  function inputChanged() {
    setSum((p) => p + Number(input));
  }

  useEffect(() => {
    inputChanged();
  }, [input]);
  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>Sum: {sum}</p>
    </div>
  )
  
}
