const Counter = () => {
  let countAux = 10;

  function icrementCount() {
    countAux += 1;
    document.getElementById("box-counter").innerHTML = countAux;
  }

  function decrementCount() {
    countAux -= 1;
    document.getElementById("box-counter").innerHTML = countAux;
  }

  return (
    <div>
      <button onClick={icrementCount}>Counter +</button>
      <h1 id="box-counter">{countAux}</h1>
      <button onClick={decrementCount}>Counter -</button>
    </div>
  );
};

export default Counter;
