import React, { Fragment, useState } from "react";

const App = ({initialCount}) => {
  const [count, setCount] = useState(initialCount);

  const addOne = () => {
    setCount(count + 1);
  };

  const minusOne = () => {
    setCount(prevCount => {
      console.log(prevCount);
      return prevCount - 1;
    });
  };

  return (
    <Fragment>
      <h3>Count : {count}</h3>
      <button onClick={addOne}>Add One</button>
      <button onClick={minusOne}>Minus One</button>
      <button onClick={()=>{setCount(initialCount)}}>RESET</button>
    </Fragment>
  );
};

export default App;
