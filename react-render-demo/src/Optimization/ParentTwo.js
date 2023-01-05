import React, { useState } from "react";
import MemoizedChildTwo from "./ChildTwo";

const ParentTwo = ({ children }) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Shireesha");
  console.log("ParentTwo  Rendering");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count -{count}</button>
      <button onClick={() => setName("Frend End Full stark Develaper")}>
        Change Name
      </button>
      <MemoizedChildTwo name={name} />
    </div>
  );
};

export default ParentTwo;
