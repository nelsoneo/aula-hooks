import { useState } from "react";

const CounterHook = () => {

    const [count, setCount] = useState(1); //pode ter um valor inicial não obligatorio ?

  return (
    <div>
      <button onClick={() => { setCount(count + 1)}}>Counter +</button>
      <h1 id="box-counter">{count}</h1>
      <button onClick={() => { setCount(count - 1)}}>Counter -</button>
    </div>
  );
};

export default CounterHook;
