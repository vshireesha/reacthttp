import React from "react";

const ChildTwo = () => {
  console.log("ChildTwo Render");
  return <div>ChildOne Componrts</div>;
};

export const MemoizedChildTwo = React.memo(ChildTwo);
export default ChildTwo;
