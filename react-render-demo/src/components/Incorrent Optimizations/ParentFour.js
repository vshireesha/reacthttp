import React, { useState, useCallback } from "react";
import { MemoizedChildFive } from "./ChildFive";
//import { MemoizedChildFour } from "./ChildFour";
//import MemoizedChildThree from "./ChildThree";

const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Shireesha");

  // const person = {
  //   fname: "shireesha",
  //   lname: "Reddy",
  // };
  // const memoizedPerson = useMemo(() => person, []);
  const handleClick = () => {};
  const memoizedHandleClick = useCallback(handleClick, []);
  console.log("ParentFour  Rendering");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count -{count}</button>
      <button onClick={() => setName("Frend End Full stark Develaper")}>
        Change Name
      </button>
      {/* <MemoizedChildFive name={name} person={memoizedPerson} /> */}
      <MemoizedChildFive name={name} handleClick={memoizedHandleClick} />
    </div>
  );
};

export default ParentFour;
