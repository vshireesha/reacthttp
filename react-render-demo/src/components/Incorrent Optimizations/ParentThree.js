import React, { useState } from "react";
import { MemoizedChildFour } from "./ChildFour";
//import MemoizedChildThree from "./ChildThree";

const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Shireesha");
  console.log("ParentThree  Rendering");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count -{count}</button>
      <button onClick={() => setName("Frend End Full stark Develaper")}>
        Change Name
      </button>
      <MemoizedChildFour name={name} />
      {/* <MemoizedChildThree name={name}>
        <strong>Hello</strong>
      </MemoizedChildThree> */}
    </div>
  );
};

export default ParentThree;
