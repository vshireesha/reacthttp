import React, { useState } from "react";

const ParentOne = ({ children }) => {
  const [count, setCount] = useState(0);
  console.log("ParentOne  Rendering");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count -{count}</button>
      {children}
    </div>
  );
};

export default ParentOne;
