import { useState } from 'react';

function StateBatch() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const handleCountClick = () => {
    const newCount=count+1
    let newcount;
    setCount(count+1);
    // setCount(2 + 1);
    // le5t new
    setCount((prevCount) =>{
        alert(prevCount)
        
    });
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) =>{
        alert(prevCount)
        return prevCount + 1;
    });
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <button onClick={handleCountClick}>Click me</button>
    </div>
  );
}
export default StateBatch;