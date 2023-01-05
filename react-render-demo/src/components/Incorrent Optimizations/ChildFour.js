import React from "react";

export const ChildFour = ({ name }) => {
  const date = new Date();
  console.log("ChildFour render");
  return (
    <div>
      Hello{name}. It is currently{Date()}: {date.getHours()}:
      {date.getMinutes()}:{""}
      {date.getSeconds()}
    </div>
  );
};

export const MemoizedChildFour = React.memo(ChildFour);
