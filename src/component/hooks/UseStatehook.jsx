import React, { useState } from 'react';

function UseStatehook() {
  const [color, setColor] = useState("red");

  const mouseOver = () => {
    setColor('blue'); 
  };
      const[count,setCount] = useState(0); 
     const increment = () => {
     setCount(count +1)
     };

     const decrement = () => {
      setCount(count -1);
     };

     const reset =() => {
      setCount(0);
     };

  return (
    <>
      <h1>UseState Hook</h1>
      <p style={{ color: color }}  onMouseOver={mouseOver}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam hic maiores culpa possimus sequi, fugiat sint, sunt saepe sapiente facere doloribus distinctio nobis quisquam dolorum voluptas exercitationem aut numquam sed voluptate a consectetur.
      </p>
      <div>
        <h2>{count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default UseStatehook;