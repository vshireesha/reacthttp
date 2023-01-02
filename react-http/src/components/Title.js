import React from "react";

function Title() {
  console.log("Redering Title");
  return (
    <div>
      <h1>use Callback Hook</h1>
    </div>
  );
}

export default React.memo(Title);
